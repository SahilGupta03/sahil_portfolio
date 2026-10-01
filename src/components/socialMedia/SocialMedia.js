import React from "react";
import "./SocialMedia.scss";
import {profile} from "../../portfolio";
import {GitHubIcon, LinkedInIcon, MailIcon} from "../icons/Icons";

export default function SocialMedia({showEmail = false, className = ""}) {
  const links = [
    {label: "GitHub", href: profile.github, Icon: GitHubIcon, external: true},
    {
      label: "LinkedIn",
      href: profile.linkedin,
      Icon: LinkedInIcon,
      external: true
    },
    ...(showEmail
      ? [{label: "Email", href: `mailto:${profile.email}`, Icon: MailIcon}]
      : [])
  ];

  return (
    <ul className={`social ${className}`.trim()}>
      {links.map(({label, href, Icon, external}) => (
        <li key={label}>
          <a
            href={href}
            className="social__link"
            aria-label={external ? `${label} (opens in a new tab)` : label}
            title={label}
            {...(external
              ? {target: "_blank", rel: "noopener noreferrer"}
              : {})}
          >
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  );
}
