export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "reverse-proxy-gateway",
    title: "Reverse Proxy API Gateway",
    description: "Nginx-based gateway orchestrating microservice communication with secure routing.",
    longDescription: "Built a reverse proxy API gateway using Nginx to orchestrate communication between microservices, with secure routing and service-aware configuration.",
    technologies: ["Nginx", "Spring Boot", "Docker", "Keycloak", "React", "RTK Query", "Git"],
    featured: true
  },
  {
    id: "odoo-erp-deployment",
    title: "Odoo ERP Deployment",
    description: "Installed and hosted Odoo ERP on an IONOS VPS with PostgreSQL and automated backups.",
    technologies: ["Linux", "Odoo", "PostgreSQL", "VPS Administration"]
  },
  {
    id: "pos-system",
    title: "Point-of-Sale System",
    description: "Designed ERD, built FastAPI backend with secure auth, and a React + TypeScript frontend.",
    technologies: ["FastAPI", "React", "TypeScript", "PostgreSQL", "SQLAlchemy", "Git"]
  },
  {
    id: "ai-chat",
    title: "AI Chat",
    description: "ChatGPT-like chatbot integrating multiple AI models with token optimization.",
    technologies: ["React", "TypeScript", "FastAPI"]
  },
  {
    id: "formula-builder",
    title: "Formula Builder",
    description: "Dynamic formula-building platform for GPA and scientific equations.",
    technologies: ["FastAPI", "React", "PostgreSQL"]
  },
  {
    id: "authentication-game",
    title: "Authentication Game",
    description: "Interactive mini-games for secure, memorable authentication.",
    technologies: ["React", "Node.js"]
  }
];

export const technologies = [
  { name: "Docker", category: "Containerization" },
  { name: "Kubernetes", category: "Orchestration" },
  { name: "Linux", category: "Operating Systems" },
  { name: "Proxmox", category: "Virtualization" },
  { name: "Ansible", category: "Automation" },
  { name: "Terraform", category: "IaC" },
  { name: "Cloudflare", category: "CDN & DNS" },
  { name: "Traefik", category: "Reverse Proxy" },
  { name: "Nginx", category: "Web Server" },
  { name: "FastAPI", category: "Backend" },
  { name: "Spring Boot", category: "Backend" },
  { name: "Odoo", category: "ERP" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Redis", category: "Cache" },
  { name: "Grafana", category: "Monitoring" },
  { name: "Prometheus", category: "Metrics" },
  { name: "GitHub Actions", category: "CI/CD" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Python", category: "Language" },
  { name: "Bash", category: "Scripting" },
  { name: "Git", category: "Version Control" },
  { name: "Keycloak", category: "Auth" },
  { name: "RTK Query", category: "Frontend" },
  { name: "SQLAlchemy", category: "Backend" },
  { name: "Node.js", category: "Runtime" }
];
