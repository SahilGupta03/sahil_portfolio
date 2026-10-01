import React from "react";
import "./Marquee.scss";

/* Decorative, infinitely scrolling band. Hidden from assistive tech because
   the same items are listed in the Skills section. */
export default function Marquee({items}) {
  const row = (
    <ul className="marquee__row">
      {items.map((item, index) => (
        <li key={item} className={index % 2 ? "serif" : ""}>
          {item}
          <span className="marquee__star">✺</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {row}
        {row}
      </div>
    </div>
  );
}
