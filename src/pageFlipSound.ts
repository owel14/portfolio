export type FlipDirection = 'open' | 'close';

function createSound(path: string): HTMLAudioElement {
  const audio = new Audio(`${import.meta.env.BASE_URL}${path}`);
  audio.preload = 'auto';
  return audio;
}

// Created up front so the first flip plays without waiting on a download.
// Skipped when prerendering at build time, where there is no Audio.
const sounds: Record<FlipDirection, HTMLAudioElement> | null = typeof Audio === 'undefined' ? null : {
  open: createSound('sounds/flipping-page-back.mp3'),
  close: createSound('sounds/flipping-page-forward.mp3'),
};

export function playPageFlip(direction: FlipDirection): void {
  if (sounds === null) return;

  const audio = sounds[direction];
  // Restart rather than ignore when a panel is toggled again mid-sound.
  audio.currentTime = 0;
  audio.play().catch(() => {
    // Playback can be blocked by the browser; folding still works without sound.
  });
}
