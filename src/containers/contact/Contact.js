import React, {useEffect, useRef, useState} from "react";
import "./Contact.scss";
import SectionHeading from "../../components/sectionHeading/SectionHeading";
import Reveal from "../../components/reveal/Reveal";
import Clock from "../../components/clock/Clock";
import {
  ArrowRightIcon,
  CheckIcon,
  CopyIcon,
  DownloadIcon,
  GitHubIcon,
  LinkedInIcon
} from "../../components/icons/Icons";
import {contact, profile} from "../../portfolio";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2200);
    } catch (error) {
      // Clipboard unavailable (e.g. insecure context) — the mailto link still works.
    }
  };

  const channels = [
    {
      label: "LinkedIn",
      detail: "in/sahil-gupta-169759190",
      href: profile.linkedin,
      Icon: LinkedInIcon,
      external: true
    },
    {
      label: "GitHub",
      detail: "SahilGupta03",
      href: profile.github,
      Icon: GitHubIcon,
      external: true
    },
    {
      label: "Resume",
      detail: "PDF download",
      href: profile.resumeUrl,
      Icon: DownloadIcon,
      download: profile.resumeFileName
    }
  ];

  return (
    <section
      id="contact"
      className="section contact"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <SectionHeading
          id="contact-title"
          index="07"
          label="Contact"
          title="Let's"
          accent="talk."
          description={contact.text}
          align="split"
        />

        <Reveal className="contact__email-row">
          <a className="contact__email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <button
            type="button"
            className={`contact__copy ${copied ? "is-copied" : ""}`}
            onClick={copyEmail}
          >
            {copied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
            <span>{copied ? "Copied" : "Copy email"}</span>
          </button>
          <span className="visually-hidden" role="status" aria-live="polite">
            {copied ? "Email address copied to clipboard" : ""}
          </span>
        </Reveal>

        <ul className="channels">
          {channels.map(
            ({label, detail, href, Icon, external, download}, index) => (
              <Reveal as="li" key={label} delay={index * 90}>
                <a
                  className="channel"
                  href={href}
                  download={download}
                  {...(external
                    ? {target: "_blank", rel: "noopener noreferrer"}
                    : {})}
                >
                  <span className="channel__icon" aria-hidden="true">
                    <Icon size={18} />
                  </span>
                  <span className="channel__label">{label}</span>
                  <span className="channel__detail mono">{detail}</span>
                  <span className="channel__arrow" aria-hidden="true">
                    <ArrowRightIcon size={20} />
                  </span>
                  {external && (
                    <span className="visually-hidden">
                      {" "}
                      (opens in a new tab)
                    </span>
                  )}
                </a>
              </Reveal>
            )
          )}
        </ul>

        <p className="contact__local mono">
          {profile.location} — <Clock />
        </p>
      </div>
    </section>
  );
}
