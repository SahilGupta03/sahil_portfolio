import React from "react";
import {useInView} from "../../hooks/useInView";
import "./SectionHeading.scss";

/* Editorial section heading: index + label on a hairline that draws in,
   then a large title whose `accent` phrase is set in italic serif. */
export default function SectionHeading({
  id,
  index,
  label,
  title,
  accent,
  description,
  align = "start"
}) {
  const [ref, visible] = useInView();
  const titleWords = title.split(" ");
  const accentWords = accent ? accent.split(" ") : [];
  const fullTitle = accent ? `${title} ${accent}` : title;

  const word = (text, i, serif) => (
    <React.Fragment key={`${text}-${i}`}>
      <span className="split__mask" aria-hidden="true">
        <span
          className={`split__word ${serif ? "serif" : ""}`}
          style={{"--i": i}}
        >
          {text}
        </span>
      </span>{" "}
    </React.Fragment>
  );

  return (
    <header
      ref={ref}
      className={`section-heading section-heading--${align} ${
        visible ? "is-visible" : ""
      }`}
    >
      <div className="section-heading__meta">
        <span className="section-heading__index mono">{index}</span>
        <span className="section-heading__label mono">{label}</span>
        <span className="rule section-heading__rule" aria-hidden="true" />
      </div>
      <h2
        id={id}
        className={`section-heading__title split ${
          visible ? "is-visible" : ""
        }`}
      >
        <span className="visually-hidden">{fullTitle}</span>
        {titleWords.map((w, i) => word(w, i, false))}
        {accentWords.map((w, i) => word(w, titleWords.length + i, true))}
      </h2>
      {description && (
        <p className="section-heading__description">{description}</p>
      )}
    </header>
  );
}
