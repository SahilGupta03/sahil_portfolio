import {useLayoutEffect, useRef, useState} from "react";

/* Scales a single line of text so it exactly fills its container's width.
   Measures at a 100px reference size, then derives the fitting size.
   Re-fits on container resize and once web fonts have loaded. */
export function useFitText({min = 40, max = 320} = {}) {
  const boxRef = useRef(null);
  const textRef = useRef(null);
  const [fontSize, setFontSize] = useState(null);

  useLayoutEffect(() => {
    const box = boxRef.current;
    const text = textRef.current;
    if (!box || !text) return undefined;

    const fit = () => {
      const previous = text.style.fontSize;
      text.style.fontSize = "100px";
      const width = text.scrollWidth;
      text.style.fontSize = previous;
      if (!width) return;
      const next = Math.floor((100 * box.clientWidth) / width);
      setFontSize(Math.max(min, Math.min(max, next)));
    };

    fit();
    let observer;
    if (typeof ResizeObserver !== "undefined") {
      observer = new ResizeObserver(fit);
      observer.observe(box);
    } else {
      window.addEventListener("resize", fit);
    }
    let cancelled = false;
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        if (!cancelled) fit();
      });
    }
    return () => {
      cancelled = true;
      if (observer) observer.disconnect();
      else window.removeEventListener("resize", fit);
    };
  }, [min, max]);

  return [boxRef, textRef, fontSize];
}
