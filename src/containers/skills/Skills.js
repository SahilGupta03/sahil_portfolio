import React from "react";
import "./Skills.scss";
import SectionHeading from "../../components/sectionHeading/SectionHeading";
import Reveal from "../../components/reveal/Reveal";
import TechLogo from "../../components/techLogo/TechLogo";
import {skills} from "../../portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          id="skills-title"
          index="02"
          label="Skills"
          title="The toolkit,"
          accent="in practice."
          description="Grouped by where they fit in a frontend stack — what I use day to day at SpiceJet and on Ziclo and freelance work. No self-rated percentages."
          align="split"
        />

        <div className="skills__legend mono" aria-hidden="true">
          <span className="skill skill--core skill--legend">Core stack</span>
        </div>

        <div className="skills">
          {skills.map((group, index) => (
            <Reveal key={group.category} className="skills__row">
              <span className="skills__index mono">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="skills__category serif">{group.category}</h3>
              <ul className="skills__items">
                {group.items.map(item => (
                  <li
                    key={item.name}
                    className={`skill ${item.core ? "skill--core" : ""}`}
                  >
                    {item.logo && (
                      <TechLogo
                        name={item.logo}
                        size={18}
                        className="skill__logo"
                      />
                    )}
                    {item.name}
                    {item.core && (
                      <span className="visually-hidden"> (core stack)</span>
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
