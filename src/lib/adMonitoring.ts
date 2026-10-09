export type AdDiagnostic = "cmp-error" | "loader-ready" | "loader-error" | "slot-requested" | "slot-error" | "consent-denied" | "CLS" | "LCP";

// Local events only. No cookies, TC strings, identifiers, URLs or network sink.
export function reportAdDiagnostic(enabled: boolean, name: AdDiagnostic, value?: number): void {
  if (!enabled || typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("presda:ad-diagnostic", {
    detail: { name, ...(Number.isFinite(value) ? { value } : {}) }
  }));
}

export function observeAdVitals(enabled: boolean): () => void {
  if (!enabled || typeof PerformanceObserver === "undefined") return () => {};
  const observers: PerformanceObserver[] = [];
  let sessionStart = 0, lastShift = 0, sessionValue = 0, cls = 0;
  for (const type of ["layout-shift", "largest-contentful-paint"]) {
    if (!PerformanceObserver.supportedEntryTypes.includes(type)) continue;
    const observer = new PerformanceObserver(list => {
      for (const entry of list.getEntries()) {
        if (type === "largest-contentful-paint") {
          reportAdDiagnostic(true, "LCP", entry.startTime);
        } else {
          const shift = entry as PerformanceEntry & { hadRecentInput: boolean; value: number };
          if (shift.hadRecentInput) continue;
          if (entry.startTime - lastShift > 1000 || entry.startTime - sessionStart > 5000) {
            sessionStart = entry.startTime; sessionValue = 0;
          }
          lastShift = entry.startTime; sessionValue += shift.value;
          if (sessionValue > cls) { cls = sessionValue; reportAdDiagnostic(true, "CLS", cls); }
        }
      }
    });
    observer.observe({ type, buffered: true }); observers.push(observer);
  }
  return () => observers.forEach(observer => observer.disconnect());
}
