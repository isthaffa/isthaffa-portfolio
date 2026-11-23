export const profile = {
  name: "Ahmed Isthaffa",
  firstName: "Ahmed",
  lastName: "Isthaffa",
  title: "AI Engineer & Senior Full Stack Engineer",
  roles: [
    "AI Engineer",
    "Full Stack Engineer",
    "Reverse Engineer",
    "LLM Pipeline Builder",
  ],
  location: "Sri Lanka · Working globally",
  email: "ahmedisthaffa12@gmail.com",
  github: "https://github.com/isthaffa",
  linkedin: "https://www.linkedin.com/in/isthaffa/",
  summary:
    "AI Engineer and full stack developer with 5+ years building production systems across fintech, operational resilience and AI. I design LLM pipelines, OCR and RAG systems, and the products around them. I ship fast with AI pair programmers like Claude Code, Codex and GitHub Copilot.",
  about: [
    "I build software where AI does real work: reading credit reports, pulling structured data out of bank statements, and helping underwriters make decisions faster. On the way I've shipped interfaces for Fortune 500 resilience platforms, DevSecOps tooling and mortgage onboarding flows.",
    "I'm a strong reverse engineer. Give me an undocumented API, a legacy codebase, a binary format or a messy PDF, and I'll work out how it behaves and rebuild it cleanly. That same instinct makes me good at debugging hard production issues across the stack.",
    "My daily workflow is AI-native. I orchestrate Claude Code, OpenAI Codex and GitHub Copilot as a team of pair programmers: I set the architecture, write the specs and review every diff, and the agents handle the volume. That lets me deliver at the pace of a small team.",
  ],
  stats: [
    { value: 5, suffix: "+", label: "Years shipping production software" },
    { value: 4, suffix: "", label: "Companies across 3 continents" },
    { value: 20, suffix: "+", label: "Technologies used in production" },
    { value: 3, suffix: "", label: "AI products built end to end" },
  ],
};

export const strengths = [
  {
    title: "AI Engineering",
    icon: "brain",
    body: "LLM integrations, RAG pipelines, OCR extraction, prompt engineering and model fallback strategies with OpenAI, Claude and Gemini.",
  },
  {
    title: "Reverse Engineering",
    icon: "scan",
    body: "Taking apart undocumented APIs, legacy systems, file formats and third-party behaviour, then rebuilding them as clean, documented code.",
  },
  {
    title: "AI-Assisted Development",
    icon: "bot",
    body: "Claude Code, OpenAI Codex and GitHub Copilot run as parallel agents in my workflow. I own the design and review, they speed up delivery.",
  },
  {
    title: "Full Stack Delivery",
    icon: "layers",
    body: "React, Next.js and TypeScript on the front, NestJS, Node, Python and Go on the back, deployed to AWS and GCP with CI/CD.",
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Restrata",
    location: "London, UK",
    period: "05/2025 – Present",
    points: [
      "Build highly interactive, responsive interfaces for an operational resilience platform using React, TypeScript and Mantine UI, turning Figma designs into accessible, pixel-perfect screens.",
      "Designed scalable state management with Redux/Rematch for complex data flows across modules, improving maintainability and performance.",
    ],
    tags: ["React", "TypeScript", "Rematch", "Mantine UI", "Mapbox"],
  },
  {
    role: "Software Engineer",
    company: "Avantrio Pvt Ltd",
    location: "Colombo, Sri Lanka",
    period: "07/2024 – 04/2025",
    points: [
      "Built and maintained full stack applications with React and Node.js, integrating AI features and OpenAI GPT-based solutions to improve performance and response efficiency.",
    ],
    tags: ["React", "Node.js", "OpenAI", "OCR"],
  },
  {
    role: "Software Engineer",
    company: "Continus.io",
    location: "Paris, France",
    period: "05/2023 – 06/2024",
    points: [
      "Turned Figma wireframes into interactive React components and integrated Python/Flask APIs with third-party services.",
      "Delivered a 30% increase in efficiency and a 20% reduction in load times.",
    ],
    tags: ["React", "Python", "Flask", "GitHub API", "GitLab API"],
  },
  {
    role: "Associate Software Engineer",
    company: "One Billion Tech Pvt Ltd",
    location: "Colombo, Sri Lanka",
    period: "07/2021 – 04/2023",
    points: [
      "Built applications with React, React Native, Node.js and AWS in Agile cross-functional teams, improving delivery efficiency and team productivity.",
    ],
    tags: ["React Native", "Node.js", "AWS"],
  },
];

export const projects = [
  {
    name: "CredUp",
    tagline: "AI-powered credit evaluation platform",
    period: "09/2025 – Present",
    description:
      "B2B lending platform for the Malaysian market that lets lenders evaluate and fund loan applications from companies. Automates document intake and credit scoring to cut manual underwriting time.",
    highlights: [
      "AI document pipeline that extracts structured data from CTOS credit reports, bank statements and financial reports",
      "Powers a proprietary credit scoring engine for automated risk assessment",
      "RAG pipeline for contextual document analysis",
      "Underwriter dashboard to review AI output and approve or reject with human oversight",
    ],
    tech: ["Next.js", "NestJS", "Python", "OCR", "RAG", "LLMs", "Supabase", "MongoDB", "AWS"],
    accent: "from-emerald-400 to-cyan-400",
    featured: true,
  },
  {
    name: "ResilienceOS",
    tagline: "Unified operational resilience platform",
    period: "05/2025 – Present",
    description:
      "SaaS platform for Fortune 500 and security companies to manage security risks, critical events and operational resilience in real time, joining siloed data into one operating system.",
    highlights: [
      "Core frontend in React and TypeScript",
      "Scalable state management with Rematch",
      "Real-time Mapbox geospatial visualisations",
    ],
    tech: ["React", "TypeScript", "Rematch", "Mantine UI", "Mapbox GL JS", "SCSS"],
    accent: "from-violet-400 to-fuchsia-400",
    featured: false,
  },
  {
    name: "AI Mortgage Broker",
    tagline: "Digital mortgage brokerage for Dubai property",
    period: "07/2024 – 04/2025",
    description:
      "Streamlines property investment in Dubai by simplifying data collection and profile creation, removing redundant manual entry.",
    highlights: [
      "AI-powered OCR fills investor details straight from ID images",
      "Fewer manual input errors and a faster onboarding flow",
    ],
    tech: ["React", "Redux Toolkit", "Node.js", "Python", "PostgreSQL", "AWS", "OCR"],
    accent: "from-amber-300 to-orange-400",
    featured: false,
  },
  {
    name: "Continus",
    tagline: "Automated DevSecOps platform",
    period: "05/2023 – 06/2024",
    description:
      "Brings SAST, DAST and SCA into one tool to secure DevOps pipelines and continuously assess source code, dependencies, containers and APIs.",
    highlights: ["GitHub and GitLab API integrations that extended workflow coverage"],
    tech: ["Python", "Flask", "React", "PostgreSQL", "Redux"],
    accent: "from-sky-400 to-blue-500",
    featured: false,
  },
];

export const skillGroups = [
  {
    title: "AI & LLM",
    items: ["OpenAI", "Claude", "Gemini", "LangChain", "RAG", "OCR", "MCP", "Prompt Engineering", "LLM Orchestration", "NLP"],
  },
  {
    title: "AI Dev Tools",
    items: ["Claude Code", "OpenAI Codex", "GitHub Copilot", "Cursor"],
  },
  {
    title: "Languages & Frameworks",
    items: ["TypeScript", "JavaScript", "Python", "Go", "Java", "React", "Next.js", "NestJS", "Node.js", "Spring Boot", "Flask", "Angular", "React Native", "Flutter", "SwiftUI"],
  },
  {
    title: "Data",
    items: ["PostgreSQL", "MongoDB", "MySQL", "MSSQL", "Supabase", "Firebase", "DynamoDB", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "GCP", "Docker", "GitLab CI", "RabbitMQ", "Serverless", "CI/CD"],
  },
  {
    title: "Engineering",
    items: ["Reverse Engineering", "Clean Architecture", "Microservices", "API Design", "Design Patterns", "TDD", "Agile / Scrum"],
  },
];

export const marquee = [
  "Claude Code", "Codex", "GitHub Copilot", "OpenAI", "LangChain", "RAG", "OCR", "Next.js", "React",
  "NestJS", "TypeScript", "Python", "Go", "AWS", "GCP", "Docker", "MongoDB", "PostgreSQL", "Supabase", "Redis",
];

export const education = [
  {
    school: "University of Westminster",
    degree: "B.Eng. (Hons) Software Engineering",
    detail: "Second-Class Honours (Upper Division)",
    period: "2019 – 2023",
  },
  {
    school: "Royal College, Colombo",
    degree: "G.C.E. Advanced Level",
    detail: "",
    period: "2004 – 2017",
  },
];
