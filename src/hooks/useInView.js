import {useEffect, useRef, useState} from "react";

/* Reports once when the element first enters the viewport.
   Falls back to "visible" when IntersectionObserver is unavailable. */
export function useInView({
  rootMargin = "0px 0px -10% 0px",
  threshold = 0.1
} = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {rootMargin, threshold}
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return [ref, visible];
}
