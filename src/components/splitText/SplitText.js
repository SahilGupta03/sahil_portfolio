import React from "react";
import {useInView} from "../../hooks/useInView";

/* Renders text as masked words that slide up in sequence when in view.
   Screen readers get one plain, visually hidden copy of the text; the
   animated word spans are aria-hidden so it isn't read word by word. */
export default function SplitText({
  as: Tag = "span",
  text,
  className = "",
  delay = 0,
  startIndex = 0,
  ...props
}) {
  const [ref, visible] = useInView();
  const words = text.split(" ");

  return (
    <Tag
      ref={ref}
      className={`split ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={delay ? {"--delay": delay} : undefined}
      {...props}
    >
      <span className="visually-hidden">{text}</span>
      {words.map((word, index) => (
        <React.Fragment key={`${word}-${index}`}>
          <span className="split__mask" aria-hidden="true">
            <span className="split__word" style={{"--i": startIndex + index}}>
              {word}
            </span>
          </span>
          {index < words.length - 1 ? " " : null}
        </React.Fragment>
      ))}
    </Tag>
  );
}
