export function cx(...classes: readonly string[]): string {
  return classes.filter((className) => className.length > 0).join(' ');
}
