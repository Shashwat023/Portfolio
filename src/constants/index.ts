import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "@/types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  praedico,
  techxservices,
  memorycare,
  startupmentor,
  resumesuite,
  threejs,
} from "@/assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "AI/ML Engineer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "3D & WebGL Developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "MERN Developer Intern",
    companyName: "Praedico Global Research",
    icon: praedico,
    iconBg: "#383E56",
    date: "Jan 2026 - Mar 2026",
    points: [
      "Engineered production-grade MERN applications serving 1,000+ users, designing RESTful APIs and responsive SPAs supporting complete CRUD workflows.",
      "Strengthened backend security through JWT authentication, middleware logic, and structured Mongoose schemas, increasing system reliability by 30%.",
      "Refined database queries and optimized API endpoints, lowering average response latency by 25%.",
    ],
  },
  {
    title: "Full Stack Developer Intern",
    companyName: "TechXServices",
    icon: techxservices,
    iconBg: "#E6DEDD",
    date: "Jun 2025 - Aug 2025",
    points: [
      "Architected a MERN-based internal SaaS dashboard used by 50+ users with real-time data processing and scalable client-server communication.",
      "Crafted responsive cross-browser UI components using React, modern JavaScript (ES6+), HTML5, and CSS3, boosting engagement by 50%.",
      "Coordinated feature delivery within an Agile workflow, collaborating through Git-based version control while maintaining 100% sprint completion.",
    ],
  },
  {
    title: "SDE Trainee",
    companyName: "Salesine",
    icon: web,
    iconBg: "#383E56",
    date: "Aug 2024 - Present", 
    points: [
      "Worked as a Full Stack Developer Intern using technologies like NestJS (backend), and MongoDB Atlas.",
      "Implemented user authentication with JWT, task CRUD operations, and real-time status toggling.",
      "Deployed backend on Railway and frontend on Netlify with complete cloud integration.",
    ],
  },
  {
    title: "Technical Head",
    companyName: "AI CLUB MITS DU",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Present",
    points: [
      "AI Club is a community of students passionate about artificial intelligence, full stack development, and hands on learning.",
      "Led full stack development for the AI Club, managing projects end to end and guiding juniors through MERN stack workflows, best practices, and deployments.",
      "Handled team leadership & recruitment, conducting interviews, onboarding new members, and coordinating project teams to deliver AI focused web solutions.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "MemoryCare",
    description:
      "AI dementia-care platform with real-time WebRTC video sessions, 20s chunk transcription, and Arcface-linked embeddings stored in SpacetimeDB. Features personalized dashboards with session history, sentiment analysis, medication reminders, and GPS safe-zone alerts.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "webrtc",
        color: "pink-text-gradient",
      },
    ],
    image: memorycare,
    sourceCodeLink: "https://github.com/Shashwat023/MemoryCare.git",
  },
  {
    name: "AI Startup Mentor",
    description:
      "Multi-agent AI advisory platform producing startup evaluations, roadmaps, and pitch decks across 100+ interactive sessions. Features multimodal RAG workflow handling text, documents, images, and voice with persistent session memory.",
    tags: [
      {
        name: "fastapi",
        color: "blue-text-gradient",
      },
      {
        name: "crewai",
        color: "green-text-gradient",
      },
      {
        name: "langgraph",
        color: "pink-text-gradient",
      },
    ],
    image: startupmentor,
    sourceCodeLink: "https://github.com/Shashwat023/Startup-Build.git",
  },
  {
    name: "Resume Intelligence Suite",
    description:
      "Modular AI career platform used by 200+ users for resume optimization, interview preparation, chatbot guidance, and job alerts. Features RAG pipeline with vector search and automated 1,000+ job scraping with personalized outreach campaigns.",
    tags: [
      {
        name: "mern",
        color: "blue-text-gradient",
      },
      {
        name: "langchain",
        color: "green-text-gradient",
      },
      {
        name: "n8n",
        color: "pink-text-gradient",
      },
    ],
    image: resumesuite,
    sourceCodeLink: "https://github.com/Shashwat023/Resume-intelligence-suite.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
