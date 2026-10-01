import React from "react";
import {useInView} from "../../hooks/useInView";

/* Fades content up once when it scrolls into view. `delay` is in ms.
   Content stays visible when IntersectionObserver is unavailable (the
   `reveal-ready` class is only added when it is), and CSS skips the
   animation entirely for users who prefer reduced motion. */
export default function Reveal({
  as: Tag = "div",
  className = "",
  delay = 0,
  style,
  children,
  ...props
}) {
  const [ref, visible] = useInView();

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={delay ? {...style, "--delay": delay} : style}
      {...props}
    >
      {children}
    </Tag>
  );
}
