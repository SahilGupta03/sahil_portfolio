import React, {useEffect, useRef, useState} from "react";
import {useInView} from "../../hooks/useInView";
import {useReducedMotion} from "../../hooks/useReducedMotion";

/* Counts from 0 to `value` once in view. Renders the final value
   immediately for reduced motion or when the observer is unavailable. */
export default function CountUp({
  value,
  prefix = "",
  suffix = "",
  duration = 1400
}) {
  const [ref, visible] = useInView({threshold: 0.4});
  const reduced = useReducedMotion();
  const [current, setCurrent] = useState(value);
  const started = useRef(false);

  useEffect(() => {
    if (!visible || started.current || reduced) return undefined;
    started.current = true;
    let frame;
    const start = performance.now();
    const tick = now => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 4);
      setCurrent(Math.round(eased * value));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    setCurrent(0);
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible, reduced, value, duration]);

  return (
    <span ref={ref}>
      <span className="visually-hidden">
        {prefix}
        {value}
        {suffix}
      </span>
      <span aria-hidden="true">
        {prefix}
        {current}
        {suffix}
      </span>
    </span>
  );
}
