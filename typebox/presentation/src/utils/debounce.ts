export function debounce<FN extends (...args: any[]) => void>(
  fn: FN,
  ms: number
) {
  let stopId: ReturnType<typeof setTimeout> | undefined;
  //@ts-expect-error
  const debouncedFn: FN = (...args: any[]) => {
    clearTimeout(stopId);
    stopId = setTimeout(() => {
      fn(...args);
    }, ms);
  };

  return debouncedFn;
}
