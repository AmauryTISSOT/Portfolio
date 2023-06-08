import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  // typescript,
  html,
  css,
  reactjs,
  // redux,
  tailwind,
  // nodejs,
  // mongodb,
  git,
  // figma,
  // docker,
  meta,
  starbucks,
  tesla,
  shopify,
  // threejs,
  ardoise,
  botnot,
  calculator,
  email,
  githubWhite,
  linkedin,
  codewars,
  restaurant,
  adminDashBoard,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "A propos",
  },
  {
    id: "work",
    title: "Projets",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Développeur front-end junior",
    icon: web,
  },
  {
    title: "React",
    icon: mobile,
  },
  {
    title: "Développeur back-end junior",
    icon: backend,
  },
  {
    title: "Passioné & curieux",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "Botnot",
    description:
      "Une application Web destinée aux clercs de notaire. Permet à l'utilisateur de générer des checklistes interactives, des modèles d'email, des modèles de courrier et de consulter des API de l'administration française",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "react-router",
        color: "green-text-gradient",
      },
    ],
    image: botnot,
    live_version: "https://amaurytissot.github.io/botnot/",
    source_code_link: "https://github.com/AmauryTISSOT/botnot",
  },
  {
    name: "Restaurant",
    description: "Intégration d'un site internet d'un restaurant fictif",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: restaurant,
    live_version: "https://amaurytissot.github.io/restaurant/",
    source_code_link: "https://github.com/AmauryTISSOT/restaurant",
  },
  {
    name: "Ardoise magique",
    description:
      "Une application web reproduisant le comportement du jouet \"Ardoise  magique\". Ce projet m'a permis d'acquérir des compétenses en HTML, CSS et Javascript",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: ardoise,
    live_version: "https://amaurytissot.github.io/ETCH-A-SKETCH/",
    source_code_link: "https://github.com/AmauryTISSOT/ETCH-A-SKETCH",
  },
  {
    name: "Calculatrice",
    description:
      "Une application web reproduisant une simple calculatrice. Ce projet de découvrir Javascript ES6",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript ES6",
        color: "pink-text-gradient",
      },
    ],
    image: calculator,
    live_version: "https://amaurytissot.github.io/Calculator/",
    source_code_link: "https://github.com/AmauryTISSOT/Calculator",
  },
  {
    name: "Tableau de bord",
    description: "Intégration d'un tableau de bord en HTML et CSS",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: adminDashBoard,
    live_version: "https://amaurytissot.github.io/Admin-Dashboard/",
    source_code_link: "https://github.com/AmauryTISSOT/Admin-Dashboard",
  },
];
const contactData = [
  {
    link: "mailto: tissot.amaury@gmail.com",
    name: "Email",
    icon: email,
  },
  {
    link: "https://github.com/AmauryTISSOT",
    name: "GitHub",
    icon: githubWhite,
  },
  {
    link: "https://fr.linkedin.com/in/amaury-tissot-279a81222",
    name: "Linkedin",
    icon: linkedin,
  },
  {
    link: "https://www.codewars.com/users/AmauryTISSOT",
    name: "CodeWars",
    icon: codewars,
  },
];

export { services, technologies, experiences, projects, contactData };
