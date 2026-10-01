import React from "react";
import "./Button.scss";

/* Link styled as a button. The label rolls up on hover (the duplicate
   copy is aria-hidden). `external` opens in a new tab. */
export default function Button({
  href,
  children,
  variant = "primary",
  icon,
  external = false,
  download,
  className = "",
  ...props
}) {
  const classes = [
    "btn",
    `btn--${variant}`,
    icon ? "" : "btn--text-only",
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      href={href}
      className={classes}
      download={download}
      {...(external ? {target: "_blank", rel: "noopener noreferrer"} : {})}
      {...props}
    >
      <span className="btn__label">
        <span className="btn__text">{children}</span>
        <span className="btn__text btn__text--clone" aria-hidden="true">
          {children}
        </span>
      </span>
      {icon && <span className="btn__icon">{icon}</span>}
    </a>
  );
}
