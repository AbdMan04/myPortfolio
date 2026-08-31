import type { Certificate, Language, Project, ProjectLinkKind, Stat } from "./resume.types";

export type { Certificate, Language, Project, ProjectLinkKind, Stat };

export const profile = {
  brand: "AbdMan",
  name: "Abd-Alrahman Baniomar",
  fullName: "Abd-Alrahman Bilal Baniomar",
  title: "Mobile & Web Developer",
  location: "Irbid, Jordan",
  email: "abdmanwork@gmail.com",
  phone: "+962 796 916 809",
  phoneHref: "tel:+962796916809",
  github: "https://github.com/AbdMan04",
  githubHandle: "AbdMan04",
  linkedin: "https://www.linkedin.com/in/abdman04/",
  linkedinHandle: "abdman04",
  resumeUrl: "/Resume.pdf",
  teco: "Software Engineer & Mobile Developer — building Flutter mobile apps and React web apps, currently completing a BSc in Software Engineering at Jordan University of Science andTechnology.",
};

export const summary = [
  "Software Engineer and Mobile Developer focused on shipping real products — responsive web apps built with React and JavaScript, and cross-platform mobile applications built with Dart and Flutter.",
  "I care about the whole journey: clean UI/UX, intuitive interfaces, Git & GitHub workflows, and connecting everything through REST APIs. My goal is always the same: turn an idea into a polished, working product.",
];

export const stats: Stat[] = [
  { value: "3", label: "Projects shipped" },
  { value: "2", label: "Mobile & Web" },
  { value: "3", label: "Industry certifications" },
  { value: "BSc.", label: "in Software Engineering" },
];

export const skills = {
  languages: ["Dart","TypeScript", "JavaScript", "HTML", "CSS"],
  tools: [
    "Flutter","React","Next.js","Node.js / Express",
    "MongoDB","Tailwind CSS","Git & GitHub","Figma",
    "VS Code",
  ],
};

export const projects: Project[] = [
  {
    index: "01",
    title: "BalaghJo",
    platform: "Android",
    description:
      "Smart municipality reporting system — citizens report issues, authorities track and resolve them. Full stack: Flutter mobile app, Node.js/Express REST API, MongoDB, and an admin dashboard.",
    tech: ["Flutter", "Dart", "Node.js", "Express", "MongoDB", "Admin Dashboard"],
    year: "2025",
    links: [
      { label: "GitHub", href: "https://github.com/AbdMan04/BalaghJo", kind: "github" },
      { label: "APK", href: "https://drive.google.com/drive/folders/1DRErRRPdFmAdd4KjScIg7J8YrxzvjL9d?usp=drive_link", kind: "drive" },
    ],
  },
  {
    index: "02",
    title: "Memory Vault",
    platform: "Web",
    description:
      "Interactive digital museum — visitors browse exhibits virtually with a curated, museum-like browsing experience built in React.",
    tech: ["React", "JavaScript", "HTML", "CSS"],
    year: "2024",
    links: [
      { label: "GitHub", href: "https://github.com/AbdMan04/Museum-Project", kind: "github" },
      { label: "Live demo", href: "https://abdman04.github.io/Museum-Project/", kind: "live" },
    ],
  },
  {
    index: "03",
    title: "Time Tracer",
    platform: "Web",
    description:
      "Time-awareness tool for students — track where time actually goes, visualize habits, and build better study routines. All client-side tracking in React.",
    tech: ["React", "JavaScript", "HTML", "CSS", "LocalStorage"],
    year: "2024",
    links: [
      { label: "GitHub", href: "https://github.com/AbdMan04/TimeTrace", kind: "github" },
      { label: "Live demo", href: "https://abdman04.github.io/TimeTrace/#today", kind: "live" },
    ],
  },
];

export const education = {
  degree: "BSc. Software Engineering",
  school: "Jordan University of Science & Technology",
  location: "Irbid, Jordan",
  period: "Oct 2022 — Sep 2026",
  grade: "Grade: Very Good",
};

export const certificates: Certificate[] = [
  { title: "Cybersecurity Essentials", issuer: "Cisco Networking Academy", date: "Aug 2026" },
  { title: "Industrial Cybersecurity Essentials", issuer: "Cisco Networking Academy", date: "May 2026" },
  { title: "AWS Cloud Practitioner Essentials", issuer: "Amazon Web Services", date: "Apr 2026" },
];

export const languages: Language[] = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Conversational" },
];