import React from "react";
import "./Hero.scss";
import Button from "../../components/button/Button";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Clock from "../../components/clock/Clock";
import Playground from "../../components/playground/Playground";
import TechLogo from "../../components/techLogo/TechLogo";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  DownloadIcon
} from "../../components/icons/Icons";
import {useInView} from "../../hooks/useInView";
import {about, hero, profile} from "../../portfolio";

export default function Hero() {
  const [ref, visible] = useInView({threshold: 0});

  return (
    <section
      ref={ref}
      id="top"
      className={`hero ${visible ? "is-visible" : ""}`}
      aria-labelledby="hero-title"
    >
      <div className="hero__grid-lines" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="container">
        <div className="hero__meta mono">
          <span className="hero__meta-item">
            <span className="live-dot" aria-hidden="true" />
            {hero.eyebrow}
          </span>
          <span className="hero__meta-item hero__meta-item--hide-sm">
            {profile.location} — <Clock />
          </span>
          <a className="hero__meta-item hero__scroll" href="#about">
            Scroll <ArrowDownIcon size={13} />
          </a>
        </div>

        <div className="hero__masthead">
          <h1 id="hero-title" className="hero__title">
            <span className="visually-hidden">
              {profile.name}, {profile.role}
            </span>
            <span className="hero__line hero__line--1" aria-hidden="true">
              <span>Sahil</span>
            </span>{" "}
            <span className="hero__line hero__line--2" aria-hidden="true">
              <span>Gupta</span>
            </span>
          </h1>
          <p className="hero__role">
            <span className="serif">{profile.role}</span>
            <span className="hero__role-sub mono">
              <span className="hero__role-tag">{profile.title}</span>
              <span className="hero__stack" aria-hidden="true">
                {about.stack.slice(0, 4).map(name => (
                  <TechLogo key={name} name={name} size={18} />
                ))}
              </span>
              React · Next.js · TypeScript
            </span>
          </p>
          <p className="hero__lead">
            {hero.headline}{" "}
            <span className="serif hero__lead-accent">
              {hero.headlineAccent}
            </span>
          </p>
        </div>

        <div className="hero__body">
          <div className="hero__intro">
            <p className="hero__text">{hero.intro}</p>
            <div className="hero__actions">
              <Button href="#projects" icon={<ArrowRightIcon size={16} />}>
                View projects
              </Button>
              <Button
                href={profile.resumeUrl}
                download={profile.resumeFileName}
                variant="secondary"
                icon={<DownloadIcon size={16} />}
              >
                Download resume
              </Button>
            </div>
            <SocialMedia className="hero__social" />
          </div>
          <Playground />
        </div>
      </div>
    </section>
  );
}
