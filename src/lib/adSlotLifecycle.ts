import { isSafeAdElement } from "./adPlacementPolicy";

type AdQueue = { push: (request: Record<string, never>) => unknown };
export function requestManualAd(element: HTMLElement, queue: AdQueue): "requested" | "skipped" | "failed" {
  if (!isSafeAdElement(element) || element.getBoundingClientRect().width < 300 ||
      element.dataset.presdaRequested || element.dataset.adsbygoogleStatus) return "skipped";
  // Set before push: exceptions and Strict Mode must never retry this element.
  element.dataset.presdaRequested = "true";
  try { queue.push({}); return "requested"; }
  catch { return "failed"; }
}
