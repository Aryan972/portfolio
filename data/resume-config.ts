/**
 * Portfolio & Resume Configuration File
 * Update all your personal information and resume details here
 */

// ==================== PERSONAL INFO ====================
export const personalInfo = {
  fullName: "ABHISHEK NIGAM",
  profileName: "Abhishek Nigam", // Name shown in profile tooltip
  footerDisplayName: ["Abhishek Nigam", "Software Engineer", "Frontend Developer"], // Random selection in footer
  email: "nigamabhishek1502@gmail.com",
  profileImage: "/profile.jpg", // Path to your profile image in public folder
  currentYear: new Date().getFullYear(),
};

// ==================== SOCIAL LINKS ====================
export const socialLinks = [
  {
    name: "GitHub",
    link: "https://github.com/nigamabhishek1502", // Placeholder based on email
    icon: "Github", // lucide-react icon name
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abhishek-nigam-8a5643190/",
    icon: "Linkedin",
  },
  {
    name: "Gmail",
    link: "mailto:nigamabhishek1502@gmail.com",
    icon: "Mail",
  },
];

// ==================== ABOUT ME ====================
export const aboutMe = {
  creatorProject: {
    name: "Collab Canvas",
    link: "https://github.com", // Please update with your live/github link
  },
  intro:
    "Software Engineer with 2.3+ years of experience as a Frontend Developer building scalable and responsive web applications,",
  focusArea: "frontend",
  focusDescription:
    "Proficient in modern frontend (React.js, Next.js) with focus on performance, accessibility, and system design. Experienced in backend (Node.js, REST APIs) and workflow automation.",
  keyTechs: [
    { name: "React", url: "/technologies/react.svg" },
    { name: "NextJS", url: "/technologies/nextjs.svg" },
    { name: "TailwindCSS", url: "/technologies/tailwind.svg" },
    { name: "TypeScript", url: "/technologies/typescript.svg" },
    { name: "NodeJS", url: "/technologies/nodejs.svg" },
  ],
};

// ==================== EXPERIENCE ====================
export const experience = [
  {
    company: "IBM",
    position: "Software Engineer",
    startDate: "Jan 2024",
    endDate: "Present",
    location: "Bengaluru",
    companyWebsite: "https://www.ibm.com",
    companyLogo: "/companies/ibm.svg",
    status: "Working",
    technologies: [
      { name: "React", url: "/technologies/react.svg" },
      { name: "TypeScript", url: "/technologies/typescript.svg" },
      { name: "Redis", url: "/technologies/redis.svg" },
      { name: "Zustand", url: "/technologies/zustand.svg" },
    ],
    achievements: [
      "Scaled platform throughput by enabling 4x faster VM restart recovery using optimized Redux state, async API handling, and efficient state updates, contributing to seamless onboarding for 200K+ customers.",
      "Enhanced cloud console efficiency by implementing Redis-backed client-side caching and performance tuning strategies, reducing reload latency by 50% (4s to 2s) and increasing daily active usage by 15%.",
      "Built RBAC-based conditional rendering for IBM Power11 using dynamic UI logic, reducing user-facing downtime by 40% vs Power10.",
      "Improved frontend scalability and rendering efficiency across large VM datasets by implementing lazy loading and pagination, reducing render load by 35% and enhancing UI responsiveness.",
      "Automated UI workflows using Cypress with API validation and CI/CD, achieving end-to-end coverage and reducing defects by 30%.",
      "Resolved 20+ production bugs and delivered new React features, improving application stability and reducing user-reported issues.",
    ],
  },
  {
    company: "IIIT Delhi",
    position: "AI/ML Intern",
    startDate: "Jul 2023",
    endDate: "Dec 2023",
    location: "New Delhi",
    companyWebsite: "https://www.iiitd.ac.in/",
    companyLogo: "", // Optional: Add /companies/iiitd.png
    status: "Completed",
    technologies: [
      { name: "Generative AI", url: "/technologies/mistral-ai.svg" }, // Assuming mistral icon for AI as placeholder
      { name: "Prompt Eng", url: "/technologies/javascript.svg" },
    ],
    achievements: [
      "Introduced an AI-powered recipe generation system using GPT-2 with prompt engineering for cuisine-based personalization.",
      "Fine-tuned GPT-2 using input-conditioned prompts (ingredients + cuisines) and optimized generation parameters to reduce repetition, improving relevance by 60% and reducing manual effort by 70%.",
    ],
  },
];

// ==================== PROJECTS ====================
export const projects = [
  {
    name: "Collab Canvas",
    image: "/projects/collab-canvas.png", // Make sure to add this image in public/projects/
    description:
      "A real-time collaborative whiteboard supporting 10+ concurrent users with room-based session isolation. Event-driven WebSocket architecture processing 1000+ drawing events per session.",
    tools: [
      { name: "React", url: "/technologies/react.svg" },
      { name: "TypeScript", url: "/technologies/typescript.svg" },
      { name: "NodeJS", url: "/technologies/nodejs.svg" },
      { name: "Vercel", url: "/technologies/vercel.svg" },
    ],
    website: "https://collab-canvas-weld.vercel.app/",
    github: "https://github.com",
    status: "Completed",
  },
  {
    name: "Cloud Resource Cleanup Tool",
    image: "/projects/cloud-cleanup.png", // Make sure to add this image in public/projects/
    description:
      "An AI-driven dashboard analyzing VM usage metrics to detect underutilized resources. Integrated Slack webhook alerting and approval workflows into a Jenkins CI/CD pipeline.",
    tools: [
      { name: "React", url: "/technologies/react.svg" },
      { name: "JavaScript", url: "/technologies/javascript.svg" },
      { name: "MongoDB", url: "/technologies/mongodb.svg" },
      { name: "NodeJS", url: "/technologies/nodejs.svg" },
    ],
    website: "/",
    github: "https://github.com",
    status: "Completed",
  },
];

// Note: Update totalProjects in Projects.tsx if you add/remove projects
export const totalProjects = projects.length; // Total count displayed

// ==================== TECH STACK ====================
export const techStack = [
  {
    category: "Languages",
    items: [
      { name: "javascript", path: "javascript" },
      { name: "typescript", path: "typescript" },
      { name: "c++", path: "c-plusplus" },
      { name: "java", path: "java" },
      { name: "sql", path: "json-schema" }, // using json-schema icon as fallback for sql
      { name: "html5", path: "html5" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "reactjs", path: "react" },
      { name: "nextjs", path: "nextjs" },
      { name: "tailwindcss", path: "tailwind" },
      { name: "webpack", path: "npm" }, // using npm icon as fallback for webpack
    ],
  },
  {
    category: "Backend & Databases",
    items: [
      { name: "nodejs", path: "nodejs" },
      { name: "mongodb", path: "mongodb" },
      { name: "mysql", path: "mongodb" }, // fallback
    ],
  },
  {
    category: "Cloud & Tools",
    items: [
      { name: "git", path: "github" },
      { name: "github", path: "github" },
      { name: "cypress", path: "json-schema" }, // fallback
      { name: "vscode", path: "vscode" },
      { name: "vercel", path: "vercel" },
      { name: "vitejs", path: "vitejs" },
      { name: "linux", path: "linux" },
      { name: "authjs", path: "authjs" },
      { name: "copilot", path: "copilot" },
      { name: "discord", path: "discord" },
      { name: "shopify", path: "shopify" },
    ],
  },
];

// ==================== FOOTER ====================
export const footerConfig = {
  designCredits: [
    {
      name: "Chanh Dai",
      link: "https://chanhdai.com/",
    },
    {
      name: "Ramxcodes",
      link: "https://ramx.in/",
    },
  ],
  copyrightText: "All rights reserved.",
};
