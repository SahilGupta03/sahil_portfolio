import {useEffect, useRef} from "react";
import {useReducedMotion} from "./useReducedMotion";

/* Writes `--p` (−1 … 1) on the element: its vertical offset from the
   viewport centre. Children translate with calc(var(--p) * Npx).
   Runs in a rAF-throttled passive scroll listener, never re-renders,
   and is disabled for reduced motion. */
export function useParallax() {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || reduced) {
      if (node) node.style.setProperty("--p", 0);
      return undefined;
    }
    let frame = null;
    const update = () => {
      frame = null;
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const offset = (rect.top + rect.height / 2 - vh / 2) / vh;
      node.style.setProperty(
        "--p",
        Math.max(-1, Math.min(1, offset)).toFixed(3)
      );
    };
    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, {passive: true});
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [reduced]);

  return ref;
}
