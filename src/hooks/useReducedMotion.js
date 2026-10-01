import {useEffect, useState} from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

export function useReducedMotion() {
  const [reduced, setReduced] = useState(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    const query = window.matchMedia(QUERY);
    return Boolean(query && query.matches);
  });

  useEffect(() => {
    if (!window.matchMedia) return undefined;
    const query = window.matchMedia(QUERY);
    if (!query || !query.addEventListener) return undefined;
    const onChange = event => setReduced(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduced;
}
