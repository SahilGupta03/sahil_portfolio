import React from "react";
import "./Education.scss";
import SectionHeading from "../../components/sectionHeading/SectionHeading";
import Reveal from "../../components/reveal/Reveal";
import {AwardIcon} from "../../components/icons/Icons";
import {achievements, education} from "../../portfolio";

export default function Education() {
  return (
    <section
      id="education"
      className="section"
      aria-labelledby="education-title"
    >
      <div className="container">
        <SectionHeading
          id="education-title"
          index="06"
          label="Education"
          title="Education &"
          accent="recognition."
        />

        <div className="education">
          <ol className="ledger">
            {education.map((item, index) => (
              <Reveal
                as="li"
                key={`${item.degree}-${item.date}`}
                className="ledger__row"
                delay={index * 80}
              >
                <span className="ledger__date mono">{item.date}</span>
                <div className="ledger__main">
                  <h3 className="ledger__degree">{item.degree}</h3>
                  <p className="ledger__school serif">{item.school}</p>
                  {item.notes && (
                    <ul className="list ledger__notes">
                      {item.notes.map(note => (
                        <li key={note}>{note}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <span className="ledger__place">{item.place}</span>
              </Reveal>
            ))}
          </ol>

          <div className="education__aside">
            {achievements.map(item => (
              <Reveal
                as="article"
                key={item.title}
                className="award"
                delay={150}
              >
                <div className="award__top">
                  <span className="award__icon" aria-hidden="true">
                    <AwardIcon size={22} />
                  </span>
                  <span className="mono award__org">{item.org}</span>
                </div>
                <h3 className="award__title">{item.title}</h3>
                <p className="award__text">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
