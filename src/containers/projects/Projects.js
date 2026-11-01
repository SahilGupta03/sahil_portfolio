import React, {useCallback, useEffect, useState} from "react";
import "./Projects.scss";
import SectionHeading from "../../components/sectionHeading/SectionHeading";
import Reveal from "../../components/reveal/Reveal";
import Button from "../../components/button/Button";
import {ExternalIcon, GitHubIcon, PlusIcon} from "../../components/icons/Icons";
import {
  freelanceProjects,
  siteProject,
  workProjects
} from "../../portfolio";

function TagList({items, className = ""}) {
  return (
    <ul className={`tags ${className}`.trim()} aria-label="Technologies">
      {items.map(item => (
        <li key={item} className="tag">
          {item}
        </li>
      ))}
    </ul>
  );
}

/* ---------- SpiceJet systems: interactive index ---------- */
function SystemRow({system, index, open, onToggle}) {
  const panelId = `system-panel-${system.code}`;
  const buttonId = `system-button-${system.code}`;

  return (
    <li
      id={`system-${system.code}`}
      className={`system ${open ? "is-open" : ""}`}
    >
      <h4 className="system__heading">
        <button
          id={buttonId}
          type="button"
          className="system__toggle"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className="system__index mono">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="system__code mono">{system.code}</span>
          <span className="system__name">{system.name}</span>
          <span className="system__stack mono">
            {system.tech.slice(0, 2).join(" · ")}
          </span>
          <span className="system__status mono">
            {system.live ? (
              <>
                <span className="live-dot" aria-hidden="true" /> Live
              </>
            ) : (
              "Internal"
            )}
          </span>
          <span className="system__icon" aria-hidden="true">
            <PlusIcon size={16} />
          </span>
        </button>
      </h4>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="system__panel"
      >
        <div className="system__panel-inner">
          <div className="system__content">
            <p className="system__description">{system.description}</p>
            <ul className="list system__highlights">
              {system.highlights.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <TagList items={system.tech} />
          </div>
        </div>
      </div>
    </li>
  );
}

function SystemsIndex() {
  const [openCodes, setOpenCodes] = useState(() => new Set());

  const toggle = code =>
    setOpenCodes(current => {
      const next = new Set(current);
      if (next.has(code)) next.delete(code);
      else next.add(code);
      return next;
    });

  // Links from the hero's departure board (#system-XXX) open that row.
  const openFromHash = useCallback(() => {
    const match = window.location.hash.match(/^#system-([A-Z]+)$/);
    if (!match) return;
    const code = match[1];
    setOpenCodes(current => new Set(current).add(code));
  }, []);

  useEffect(() => {
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, [openFromHash]);

  return (
    <div className="systems">
      <Reveal className="systems__head">
        <p className="systems__label mono">
          <span className="showcase__num">A</span>
          Production work at SpiceJet
        </p>
        <p className="systems__note">{workProjects.note}</p>
      </Reveal>
      <ol className="systems__list">
        {workProjects.items.map((system, index) => (
          <SystemRow
            key={system.code}
            system={system}
            index={index}
            open={openCodes.has(system.code)}
            onToggle={() => toggle(system.code)}
          />
        ))}
      </ol>
    </div>
  );
}

/* ---------- Freelance: asymmetric browser-framed screenshots ---------- */
function FreelanceProject({project, index}) {
  const link = project.links[0];
  const host = link.url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <Reveal
      as="article"
      id={`client-${project.code}`}
      className={`client client--${index + 1}`}
      aria-labelledby={`client-${index}`}
    >
      <a
        href={link.url}
        className="client__frame"
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-hidden="true"
      >
        <span className="client__chrome">
          <span className="client__dots">
            <i />
            <i />
            <i />
          </span>
          <span className="client__url mono">{host}</span>
        </span>
        <span className="client__shot">
          <img
            src={project.image}
            alt=""
            width="960"
            height="440"
            loading="lazy"
            decoding="async"
          />
          <span className="client__badge">
            Visit <ExternalIcon size={16} />
          </span>
        </span>
      </a>
      <div className="client__body">
        <span className="client__index mono">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div>
          <h4 id={`client-${index}`} className="client__name">
            {project.name}
          </h4>
          <p className="client__description">{project.description}</p>
          <div className="client__footer">
            <TagList items={project.tech} />
            <a
              href={link.url}
              className="text-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {host}
              <span className="visually-hidden"> (opens in a new tab)</span>
              <ExternalIcon size={15} />
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* ---------- D. This site ---------- */
function SiteProject({project}) {
  const [live, source] = project.links;
  return (
    <Reveal
      as="article"
      className="site-project"
      aria-labelledby="site-project-title"
    >
      <a
        href={live.url}
        className="client__frame site-project__frame"
        tabIndex={-1}
        aria-hidden="true"
      >
        <span className="client__chrome">
          <span className="client__dots">
            <i />
            <i />
            <i />
          </span>
          <span className="client__url mono">
            sahilgupta03.github.io/sahil_portfolio
          </span>
        </span>
        <span className="client__shot">
          <img
            src={project.image}
            alt=""
            width="960"
            height="600"
            loading="lazy"
            decoding="async"
          />
        </span>
      </a>
      <div className="site-project__body">
        <h4 id="site-project-title" className="client__name">
          {project.name}
        </h4>
        <p className="client__description">{project.description}</p>
        <ul className="site-project__facts">
          {project.facts.map(fact => (
            <li key={fact}>
              <span className="site-project__check mono" aria-hidden="true">
                ✓
              </span>
              {fact}
            </li>
          ))}
        </ul>
        <TagList items={project.tech} />
        <div className="site-project__links">
          <Button href={source.url} external icon={<GitHubIcon size={16} />}>
            {`View ${source.label.toLowerCase()}`}
          </Button>
          <a href="#top" className="text-link">
            You're looking at the live site
          </a>
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading
          id="projects-title"
          index="05"
          label="Selected work"
          title="Things I've"
          accent="built & shipped."
          description="Production applications I work on at SpiceJet and websites delivered to freelance clients."
          align="split"
        />

        <SystemsIndex />

        <div className="clients">
          <Reveal className="systems__head">
            <p className="systems__label mono">
              <span className="showcase__num">B</span>
              Freelance client work
            </p>
            <p className="systems__note">
              Delivered end to end, from requirements to deployment.
            </p>
          </Reveal>
          <div className="clients__grid">
            {freelanceProjects.map((project, index) => (
              <FreelanceProject
                key={project.name}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>

        <div className="clients">
          <Reveal className="systems__head">
            <p className="systems__label mono">
              <span className="showcase__num">C</span>
              This site
            </p>
            <p className="systems__note">
              Open source — the code behind everything on this page.
            </p>
          </Reveal>
          <SiteProject project={siteProject} />
        </div>
      </div>
    </section>
  );
}
