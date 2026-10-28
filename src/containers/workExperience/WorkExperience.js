import React, {useState} from "react";
import "./WorkExperience.scss";
import SectionHeading from "../../components/sectionHeading/SectionHeading";
import Reveal from "../../components/reveal/Reveal";
import {PlusIcon} from "../../components/icons/Icons";
import {experience, workProjects} from "../../portfolio";

const systemNames = Object.fromEntries(
  workProjects.items.map(item => [item.code, item.name])
);

function Job({job, index, open, onToggle}) {
  const panelId = `job-panel-${index}`;
  const buttonId = `job-button-${index}`;

  return (
    <Reveal as="li" className={`job ${open ? "is-open" : ""}`}>
      <h3 className="job__heading">
        <button
          id={buttonId}
          type="button"
          className="job__toggle"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className="job__date mono">{job.date}</span>
          <span className="job__title">
            <span className="job__role">{job.role}</span>
            <span className="job__company">
              {job.company}
              {job.companyNote && (
                <span className="job__note"> — {job.companyNote}</span>
              )}
            </span>
          </span>
          <span className="job__icon" aria-hidden="true">
            <PlusIcon size={18} />
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="job__panel"
      >
        <div className="job__panel-inner">
          <div className="job__content">
            <p className="job__summary">{job.summary}</p>
            {job.impact && (
              <dl className="job__impact">
                {job.impact.map(item => (
                  <div key={item.label} className="job__metric">
                    <dt className="job__metric-label">{item.label}</dt>
                    <dd className="job__metric-value">{item.value}</dd>
                  </div>
                ))}
              </dl>
            )}
            {job.bullets && (
              <ul className="list job__bullets">
                {job.bullets.map(bullet => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
            {job.tech && (
              <ul className="tags job__tags" aria-label="Technologies">
                {job.tech.map(tech => (
                  <li key={tech} className="tag">
                    {tech}
                  </li>
                ))}
              </ul>
            )}
            {job.systems && (
              <div className="job__systems">
                <p className="job__systems-label mono">
                  Systems I've worked on
                </p>
                <ul className="job__systems-list">
                  {job.systems.map(code => (
                    <li key={code}>
                      <a
                        className="job__system mono"
                        href={`#system-${code}`}
                        title={systemNames[code]}
                      >
                        <span aria-hidden="true">{code}</span>
                        <span className="visually-hidden">
                          {systemNames[code]}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function WorkExperience() {
  // Current role starts open; the rest expand on demand.
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="experience"
      className="section"
      aria-labelledby="experience-title"
    >
      <div className="container">
        <SectionHeading
          id="experience-title"
          index="04"
          label="Experience"
          title="Where I've"
          accent="done the work."
        />
        <ol className="jobs">
          {experience.map((job, index) => (
            <Job
              key={`${job.company}-${job.role}`}
              job={job}
              index={index}
              open={openIndex === index}
              onToggle={() =>
                setOpenIndex(current => (current === index ? -1 : index))
              }
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
