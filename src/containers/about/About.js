import React from "react";
import "./About.scss";
import SectionHeading from "../../components/sectionHeading/SectionHeading";
import SplitText from "../../components/splitText/SplitText";
import Reveal from "../../components/reveal/Reveal";
import CountUp from "../../components/countUp/CountUp";
import TechLogo, {techNames} from "../../components/techLogo/TechLogo";
import {about, stats} from "../../portfolio";

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading
          id="about-title"
          index="01"
          label="About"
          title="Frontend engineer,"
          accent="production-minded."
        />

        <div className="about">
          <div className="about__lead">
            <SplitText
              as="p"
              className="about__statement"
              text={about.statement}
            />
            <Reveal className="about__stack" delay={200}>
              <p className="about__label mono">Stack I reach for</p>
              <ul className="about__stack-list">
                {about.stack.map(name => (
                  <li key={name} className="about__stack-item">
                    <TechLogo name={name} size={22} />
                    <span>{techNames[name]}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="about__detail">
            <Reveal className="about__text">
              {about.paragraphs.map(text => (
                <p key={text.slice(0, 24)}>{text}</p>
              ))}
            </Reveal>

            <Reveal className="about__current" delay={120}>
              <p className="about__label mono">
                <span className="live-dot" aria-hidden="true" /> Currently
              </p>
              <dl className="about__current-list">
                {about.current.map(item => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>

        <dl className="stats">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} className="stats__item" delay={index * 90}>
              <dt className="stats__label">{stat.label}</dt>
              <dd className="stats__value">
                <CountUp
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
