import React from "react";
import "./Services.scss";
import SectionHeading from "../../components/sectionHeading/SectionHeading";
import Reveal from "../../components/reveal/Reveal";
import Button from "../../components/button/Button";
import {ArrowRightIcon, WhatsAppIcon} from "../../components/icons/Icons";
import {profile, services, workflow} from "../../portfolio";
import {whatsappLink} from "../../utils";

export default function Services() {
  const whatsapp = whatsappLink(
    profile.whatsapp,
    "Hi Sahil, I'd like a quote for a project."
  );

  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <div className="container">
        <SectionHeading
          id="services-title"
          index="01"
          label="Services"
          title="What I can"
          accent="build for you."
          description="Websites, booking systems and apps for businesses — built with the same tools I use on production airline software. Every project starts with a free quote."
          align="split"
        />

        <ol className="services">
          {services.map((item, index) => (
            <Reveal
              as="li"
              key={item.title}
              className="services__item"
              delay={(index % 3) * 90}
            >
              <div className="services__top">
                <code className="services__token">{item.token}</code>
                <span className="services__index mono">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="services__title">{item.title}</h3>
              <p className="services__text">{item.text}</p>
              <ul className="services__points mono">
                {item.points.map(point => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>

        <Reveal className="workflow-wrap">
          <p className="workflow__label mono">How it works</p>
          <ol className="workflow">
            {workflow.map(item => (
              <li key={item.step} className="workflow__item">
                <span className="workflow__step mono">{item.step}</span>
                <h3 className="workflow__title">{item.title}</h3>
                <p className="workflow__text">{item.text}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal className="services__cta">
          <p className="services__cta-text">
            Not sure what you need? Describe your idea and I'll suggest the
            simplest way to build it.
          </p>
          <div className="services__cta-actions">
            <Button href="#contact" icon={<ArrowRightIcon size={16} />}>
              Get a free quote
            </Button>
            {whatsapp && (
              <Button
                href={whatsapp}
                external
                variant="secondary"
                icon={<WhatsAppIcon size={16} />}
              >
                Chat on WhatsApp
              </Button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
