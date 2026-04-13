import { useCallback, useEffect, useRef } from 'react';
import type {
  KeyboardEvent as ReactKeyboardEvent,
  MouseEvent as ReactMouseEvent,
  PointerEvent as ReactPointerEvent,
} from 'react';

const INITIAL_ROTATION = { x: -6, y: -12 };
const MIN_X_ROTATION = -58;
const MAX_X_ROTATION = 58;
const ROTATION_SENSITIVITY = 0.22;
const DRAG_CLICK_THRESHOLD_SQUARED = 25;
const CLICK_SUPPRESSION_MS = 250;
const FULL_TURN = 360;

type RotationState = {
  x: number;
  y: number;
  startX: number;
  startY: number;
  startRotX: number;
  startRotY: number;
  dragging: boolean;
  moved: boolean;
  suppressClick: boolean;
};

type ActivePointerHandlers = {
  move: (e: PointerEvent) => void;
  end: () => void;
};

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function isBackFacing(yRotation: number): boolean {
  const normalizedRotation = ((yRotation % FULL_TURN) + FULL_TURN) % FULL_TURN;
  return normalizedRotation > 90 && normalizedRotation < 270;
}

export function usePamphletRotation() {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const pamphletRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef(0);
  const suppressTimerRef = useRef(0);
  const rotationRef = useRef<RotationState>({
    x: INITIAL_ROTATION.x,
    y: INITIAL_ROTATION.y,
    startX: 0,
    startY: 0,
    startRotX: INITIAL_ROTATION.x,
    startRotY: INITIAL_ROTATION.y,
    dragging: false,
    moved: false,
    suppressClick: false,
  });

  // Stores the exact handler references added to window so they can be removed
  // using the same reference, without handlePointerEnd needing to close over itself.
  const activeHandlersRef = useRef<ActivePointerHandlers | null>(null);

  const renderRotation = useCallback((): void => {
    frameRef.current = 0;
    const pamphlet = pamphletRef.current;

    if (pamphlet === null) return;

    const { x, y } = rotationRef.current;
    pamphlet.style.setProperty('--rx', `${String(x)}deg`);
    pamphlet.style.setProperty('--ry', `${String(y)}deg`);
    pamphlet.classList.toggle('is-view-back', isBackFacing(y));
  }, []);

  const setRotation = useCallback((x: number, y: number): void => {
    const rotation = rotationRef.current;
    rotation.x = clamp(x, MIN_X_ROTATION, MAX_X_ROTATION);
    rotation.y = y;

    if (frameRef.current === 0) {
      frameRef.current = requestAnimationFrame(renderRotation);
    }
  }, [renderRotation]);

  const handlePointerMove = useCallback((event: PointerEvent): void => {
    const rotation = rotationRef.current;

    if (!rotation.dragging) return;

    const deltaX = event.clientX - rotation.startX;
    const deltaY = event.clientY - rotation.startY;

    if ((deltaX * deltaX) + (deltaY * deltaY) > DRAG_CLICK_THRESHOLD_SQUARED) {
      rotation.moved = true;
    }

    setRotation(
      rotation.startRotX - deltaY * ROTATION_SENSITIVITY,
      rotation.startRotY + deltaX * ROTATION_SENSITIVITY
    );

    if (event.cancelable) {
      event.preventDefault();
    }
  }, [setRotation]);

  const clearClickSuppression = useCallback((): void => {
    rotationRef.current.suppressClick = false;
    suppressTimerRef.current = 0;
  }, []);

  const handlePointerEnd = useCallback((): void => {
    const rotation = rotationRef.current;

    if (!rotation.dragging) return;

    rotation.dragging = false;
    const stage = stageRef.current;

    if (stage !== null) {
      stage.classList.remove('is-dragging');
    }

    // Remove using the exact references that were added — no self-reference needed.
    const handlers = activeHandlersRef.current;
    if (handlers !== null) {
      window.removeEventListener('pointermove', handlers.move);
      window.removeEventListener('pointerup', handlers.end);
      window.removeEventListener('pointercancel', handlers.end);
      activeHandlersRef.current = null;
    }

    if (rotation.moved) {
      rotation.suppressClick = true;
      window.clearTimeout(suppressTimerRef.current);
      suppressTimerRef.current = window.setTimeout(clearClickSuppression, CLICK_SUPPRESSION_MS);
    }
  }, [clearClickSuppression]);

  const handlePointerDown = useCallback((event: ReactPointerEvent<HTMLDivElement>): void => {
    if (event.button !== 0 && event.pointerType !== 'touch') return;

    const rotation = rotationRef.current;
    rotation.dragging = true;
    rotation.moved = false;
    rotation.startX = event.clientX;
    rotation.startY = event.clientY;
    rotation.startRotX = rotation.x;
    rotation.startRotY = rotation.y;

    const stage = stageRef.current;

    if (stage !== null) {
      stage.classList.add('is-dragging');
    }

    // Store the exact references before adding so handlePointerEnd can remove them.
    activeHandlersRef.current = { move: handlePointerMove, end: handlePointerEnd };
    window.addEventListener('pointermove', handlePointerMove, { passive: false });
    window.addEventListener('pointerup', handlePointerEnd);
    window.addEventListener('pointercancel', handlePointerEnd);
  }, [handlePointerEnd, handlePointerMove]);

  const handleClickCapture = useCallback((event: ReactMouseEvent<HTMLDivElement>): void => {
    const rotation = rotationRef.current;

    if (!rotation.suppressClick) return;

    event.preventDefault();
    event.stopPropagation();
    clearClickSuppression();
  }, [clearClickSuppression]);

  const handleKeyDown = useCallback((event: ReactKeyboardEvent<HTMLDivElement>): void => {
    const step = event.shiftKey ? 12 : 6;
    const rotation = rotationRef.current;

    switch (event.key) {
      case 'ArrowUp':
        setRotation(rotation.x + step, rotation.y);
        break;
      case 'ArrowDown':
        setRotation(rotation.x - step, rotation.y);
        break;
      case 'ArrowLeft':
        setRotation(rotation.x, rotation.y - step);
        break;
      case 'ArrowRight':
        setRotation(rotation.x, rotation.y + step);
        break;
      case 'Home':
        setRotation(INITIAL_ROTATION.x, INITIAL_ROTATION.y);
        break;
      default:
        return;
    }

    event.preventDefault();
  }, [setRotation]);

  useEffect(() => {
    renderRotation();

    return (): void => {
      window.clearTimeout(suppressTimerRef.current);

      if (frameRef.current !== 0) {
        cancelAnimationFrame(frameRef.current);
      }

      const handlers = activeHandlersRef.current;
      if (handlers !== null) {
        window.removeEventListener('pointermove', handlers.move);
        window.removeEventListener('pointerup', handlers.end);
        window.removeEventListener('pointercancel', handlers.end);
      }
    };
  }, [renderRotation]);

  return {
    stageRef,
    pamphletRef,
    stageProps: {
      onClickCapture: handleClickCapture,
      onPointerDown: handlePointerDown,
    },
    pamphletProps: {
      onKeyDown: handleKeyDown,
    },
  };
}
