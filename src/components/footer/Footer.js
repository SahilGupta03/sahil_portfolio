import React from "react";
import "./Footer.scss";
import SocialMedia from "../socialMedia/SocialMedia";
import {ArrowUpIcon, BranchIcon, ExternalIcon} from "../icons/Icons";
import {useInView} from "../../hooks/useInView";
import {useFitText} from "../../hooks/useFitText";
import {profile} from "../../portfolio";

export default function Footer() {
  const [ref, visible] = useInView({threshold: 0.2});
  const [boxRef, textRef, fontSize] = useFitText({min: 40, max: 300});

  return (
    <footer className="site-footer">
      <div className="status-bar mono">
        <div className="container status-bar__inner">
          <ul className="status-bar__items" aria-label="How this site is built">
            <li>
              <span className="status-bar__branch" aria-hidden="true">
                <BranchIcon size={12} />
              </span>
              main
            </li>
            <li>React 16</li>
            <li>SCSS</li>
            <li className="status-bar__hide-sm">No UI libraries</li>
            <li className="status-bar__hide-sm">GitHub Pages</li>
          </ul>
          <a
            className="status-bar__link"
            href={profile.repo}
            target="_blank"
            rel="noopener noreferrer"
          >
            View source
            <span className="visually-hidden"> (opens in a new tab)</span>
            <ExternalIcon size={12} />
          </a>
        </div>
      </div>

      <div className="container site-footer__body">
        {/* Oversized wordmark, sized to fill the container width exactly */}
        <div
          ref={node => {
            boxRef.current = node;
            ref.current = node;
          }}
          className={`site-footer__mark ${visible ? "is-visible" : ""}`}
          aria-hidden="true"
        >
          <p
            ref={textRef}
            className="site-footer__wordmark"
            style={fontSize ? {fontSize: `${fontSize}px`} : undefined}
          >
            <span>Sahil</span>
            <span className="serif">Gupta</span>
          </p>
        </div>

        <div className="site-footer__row">
          <p className="site-footer__text">
            © {new Date().getFullYear()} {profile.name}.{" "}
            <span className="site-footer__muted">
              Designed and built with React.
            </span>
          </p>
          <SocialMedia showEmail className="site-footer__social" />
          <a href="#top" className="site-footer__top">
            Back to top <ArrowUpIcon size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
