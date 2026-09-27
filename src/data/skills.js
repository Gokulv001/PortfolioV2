export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Building responsive, modern, and accessible user interfaces with clean architecture.",
    skills: [
      { name: "React.js", level: "Core", icon: "react" },
      { name: "TypeScript", level: "Core", icon: "typescript" },
      { name: "JavaScript (ES6+)", level: "Core", icon: "javascript" },
      { name: "Tailwind CSS", level: "Styling", icon: "tailwind" },
      { name: "HTML5", level: "Markup", icon: "html" },
      { name: "CSS3", level: "Styling", icon: "css" },
      { name: "Bootstrap", level: "Framework", icon: "bootstrap" }
    ]
  },
  {
    id: "mobile",
    title: "Mobile App Development",
    description: "Cross-platform mobile applications for Android & iOS with native-feel UI/UX.",
    skills: [
      { name: "React Native", level: "Core Mobile", icon: "react-native" },
      { name: "Expo", level: "Tooling & Workflow", icon: "expo" },
      { name: "Android App Development", level: "Platform", icon: "android" },
      { name: "Responsive Mobile UI", level: "Design System", icon: "mobile-ui" }
    ]
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Architecting robust server-side systems, RESTful microservices, and secure APIs.",
    skills: [
      { name: "Node.js", level: "Runtime", icon: "nodejs" },
      { name: "Express.js", level: "Framework", icon: "express" },
      { name: "REST APIs", level: "Architecture", icon: "api" },
      { name: "API Integration", level: "Integration", icon: "integration" },
      { name: "Authentication", level: "Security / JWT", icon: "auth" }
    ]
  },
  {
    id: "database",
    title: "Database Management",
    description: "NoSQL schema modeling, query optimization, indexing, and data persistence.",
    skills: [
      { name: "MongoDB", level: "NoSQL Database", icon: "mongodb" },
      { name: "Mongoose", level: "ODM Modeling", icon: "mongoose" }
    ]
  },
  {
    id: "tools",
    title: "Tools & Development Workflow",
    description: "Version control, automated team pipelines, API testing, and agile collaboration.",
    skills: [
      { name: "Git", level: "Version Control", icon: "git" },
      { name: "GitHub", level: "Code Repository", icon: "github" },
      { name: "Postman", level: "API Testing", icon: "postman" },
      { name: "Azure DevOps", level: "CI/CD & Boards", icon: "azure" }
    ]
  }
];
