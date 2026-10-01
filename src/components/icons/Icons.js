import React from "react";

/* Small inline SVG icon set — replaces the Font Awesome CDN stylesheet. */

function Stroke({children, size = 18, ...props}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

function Filled({d, size = 18, ...props}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d={d} />
    </svg>
  );
}

export const GitHubIcon = props => (
  <Filled
    {...props}
    d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3"
  />
);

export const LinkedInIcon = props => (
  <Filled
    {...props}
    d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"
  />
);

export const MailIcon = props => (
  <Stroke {...props}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </Stroke>
);

export const DownloadIcon = props => (
  <Stroke {...props}>
    <path d="M12 3v12" />
    <path d="m7 10 5 5 5-5" />
    <path d="M5 21h14" />
  </Stroke>
);

export const ArrowRightIcon = props => (
  <Stroke {...props}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </Stroke>
);

export const ExternalIcon = props => (
  <Stroke {...props}>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </Stroke>
);

export const SunIcon = props => (
  <Stroke {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </Stroke>
);

export const MoonIcon = props => (
  <Stroke {...props}>
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </Stroke>
);

export const MenuIcon = props => (
  <Stroke {...props}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </Stroke>
);

export const CloseIcon = props => (
  <Stroke {...props}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Stroke>
);

export const CopyIcon = props => (
  <Stroke {...props}>
    <rect x="9" y="9" width="12" height="12" rx="2" />
    <path d="M5 15V5a2 2 0 0 1 2-2h10" />
  </Stroke>
);

export const CheckIcon = props => (
  <Stroke {...props}>
    <path d="m5 12 5 5 9-10" />
  </Stroke>
);

export const AwardIcon = props => (
  <Stroke {...props}>
    <circle cx="12" cy="9" r="6" />
    <path d="m8.5 14.2-1.5 7.8 5-3 5 3-1.5-7.8" />
  </Stroke>
);

export const MapPinIcon = props => (
  <Stroke {...props}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </Stroke>
);

export const PlusIcon = props => (
  <Stroke {...props}>
    <path d="M12 5v14M5 12h14" />
  </Stroke>
);

export const ArrowUpIcon = props => (
  <Stroke {...props}>
    <path d="M12 19V5" />
    <path d="m6 11 6-6 6 6" />
  </Stroke>
);

export const ArrowDownIcon = props => (
  <Stroke {...props}>
    <path d="M12 5v14" />
    <path d="m6 13 6 6 6-6" />
  </Stroke>
);

export const BranchIcon = props => (
  <Stroke {...props}>
    <circle cx="6" cy="5" r="2" />
    <circle cx="6" cy="19" r="2" />
    <circle cx="18" cy="7" r="2" />
    <path d="M6 7v10" />
    <path d="M18 9c0 5-6 4-11.2 8.5" />
  </Stroke>
);
