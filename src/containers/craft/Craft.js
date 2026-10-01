import React from "react";
import "./Craft.scss";
import SectionHeading from "../../components/sectionHeading/SectionHeading";
import Reveal from "../../components/reveal/Reveal";
import {craft} from "../../portfolio";

export default function Craft() {
  return (
    <section id="approach" className="section" aria-labelledby="approach-title">
      <div className="container">
        <SectionHeading
          id="approach-title"
          index="03"
          label="Approach"
          title="How I"
          accent="build interfaces."
          description="The practices behind my day-to-day work — each one tied to something I've actually shipped."
          align="split"
        />
        <ol className="craft">
          {craft.map((item, index) => (
            <Reveal
              as="li"
              key={item.title}
              className="craft__item"
              delay={(index % 3) * 90}
            >
              <div className="craft__top">
                <code className="craft__token">{item.token}</code>
                <span className="craft__index mono">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="craft__title">{item.title}</h3>
              <p className="craft__text">{item.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
