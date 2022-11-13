export function debounce<FN extends (...args: any[]) => void>(
  fn: FN,
  ms: number
) {
  let lastRunTime = performance.now();
  let stopId: ReturnType<typeof setTimeout> | undefined;
  //@ts-expect-error
  const debouncedFn: FN = (...args: any[]) => {
    const shouldCallTrailing = performance.now() > lastRunTime + ms;
    if (!shouldCallTrailing) {
      clearTimeout(stopId);
    }
    stopId = setTimeout(() => {
      fn(...args);
      lastRunTime = performance.now();
    }, ms);
  };

  return debouncedFn;
}
