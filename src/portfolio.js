/* Single source of truth for all portfolio content.
   Keep this file in sync with the resume in public/Sahil_Gupta_Resume.pdf. */

const resumeUrl = `${process.env.PUBLIC_URL}/Sahil_Gupta_Resume.pdf`;

const profile = {
  name: "Sahil Gupta",
  initials: "SG",
  title: "Software Engineer",
  role: "Frontend Developer",
  focus: "Frontend",
  location: "Gurgaon, India",
  email: "sahil84330@gmail.com",
  github: "https://github.com/SahilGupta03",
  repo: "https://github.com/SahilGupta03/sahil_portfolio",
  linkedin: "https://www.linkedin.com/in/sahil-gupta-169759190",
  resumeUrl,
  resumeFileName: "Sahil_Gupta_Resume.pdf"
};

const hero = {
  eyebrow: "Software Engineer at SpiceJet",
  // `headlineAccent` is set in italic serif at the end of the headline.
  headline: "Building digital experiences that feel",
  headlineAccent: "effortless.",
  intro:
    "I'm a frontend developer focused on building responsive, intuitive and high-performance web applications with React, Next.js and TypeScript — currently a Software Engineer at SpiceJet, with 3+ years of production experience."
};

const about = {
  statement:
    "I turn requirements into fast, responsive interfaces — built from reusable components, wired to real APIs and shipped to production.",
  paragraphs: [
    "I'm a software engineer with 3+ years of experience building and maintaining production web applications. My focus is the frontend: React.js and Next.js with JavaScript and TypeScript, styled with Tailwind CSS, Bootstrap or Material UI, and connected to REST APIs.",
    "At SpiceJet (including SpiceTech, its technology subsidiary) I build full-stack applications with React.js frontends and .NET / ASP.NET Core Web API backends, covering booking management, passenger handling, baggage tracking and notifications. I usually own a feature end to end — requirements, implementation, testing, deployment and production debugging with Chrome DevTools and Postman.",
    "I care about responsive, cross-browser layouts, component-based architecture and performance. Outside SpiceJet, I've delivered client websites as a freelancer and built Ziclo, a React Native service-booking app, in TypeScript with Expo."
  ],
  current: [
    {label: "Role", value: "Software Engineer"},
    {label: "Company", value: "SpiceJet (incl. SpiceTech)"},
    {label: "Since", value: "March 2023"},
    {label: "Based in", value: "Gurgaon, India"}
  ],
  // Rendered with logos in the About section.
  stack: ["react", "next", "ts", "js", "html", "css"]
};

// How I build — practices, each tied to real work.
const craft = [
  {
    token: "<Button />",
    title: "Reusable components",
    text: "Component-based architecture with small, composable pieces and clear props — like the Button in the playground above, reused across this site."
  },
  {
    token: "@media",
    title: "Responsive UI",
    text: "Layouts designed for every breakpoint and checked across browsers, from wide internal dashboards to phones."
  },
  {
    token: "store",
    title: "State management",
    text: "Redux and Redux Toolkit on React apps at SpiceJet; Zustand with typed forms (React Hook Form + Zod) in Ziclo."
  },
  {
    token: "fetch()",
    title: "API integration",
    text: "Frontends wired to REST and ASP.NET Core Web APIs, with validation workflows that cut manual booking errors by ~30%."
  },
  {
    token: "aria-*",
    title: "Accessibility",
    text: "Semantic HTML, keyboard-operable controls and visible focus states — every interactive element on this site works without a mouse."
  },
  {
    token: "perf",
    title: "Performance",
    text: "API and UI-level optimization — around 25% faster load times on SpiceJet applications."
  }
];

// Figures taken directly from the resume.
const stats = [
  {
    value: 3,
    prefix: "",
    suffix: "+",
    label: "Years building production software"
  },
  {
    value: 5,
    prefix: "",
    suffix: "",
    label: "Live production systems shipped at SpiceJet"
  },
  {
    value: 30,
    prefix: "~",
    suffix: "%",
    label: "Fewer manual booking errors after validation workflows"
  },
  {
    value: 25,
    prefix: "~",
    suffix: "%",
    label: "Faster load times from API and UI optimization"
  }
];

// `core` marks the day-to-day stack; `logo` renders a technology mark.
const skills = [
  {
    category: "Frontend",
    items: [
      {name: "React.js", logo: "react", core: true},
      {name: "Next.js", logo: "next", core: true},
      {name: "TypeScript", logo: "ts", core: true},
      {name: "JavaScript (ES6+)", logo: "js", core: true},
      {name: "HTML5", logo: "html", core: true},
      {name: "CSS3", logo: "css", core: true},
      {name: "Tailwind CSS"},
      {name: "Material UI"},
      {name: "Bootstrap"},
      {name: "Leaflet.js"}
    ]
  },
  {
    category: "Mobile",
    items: [
      {name: "React Native", logo: "react", core: true},
      {name: "Expo"},
      {name: "Expo Router"},
      {name: "Android (Java, XML)"}
    ]
  },
  {
    category: "State & forms",
    items: [
      {name: "Redux", core: true},
      {name: "Redux Toolkit"},
      {name: "Zustand"},
      {name: "React Hook Form"},
      {name: "Zod"}
    ]
  },
  {
    category: "API integration",
    items: [{name: "REST APIs", core: true}, {name: "Axios"}, {name: "JSON"}]
  },
  {
    category: "Backend",
    items: [
      {name: ".NET"},
      {name: "ASP.NET Core Web API"},
      {name: "Node.js"},
      {name: "SQL"}
    ]
  },
  {
    category: "Tools",
    items: [
      {name: "Git"},
      {name: "GitHub"},
      {name: "VS Code"},
      {name: "Chrome DevTools"},
      {name: "Postman"},
      {name: "Visual Studio"},
      {name: "Android Studio"},
      {name: "Figma"}
    ]
  }
];

const experience = [
  {
    role: "Software Engineer",
    company: "SpiceJet",
    companyNote: "including SpiceTech, subsidiary",
    date: "Mar 2023 – Present",
    location: "Gurgaon",
    impact: [
      {value: "~30%", label: "fewer manual booking errors"},
      {value: "~25%", label: "faster load times"}
    ],
    systems: ["GRS", "DCS", "PNR", "EPM", "FRV", "CFI", "BAG"],
    summary:
      "Build and maintain full-stack web applications with React.js frontends and .NET / ASP.NET Core Web API backends, covering booking management, passenger handling, baggage tracking and notifications in the airline domain.",
    bullets: [
      "Reduced manual booking errors by approx. 30% by building validation workflows and automating manual steps in the booking process.",
      "Improved application performance and load time by ~25% through API and UI-level optimization.",
      "Designed and implemented EDIFACT file-generation workflows for PNRGOV — file structure, data mapping, validation and automated export.",
      "Developed the WebDCS (Web Departure Control System) frontend, including boarding pass and bag tag interfaces for thermal and industry-standard printers.",
      "Handle features end to end, from requirements to implementation, testing and deployment; debug production issues with Chrome DevTools and Postman."
    ],
    tech: [
      "React.js",
      "Redux",
      "TypeScript",
      ".NET",
      "ASP.NET Core Web API",
      "Material UI",
      "Bootstrap",
      "Leaflet.js",
      "ZPL"
    ]
  },
  {
    role: "Software Developer Intern",
    company: "SpiceJet",
    date: "Aug 2022 – Feb 2023",
    summary:
      "Worked on web and mobile application development using React.js and React Native, alongside quality testing and bug fixing.",
    bullets: [
      "Assisted in developing React Native mobile apps and internal web tools using React.js.",
      "Tested and resolved UI/UX bugs across SpiceJet's website and admin panels.",
      "Worked with component-based architecture and Git-based team collaboration."
    ],
    tech: ["React.js", "React Native", "Git"]
  },
  {
    role: "Android Developer – Associate Intern",
    company: "The Entrepreneurship Network",
    date: "Oct 2021 – Jan 2022",
    summary: "Learned core Android development through mentor-guided tasks.",
    bullets: [
      "Built small modules and features in Java with XML layouts as part of weekly tasks.",
      "Worked through development assignments and problems set by mentors."
    ],
    tech: ["Android", "Java", "XML"]
  },
  {
    role: "Web Development Intern",
    company: "Internshala",
    date: "Sep 2021 – Oct 2021",
    summary:
      "Online internship covering frontend and backend fundamentals, ending in a complete web application.",
    bullets: [
      "Built a web application with user login, form validation and dynamic content.",
      "Hosted the project and presented it for final evaluation."
    ],
    tech: ["HTML", "CSS", "JavaScript", "React.js", "Node.js"]
  }
];

const featuredProject = {
  name: "Ziclo",
  kind: "Personal project · Mobile app",
  tagline: "Service-booking app for solar and AC services",
  description:
    "A cross-platform service-booking app with separate experiences for customers, field workers, managers and admins. I built the app's frontend in TypeScript with Expo and integrated it with a NestJS + Prisma REST backend.",
  role: "Frontend developer — architecture, screens, state and API integration",
  // Grouped by frontend area; every item is implemented in the repo.
  highlights: [
    {
      title: "Role-based interfaces",
      text: "Separate navigation and screens for users, workers, managers and admins, using Expo Router route groups."
    },
    {
      title: "Service-booking flow",
      text: "Multi-step booking — service type, package, date and time, location, details and payment — plus tracking and rescheduling."
    },
    {
      title: "State & forms",
      text: "Global state with Zustand; typed forms and validation with React Hook Form and Zod."
    },
    {
      title: "API integration",
      text: "Axios API layer integrated with a NestJS + Prisma REST backend."
    },
    {
      title: "Payment UI",
      text: "Razorpay checkout inside the booking flow."
    },
    {
      title: "Operations screens",
      text: "Worker check-in and attendance, manager tools for assignment, leave and pricing, a live worker map, push notifications and OTP login."
    }
  ],
  // Actual route structure from the Ziclo repository (app/ directory).
  routes: [
    {name: "app/", depth: 0},
    {name: "(public)/", depth: 1, note: "auth & onboarding"},
    {name: "(user)/", depth: 1, note: "customer"},
    {name: "(worker)/", depth: 1, note: "field staff"},
    {name: "(manager)/", depth: 1, note: "operations"},
    {name: "(admin)/", depth: 1, note: "back office"},
    {name: "booking/", depth: 1, note: "multi-step flow"},
    {name: "service-type.tsx", depth: 2},
    {name: "package-selection.tsx", depth: 2},
    {name: "date-time.tsx", depth: 2},
    {name: "location-picker.tsx", depth: 2},
    {name: "user-details.tsx", depth: 2},
    {name: "payment.tsx", depth: 2, last: true}
  ],

  tech: [
    "React Native",
    "Expo",
    "TypeScript",
    "Expo Router",
    "Zustand",
    "Axios",
    "React Hook Form",
    "Zod",
    "Razorpay",
    "NestJS API",
    "Prisma"
  ],
  links: [
    {
      label: "View source",
      url: "https://github.com/sahil03122000/Ziclo_Frontend"
    }
  ],
  screenshots: [
    {
      src: require("./assets/images/projects/ziclo-1.png"),
      alt: "Ziclo splash screen showing the Ziclo logo with solar and AC services"
    },
    {
      src: require("./assets/images/projects/ziclo-2.png"),
      alt: "Ziclo login screen with email, password and OTP login options"
    },
    {
      src: require("./assets/images/projects/ziclo-3.png"),
      alt: "Ziclo create-account screen with name, phone, email and password fields"
    }
  ]
};

const workProjects = {
  note: "Internal enterprise applications built at SpiceJet. Source code and demos aren't public.",
  items: [
    {
      name: "Group Reservation System",
      code: "GRS",
      live: true,
      description:
        "Agents create group booking requests; airline staff review and approve them. Built the React.js frontend and integrated .NET Web APIs.",
      highlights: [
        "Fare management, policy application and cancellation workflows",
        "Validation, pricing and approval logic"
      ],
      tech: ["React.js", "Redux", ".NET Web API", "Material UI"]
    },
    {
      name: "WebDCS",
      code: "DCS",
      live: true,
      description:
        "Web Departure Control System frontend for check-in and departure management.",
      highlights: [
        "Boarding pass and bag tag interfaces for thermal printers",
        "Android-based printing workflows for airport devices"
      ],
      tech: ["React.js", "REST APIs", "ZPL"]
    },
    {
      name: "PNRGOV",
      code: "PNR",
      description:
        "Full-stack airline operations application for government passenger-data reporting.",
      highlights: [
        "EDIFACT file generation, data mapping and validation",
        "Automated export workflows"
      ],
      tech: ["React.js", ".NET", "EDIFACT"]
    },
    {
      name: "Elite Passenger Management",
      code: "EPM",
      live: true,
      description:
        "Manage elite and VVIP passengers and automate SSR tagging during booking.",
      highlights: [
        "Auto-assignment of VVIP SSR codes",
        "Responsive UI on real-time APIs"
      ],
      tech: ["React.js", "REST APIs"]
    },
    {
      name: "Flight Routes Visualization",
      code: "FRV",
      live: true,
      description: "Interactive route map with dynamic airport and route data.",
      highlights: [
        "Route animations based on selected airports",
        "Optimized map rendering"
      ],
      tech: ["React.js", "Leaflet.js", "Material UI"]
    },
    {
      name: "Cancelled Flight Info",
      code: "CFI",
      live: true,
      description:
        "Processes cancelled-flight data from Excel uploads and reflects it on the website.",
      highlights: [
        "Automated website updates",
        "Email and SMS notifications to affected passengers"
      ],
      tech: ["React.js", "REST APIs"]
    },
    {
      name: "Airline Baggage Tracker",
      code: "BAG",
      description:
        "End-to-end tracking of baggage complaints — missing, excess, damaged and pilferage.",
      highlights: [
        "Complaint logging, status updates and resolution",
        ".NET services for workflow handling"
      ],
      tech: ["React.js", ".NET"]
    },
    {
      name: "GST Dashboard",
      code: "GST",
      description:
        "Full-stack dashboard for tracking GST invoice data for internal finance teams.",
      highlights: [
        "Role-based access control",
        "Aggregated invoice counts and summaries"
      ],
      tech: ["React.js", "Node.js", "Material UI"]
    },
    {
      name: "Messaging Dashboard",
      code: "MSG",
      description:
        "Full-stack dashboard for managing SMS and notification templates.",
      highlights: ["Template whitelisting and approval", "Role-based access"],
      tech: ["React.js", "Node.js", "Bootstrap"]
    }
  ]
};

const freelanceProjects = [
  {
    name: "HMR & Associates",
    code: "HMR",
    description:
      "Responsive website for an advisory and compliance firm, delivered end to end from requirement gathering through deployment.",
    image: require("./assets/images/projects/hmra.jpg"),
    imageAlt: "Homepage of the HMR & Associates website",
    tech: ["React.js", "Responsive design"],
    links: [{label: "Visit site", url: "https://hmraca.in/"}]
  },
  {
    name: "Mahawar Samaj, Ateli",
    code: "MSA",
    description:
      "Community information website with events and updates, built with a focus on clean UI and performance.",
    image: require("./assets/images/projects/mahavar-samaj.jpg"),
    imageAlt: "Homepage of the Mahawar Samaj Ateli website",
    tech: ["React.js", "Responsive design"],
    links: [{label: "Visit site", url: "https://mahavarsamajateli.in/"}]
  }
];

const siteProject = {
  name: "This portfolio",
  description:
    "Custom-designed and built on Create React App — no template, UI kit or animation library. The source is public.",
  image: require("./assets/images/projects/portfolio.jpg"),
  facts: [
    "React 16 + SCSS — no UI kit or animation library",
    "Scroll reveals via IntersectionObserver; honours reduced-motion",
    "Keyboard-operable menu, tabs and accordions with visible focus",
    "Under 60 KB of gzipped JavaScript",
    "Deployed to GitHub Pages under /sahil_portfolio/"
  ],
  tech: ["React", "SCSS", "Accessibility", "GitHub Pages"],
  links: [
    {
      label: "Live site",
      url: "https://sahilgupta03.github.io/sahil_portfolio/"
    },
    {label: "Source", url: "https://github.com/SahilGupta03/sahil_portfolio"}
  ]
};

const education = [
  {
    degree: "B.Tech, Computer Science & Engineering",
    school: "RPS Group of Institutions",
    place: "Mahendergarh, Haryana",
    date: "Aug 2018 – Jun 2022",
    notes: [
      "Built a NEET preparation app as 6th-semester coursework.",
      "Built an online payment application as the final-year capstone project."
    ]
  },
  {
    degree: "Senior Secondary (12th), CBSE",
    school: "Aishly Public School",
    place: "Ateli Mandi, Haryana",
    date: "2018"
  },
  {
    degree: "Secondary (10th), CBSE",
    school: "Aishly Public School",
    place: "Ateli Mandi, Haryana",
    date: "2016"
  }
];

const achievements = [
  {
    title: "SpiceStar Rewards & Recognition",
    org: "SpiceJet",
    text: "Recognized for contributions to the SpiceStar internal portal."
  }
];

const contact = {
  heading: "Let's talk",
  text: "Whether it's a role, a project or a question about my work, email is the quickest way to reach me. I'm also on LinkedIn."
};

const navLinks = [
  {id: "about", label: "About"},
  {id: "skills", label: "Skills"},
  {id: "experience", label: "Experience"},
  {id: "projects", label: "Projects"},
  {id: "education", label: "Education"},
  {id: "contact", label: "Contact"}
];

export {
  profile,
  hero,
  about,
  craft,
  stats,
  skills,
  experience,
  featuredProject,
  workProjects,
  freelanceProjects,
  siteProject,
  education,
  achievements,
  contact,
  navLinks
};
