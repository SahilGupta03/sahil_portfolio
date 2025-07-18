/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sahil Gupta",
  title: "Hi all, I'm Sahil Gupta",
  subTitle: emoji(
    "Passionate Full Stack Developer with experience in building responsive web apps using React, Node.js, and SQL Server. I love solving real-world problems through code and constantly learning new technologies. And Also Work on Android App Development using Java.",
  ),
  resumeLink:
    "https://drive.google.com/file/d/1D_2Lrb8a37ekQ1gLUGcozza_wr3_BoJw/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/SahilGupta03",
  linkedin: "https://www.linkedin.com/in/sahil-gupta-169759190",
  gmail: "sahil84330@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE FULL STACK DEVELOPER SPECIALIZING IN WEB & MOBILE APP DEVELOPMENT",
  skills: [
    emoji("⚡ Build highly interactive front-end UIs using React and React Native for web and mobile apps"),
    emoji("⚡ Create Progressive Web Apps (PWAs), Single Page Applications (SPAs), and cross-platform mobile apps"),
    emoji("⚡ Backend development using Node.js with SQL databases and API integrations"),
    emoji("⚡ Integration of services like Firebase, WhatsApp API, and email automation for real-time updates"),
    emoji("⚡ Version control and team collaboration using Git & GitHub")
  ],



  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "javascript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "react",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "react native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node-js"
    },
    {
      skillName: "android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "mobile apps",
      fontAwesomeClassname: "fas fa-mobile-alt"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "vscode",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "sql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    }
  ],

  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "RPS Group of Institutions",
      logo: require("./assets/images/rpslogo.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "August 2018 - June 2022",
      desc: "Completed B.Tech in Computer Science with academic projects in Android and web development.",
      descBullets: [
        "Developed NEET Preparation App during 6th semester",
        "Built an online payment application as a final year capstone project"
      ]
    },
    {
      schoolName: "Aishly Public School",
      logo: require("./assets/images/aishlylogo.png"), // or replace with school logo if available
      subHeader: "Senior Secondary Education (12th - CBSE)",
      duration: "2016 - 2018",
      desc: "Completed 12th with a focus on Science stream (Physics, Chemistry, Math).",
      descBullets: ["Passed with distinction", "School: Ateli Mandi, Haryana"]
    },
    {
      schoolName: "Aishly Public School",
      logo: require("./assets/images/aishlylogo.png"), // reuse same or no logo
      subHeader: "Secondary Education (10th - CBSE)",
      duration: "2014 - 2016",
      desc: "Completed 10th standard under CBSE curriculum.",
      descBullets: ["Passed with excellent academic record", "School: Ateli Mandi, Haryana"]
    }

  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true, // Show the skill proficiency bars
  experience: [
    {
      Stack: "Frontend (React.js, HTML/CSS, Bootstrap)",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend (Node.js, Express.js, SQL Server)",
      progressPercentage: "75%"
    },
    {
      Stack: "Mobile Development (Android, React Native)",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming Languages (Java, JavaScript)",
      progressPercentage: "90%"
    },
    {
      Stack: "Version Control & Tools (Git, GitHub, VS Code)",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false
};


// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "SpiceJet",
      companylogo: require("./assets/images/spicejtlogo.png"),
      date: "MAR 2023 – Present",
      desc: "Leading and contributing to key web and mobile applications for internal airline operations using React.js, Node.js, and .NET stack.",
      descBullets: [
        "Developed and maintained GroupTool and MHB portals using React.js for smooth internal communication and workflow",
        "Built Flight Routes app in React Native with Leaflet maps for dynamic airport routing",
        "Implemented full-stack GST Dashboard and Messaging Dashboard using React.js, Node.js, and SQL Server",
        "Worked on SG Price tool to manage airline pricing modules in real-time",
        "Developed WEBDCS app for printing boarding passes and bag tags using ZPL (Zebra Programming Language) with Bluetooth printer integration"
      ]
    }
    ,
    {
      role: "Software Developer Intern",
      company: "SpiceJet",
      companylogo: require("./assets/images/spicejtlogo.png"), // Use actual logo or comment it out
      date: "AUG 2022 – FEB 2023",
      desc: "Worked on web and mobile application development using React.js and React Native, while contributing to quality assurance and bug fixing across platforms.",
      descBullets: [
        "Assisted in development of React Native mobile apps and internal web tools using React.js",
        "Performed quality testing and resolved UI/UX bugs in SpiceJet’s website and admin panels",
        "Gained hands-on experience in React.js fundamentals, component architecture, and Git-based collaboration"
      ]
    }
    ,
    {
      role: "Android Developer - Associate Intern",
      company: "The Entrepreneurship Network",
      companylogo: require("./assets/images/TheEntrepreneurshipNetworklogo.png"), // Replace or comment out if no logo
      date: "October 2021 – January 2022",
      desc: "Focused on learning core Android development through guided tasks and problem-solving under mentor supervision.",
      descBullets: [
        "Practiced Android concepts using Java and XML layouts",
        "Solved development-related queries and assignments given by mentors",
        "Built small modules and features as part of weekly learning tasks"
      ]
    },
    {
      role: "Web Development Intern",
      company: "Internshala",
      companylogo: require("./assets/images/Internshalalogo.png"), // Replace with actual logo or comment out
      date: "SEPT 2021 – OCT 2021",
      desc: "Completed an online internship focused on frontend and backend development, culminating in the creation of a fully functional website.",
      descBullets: [
        "Learned HTML, CSS, JavaScript, React.js, and Node.js through structured modules",
        "Built a complete web application with user login, form validation, and dynamic content",
        "Hosted the project and presented final output for evaluation"
      ]
    }

  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Real-world projects I contributed to at SpiceJet and personally",
  projects: [
    {
      image: require("./assets/images/grouplogo.png"),
      projectName: "Group Reservation System",
      projectDesc: "Group Booking Tool is a web application developed in React.js to streamline group flight reservations. It allows agents and internal departments to efficiently manage bookings, using Material UI, Bootstrap, and Redux for a responsive and state-managed interface.",
      footerLink: []
    },
    {
      image: require("./assets/images/spicejtlogo.png"),
      projectName: "MHB (Missing Hand Baggage)",
      projectDesc: "MHB is a React-based web application designed for managing and tracking missing hand baggage cases at airports. It enables staff to log incidents, monitor baggage status, and coordinate recovery actions efficiently, improving overall baggage handling operations.",
      footerLink: []
    },
    {
      image: require("./assets/images/spicejetlogo.png"),
      projectName: "WEBDCS – Boarding Pass Printer",
      projectDesc: "React app with ZPL (Zebra Programming Language) integration to print boarding passes and bag tags over Bluetooth.",
      footerLink: []
    },
    {
      image: require("./assets/images/spicedestinationlogo.png"),
      projectName: "SG Routes",
      projectDesc: "React Native app using Leaflet.js to visualize dynamic airport routes and geolocation data for airline route planning.",
      footerLink: []
    },
    {
      image: require("./assets/images/spicejetlogo.png"),
      projectName: "GST Dasboard",
      projectDesc: "GST Dashboard is a full-stack web application built with React and Node.js to monitor and manage GST-related data. It features role-based access control and provides real-time insights into invoice counts, filing statuses, and compliance metrics for internal finance teams.",
      footerLink: []
    },
    {
      image: require("./assets/images/spicejetlogo.png"),
      projectName: "Messaging Dashboard",
      projectDesc: "Messaging Dashboard is a full-stack application developed using React and Node.js to manage and track communication templates. It includes role-based access control, template whitelisting, and real-time monitoring, ensuring secure and organized message distribution across departments.",
      footerLink: []
    },
    // {
    //   image: require("./assets/images/spicejtlogo.png"), // optional custom logo
    //   projectName: "Taskify",
    //   projectDesc: "Jira-like task and issue management system with full-stack tech (React, Node.js, SQL Server) and WhatsApp/email notifications.",
    //   footerLink: [
    //     {
    //       name: "GitHub (if public)",
    //       url: "https://github.com/yourusername/taskify" // Replace with real link if available
    //     }
    //   ]
    // },
    {
      image: require("./assets/images/portfoliologo.png"), // Add a relevant icon or screenshot
      projectName: "My Portfolio",
      projectDesc: "Personal portfolio website built with React.js to showcase my projects, skills, resume, and contact details.",
      footerLink: [
        {
          name: "Live Site",
          url: "https://your-portfolio-link.com" // ← replace with your real deployed URL
        },
        {
          name: "GitHub Repo",
          url: "https://github.com/yourusername/portfolio" // optional
        }
      ]
    },
    {
      image: require("./assets/images/hmra.png"), // Add a relevant icon or screenshot
      projectName: "HMRA Website",
      projectDesc: "Designed and developed a responsive personal brand website for HRMA using React.js. Includes a portfolio, about section, and contact form.",
      footerLink: [
        {
          name: "Live Site",
          url: "https://your-portfolio-link.com" // ← replace with your real deployed URL
        },
        {
          name: "GitHub Repo",
          url: "https://github.com/yourusername/portfolio" // optional
        }
      ]
    }

  ],
  display: true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "SpiceStar Rewards & Recognition",
      subtitle:
        "Recognized for my contributions to the SpiceStar internal portal, enhancing employee engagement and experience.",
      image: require("./assets/images/rewards.png"), // Use any reward/trophy-like icon or custom image
      imageAlt: "SpiceStar Logo",
      footerLink: []
      //   {
      //     // name: "Certificate of Appreciation",
      //     // url: "https://yourdrive.com/appreciation.pdf" // Replace with real file if available
      //   }
      // ]
    }
  ],
//   ,
//     {
//   title: "Google Assistant Action",
//     subtitle:
//   "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
//     image: require("./assets/images/googleAssistantLogo.webp"),
//       imageAlt: "Google Assistant Action Logo",
//         footerLink: [
//           {
//             name: "View Google Assistant Action",
//             url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
//           }
//         ]
// },

// {
//   title: "PWA Web App Developer",
//     subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
//       image: require("./assets/images/pwaLogo.webp"),
//         imageAlt: "PWA Logo",
//           footerLink: [
//             { name: "Certification", url: "" },
//             {
//               name: "Final Project",
//               url: "https://pakistan-olx-1.firebaseapp.com/"
//             }
//           ]
// }
//   ],
display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7027098656",
  email_address: "sahil84330@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
