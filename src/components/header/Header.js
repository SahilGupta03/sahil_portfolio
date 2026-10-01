import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import "./Header.scss";
import ThemeToggle from "../themeToggle/ThemeToggle";
import SocialMedia from "../socialMedia/SocialMedia";
import {CloseIcon, DownloadIcon, MenuIcon} from "../icons/Icons";
import {navLinks, profile} from "../../portfolio";
import {useActiveSection} from "../../hooks/useActiveSection";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [indicator, setIndicator] = useState(null);
  const active = useActiveSection(navLinks.map(link => link.id));

  const headerRef = useRef(null);
  const listRef = useRef(null);
  const menuButtonRef = useRef(null);
  const panelRef = useRef(null);

  // Scroll: progress hairline (CSS var, no re-render), hide on scroll down.
  useEffect(() => {
    let lastY = window.scrollY;
    let frame = null;
    const update = () => {
      frame = null;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (headerRef.current) {
        headerRef.current.style.setProperty(
          "--progress",
          max > 0 ? Math.min(1, y / max) : 0
        );
      }
      setScrolled(y > 12);
      const header = headerRef.current;
      const focusInside = header && header.contains(document.activeElement);
      if (y > lastY + 6 && y > 480 && !focusInside) setHidden(true);
      else if (y < lastY - 6 || y < 480) setHidden(false);
      lastY = y;
    };
    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  // Sliding pill behind the active nav link.
  useLayoutEffect(() => {
    const measure = () => {
      const list = listRef.current;
      const link = list && list.querySelector(`[data-id="${active}"]`);
      if (!link) {
        setIndicator(null);
        return;
      }
      setIndicator({left: link.offsetLeft, width: link.offsetWidth});
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active]);

  // Mobile menu: scroll lock, Esc to close, focus management.
  useEffect(() => {
    if (!open) return undefined;
    document.body.classList.add("menu-open");
    const firstLink = panelRef.current && panelRef.current.querySelector("a");
    if (firstLink) firstLink.focus();

    const onKey = event => {
      if (event.key === "Escape") {
        setOpen(false);
        if (menuButtonRef.current) menuButtonRef.current.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.classList.remove("menu-open");
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  const classes = [
    "site-header",
    scrolled ? "is-scrolled" : "",
    hidden && !open ? "is-hidden" : "",
    open ? "is-open" : ""
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header ref={headerRef} className={classes}>
      <span className="site-header__progress" aria-hidden="true" />
      <div className="container site-header__inner">
        <a href="#top" className="brand" onClick={close}>
          <span className="brand__mark" aria-hidden="true">
            {profile.initials}
          </span>
          <span className="brand__text">
            <span className="brand__name">{profile.name}</span>
            <span className="brand__role mono">{profile.title}</span>
          </span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          <ul className="site-nav__list" ref={listRef}>
            {indicator && (
              <li
                className="site-nav__indicator"
                aria-hidden="true"
                style={{
                  transform: `translateX(${indicator.left}px)`,
                  width: indicator.width
                }}
              />
            )}
            {navLinks.map(link => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  data-id={link.id}
                  className={`site-nav__link ${
                    active === link.id ? "is-active" : ""
                  }`}
                  aria-current={active === link.id ? "location" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <ThemeToggle />
          <a
            href={profile.resumeUrl}
            download={profile.resumeFileName}
            className="header-cta"
          >
            <span>Resume</span>
            <DownloadIcon size={15} />
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            className="menu-button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(value => !value)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={panelRef}
        className="mobile-menu"
        hidden={!open}
      >
        <nav aria-label="Mobile" className="container mobile-menu__inner">
          <ol className="mobile-menu__list">
            {navLinks.map((link, index) => (
              <li key={link.id} style={{"--i": index}}>
                <a href={`#${link.id}`} onClick={close}>
                  <span className="mobile-menu__index mono">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mobile-menu__label">{link.label}</span>
                </a>
              </li>
            ))}
          </ol>
          <div className="mobile-menu__footer">
            <a className="mobile-menu__email" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <div className="mobile-menu__row">
              <SocialMedia />
              <a
                href={profile.resumeUrl}
                download={profile.resumeFileName}
                className="header-cta header-cta--block"
                onClick={close}
              >
                <span>Download resume</span>
                <DownloadIcon size={15} />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
