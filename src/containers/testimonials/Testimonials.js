import React from "react";
import "./Testimonials.scss";
import Reveal from "../../components/reveal/Reveal";
import {testimonials} from "../../portfolio";

/* Client quotes. Renders nothing until real testimonials are added to
   `testimonials` in portfolio.js. */
export default function Testimonials() {
  if (!testimonials.length) return null;

  return (
    <section
      id="testimonials"
      className="section testimonials"
      aria-labelledby="testimonials-title"
    >
      <div className="container">
        <h2 id="testimonials-title" className="testimonials__label mono">
          What clients say
        </h2>
        <ul className="testimonials__list">
          {testimonials.map((item, index) => (
            <Reveal
              as="li"
              key={item.name}
              className="testimonials__item"
              delay={index * 90}
            >
              <figure>
                <blockquote className="testimonials__quote serif">
                  “{item.quote}”
                </blockquote>
                <figcaption className="testimonials__by">
                  <span className="testimonials__name">{item.name}</span>
                  {item.role && (
                    <span className="testimonials__role mono">{item.role}</span>
                  )}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
