export type SkillCategory = 'frontend' | 'backend' | 'tools';
export type SkillColor = 'primary' | 'secondary' | 'accent';
export type SkillIconKey =
  | 'zap'
  | 'cpu'
  | 'database'
  | 'boxes'
  | 'terminal'
  | 'network'
  | 'shield'
  | 'wrench'
  | 'cloud';

export type SocialLinkKey = 'github' | 'linkedin';
export type NavIconKey = 'home' | 'briefcase' | 'zap' | 'clock' | 'mail';

export interface SocialLink {
  key: SocialLinkKey;
  label: string;
  href: string;
}

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

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  url: string;
  note?: string;
  tags?: string[];
}

export interface Skill {
  name: string;
  level: number;
  icon: SkillIconKey;
  category: SkillCategory;
  color: SkillColor;
}

export interface JourneyItem {
  id: number;
  type: 'work' | 'achievement';
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
}

export const portfolio = {
  profile: {
    name: 'Yousri Meftah',
    role: 'Backend & DevOps Engineer',
    tagline: 'Docker, Cloudflare, Automation & Self-Hosting',
    bio:
      "I'm a passionate backend and DevOps engineer with hands-on experience building and managing self-hosted infrastructure. My homelab runs 20+ production-grade services, handling everything from media streaming to automated workflows.",
    longBio:
      "With a deep passion for self-hosting and infrastructure automation, I've built and maintain a comprehensive homelab environment that mirrors enterprise-grade setups. This hands-on experience has given me practical knowledge in containerization, reverse proxy configuration, SSL automation, monitoring, and disaster recovery.",
    interests: [
      'Self-Hosting & Homelab',
      'Infrastructure Automation',
      'Container Orchestration',
      'Network Security',
      'Open Source Software',
      'API Design',
    ],
  },
  contact: {
    email: 'yousri.meftah12@gmail.com',
    social: [
      {
        key: 'github',
        label: 'GitHub',
        href: 'https://github.com/yousri-meftah',
      },
      {
        key: 'linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/yousrimeftah/',
      },
    ] satisfies SocialLink[],
  },
  hero: {
    note:
      "NOTE: This frontend does not reflect my frontend skills. It was made with Lovable. If you're looking for a frontend dev, I may not be the best fit.",
    stats: [
      { id: 'projects', label: 'PROJECTS' },
      { id: 'services', label: 'SERVICES' },
      { id: 'automation', label: 'AUTOMATION', value: '∞' },
    ],
  },
  navigation: {
    mobileLabel: 'YM',
    items: [
      { id: 'hero', label: 'HOME', icon: 'home' },
      { id: 'projects', label: 'PROJECTS', icon: 'briefcase' },
      { id: 'skills', label: 'SKILLS', icon: 'zap' },
      { id: 'experience', label: 'CAREER', icon: 'clock' },
      { id: 'contact', label: 'CONTACT', icon: 'mail' },
    ] satisfies Array<{ id: string; label: string; icon: NavIconKey }>,
  },
  projects: [
    {
      id: 'reverse-proxy-gateway',
      title: 'Reverse Proxy API Gateway',
      description:
        'Nginx-based gateway orchestrating microservice communication with secure routing.',
      longDescription:
        'Built a reverse proxy API gateway using Nginx to orchestrate communication between microservices, with secure routing and service-aware configuration.',
      technologies: ['Nginx', 'Spring Boot', 'Docker', 'Keycloak', 'React', 'RTK Query', 'Git'],
      featured: true,
    },
    {
      id: 'odoo-erp-deployment',
      title: 'Odoo ERP Deployment',
      description:
        'Installed and hosted Odoo ERP on an IONOS VPS with PostgreSQL and automated backups.',
      technologies: ['Linux', 'Odoo', 'PostgreSQL', 'VPS Administration'],
    },
    {
      id: 'pos-system',
      title: 'Point-of-Sale System',
      description:
        'Designed ERD, built FastAPI backend with secure auth, and a React + TypeScript frontend.',
      technologies: ['FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'SQLAlchemy', 'Git'],
    },
    {
      id: 'ai-chat',
      title: 'AI Chat',
      description: 'ChatGPT-like chatbot integrating multiple AI models with token optimization.',
      technologies: ['React', 'TypeScript', 'FastAPI'],
    },
    {
      id: 'formula-builder',
      title: 'Formula Builder',
      description: 'Dynamic formula-building platform for GPA and scientific equations.',
      technologies: ['FastAPI', 'React', 'PostgreSQL'],
    },
    {
      id: 'authentication-game',
      title: 'Authentication Game',
      description: 'Interactive mini-games for secure, memorable authentication.',
      technologies: ['React', 'Node.js'],
    },
  ] satisfies Project[],
  services: [
    {
      id: 'jellyfin',
      name: 'Jellyfin',
      description: 'Self-hosted media streaming server for movies, TV shows, and music.',
      icon: '🎬',
      url: 'https://jellyfin.yousri-meftah.com',
      note: 'Private instance - request access',
      tags: ['Media', 'Streaming'],
    },
    {
      id: 'nextcloud',
      name: 'Nextcloud',
      description: 'Self-hosted file sync and collaboration platform.',
      icon: '☁️',
      url: 'https://nextcloud.yousri-meftah.com',
      note: 'Private instance - request access',
      tags: ['Storage', 'Collaboration'],
    },
    {
      id: 'it-tools',
      name: 'IT-Tools',
      description: 'Collection of handy online tools for developers and IT professionals.',
      icon: '🛠️',
      url: 'https://it-tools.yousri-meftah.com',
      note: 'Public access',
      tags: ['Utilities', 'DevTools'],
    },
    {
      id: 'n8n',
      name: 'n8n',
      description: 'Workflow automation platform for connecting apps and services.',
      icon: '⚡',
      url: 'https://n8n.yousri-meftah.com',
      note: 'Private instance - request access',
      tags: ['Automation', 'Workflows'],
    },
    {
      id: 'metube',
      name: 'MeTube',
      description: 'YouTube downloader with a clean web interface.',
      icon: '📥',
      url: 'https://metube.yousri-meftah.com',
      note: 'Private instance - request access',
      tags: ['Download', 'Media'],
    },
    {
      id: 'draw',
      name: 'Draw',
      description: 'Collaborative whiteboard for diagrams and quick sketches.',
      icon: '✏️',
      url: 'https://draw.yousri-meftah.com',
      note: 'Public access',
      tags: ['Whiteboard', 'Productivity'],
    },
    {
      id: 'tools',
      name: 'Tools',
      description: 'Personal toolbox for daily utilities and quick tasks.',
      icon: '🧰',
      url: 'https://tools.yousri-meftah.com',
      note: 'Public access',
      tags: ['Utilities', 'Personal'],
    },
  ] satisfies Service[],
  skills: [
    { name: 'Python & FastAPI', level: 88, icon: 'zap', category: 'backend', color: 'secondary' },
    { name: 'Spring Boot & Java', level: 80, icon: 'cpu', category: 'backend', color: 'secondary' },
    { name: 'PostgreSQL & SQL', level: 84, icon: 'database', category: 'backend', color: 'secondary' },
    { name: 'Docker & Kubernetes', level: 86, icon: 'boxes', category: 'tools', color: 'accent' },
    { name: 'Linux & VPS Admin', level: 82, icon: 'terminal', category: 'tools', color: 'accent' },
    { name: 'Nginx & Microservices', level: 83, icon: 'network', category: 'tools', color: 'accent' },
    { name: 'React & TypeScript', level: 74, icon: 'shield', category: 'frontend', color: 'primary' },
    { name: 'Git & CI/CD (Jenkins)', level: 78, icon: 'wrench', category: 'tools', color: 'accent' },
    { name: 'Keycloak & Security', level: 76, icon: 'cloud', category: 'tools', color: 'accent' },
  ] satisfies Skill[],
  journey: [
    {
      id: 1,
      type: 'work',
      title: 'Software Development Engineer Intern',
      company: 'Proxym',
      location: 'Sousse, Tunisia',
      period: 'Feb 2024 – Jun 2024',
      description:
        'Built a reverse proxy API gateway and frontend interfaces for microservices.',
      highlights: [
        'Nginx reverse proxy gateway for microservices',
        'React + RTK Query UI for smooth data fetching',
        'Quality gates: ESLint, Husky, SonarQube, Jest',
      ],
    },
    {
      id: 2,
      type: 'work',
      title: 'Software Development Engineer Intern',
      company: 'Coding Bi Tounsi',
      location: 'Tunisia',
      period: 'Jun 2024 – Aug 2024',
      description: 'Delivered POS system backend APIs and a responsive React frontend.',
      highlights: [
        'Designed ERD and database relationships',
        'FastAPI + SQLAlchemy with auth + tests',
        'React UI with routing, state, and validation',
      ],
    },
    {
      id: 3,
      type: 'work',
      title: 'Software Development Engineer Intern',
      company: 'RIF',
      location: 'Tunisia',
      period: 'Jun 2025 – Aug 2025',
      description: 'Installed, configured, and maintained Odoo ERP on VPS infrastructure.',
      highlights: [
        'IONOS VPS setup with Linux + PostgreSQL',
        'Automated backups for data protection',
        'Performance monitoring and uptime checks',
      ],
    },
    {
      id: 4,
      type: 'achievement',
      title: 'Security & Competitive Programming',
      company: 'Freelance / Competitive',
      location: 'Remote',
      period: '2023 – Present',
      description: 'Security research, vulnerability reports, and competitive programming wins.',
      highlights: [
        'Critical vuln discovery incl. account takeover',
        '1000+ LeetCode problems solved',
        'Purple-rated Codeforces profile',
      ],
    },
    {
      id: 5,
      type: 'achievement',
      title: 'Open Source Projects',
      company: 'GitHub',
      location: 'Open Source',
      period: '2024 – Present',
      description: 'AI Chat, Formula Builder, and Authentication Game.',
      highlights: [
        'AI Chat: multi-model integration + token optimization',
        'Formula Builder: GPA & scientific equation builder',
        'Authentication Game: passwordless mini-game login',
      ],
    },
    {
      id: 6,
      type: 'achievement',
      title: 'Homelab & Self-Hosting',
      company: 'Personal Homelab',
      location: 'Self-Hosted',
      period: 'Ongoing',
      description:
        "With a deep passion for self-hosting and infrastructure automation, I've built and maintain a comprehensive homelab environment that mirrors enterprise-grade setups.",
      highlights: [
        '20+ production-grade services',
        'Reverse proxy & SSL automation',
        'Monitoring and disaster recovery',
      ],
    },
    {
      id: 7,
      type: 'achievement',
      title: 'Vulnerability Reports',
      company: 'Independent',
      location: 'Responsible Disclosure',
      period: 'Aug 2024 – Dec 2024',
      description: 'Identified and reported vulnerabilities across web and cloud systems.',
      highlights: [
        'IDOR — Insecure Direct Object Reference',
        'XSS — Stored cross-site scripting',
        'SSRF — Webhook URL validation bypass',
        'Misconfiguration — S3 bucket exposure',
        'Auth Bypass — JWT algorithm confusion',
      ],
    },
  ] satisfies JourneyItem[],
};
