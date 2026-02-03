export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  date: string;
  tags: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "homelab-architecture-2024",
    title: "My Homelab Architecture in 2024",
    summary: "A complete overview of my self-hosted infrastructure, including hardware, networking, and the services I run.",
    date: "2024-12-10",
    tags: ["Homelab", "Docker", "Infrastructure"],
    content: `
# My Homelab Architecture in 2024

After years of iteration, my homelab has evolved into a robust self-hosted infrastructure that I'm proud to share.

## Hardware

My current setup runs on a **Dell OptiPlex 7050** with:
- Intel Core i7-7700
- 32GB DDR4 RAM
- 512GB NVMe SSD (OS)
- 4TB HDD (Media Storage)

## Networking

All traffic flows through **Cloudflare Tunnel**, eliminating the need to expose ports directly:

\`\`\`
Internet → Cloudflare → Tunnel → Traefik → Services
\`\`\`

## Core Services

| Service | Purpose |
|---------|---------|
| Traefik | Reverse proxy & SSL |
| Portainer | Container management |
| Uptime Kuma | Monitoring |
| Authentik | SSO & Authentication |

## Docker Compose Structure

\`\`\`yaml
services:
  traefik:
    image: traefik:latest
    labels:
      - "traefik.enable=true"
\`\`\`

More details coming in future posts!
    `,
  },
  {
    slug: "docker-compose-best-practices",
    title: "Docker Compose Best Practices I Learned the Hard Way",
    summary: "Lessons learned from managing dozens of containers in my homelab, including networking, volumes, and secrets management.",
    date: "2024-11-28",
    tags: ["Docker", "DevOps", "Best Practices"],
    content: `
# Docker Compose Best Practices I Learned the Hard Way

After running 30+ containers in my homelab, here are the lessons I wish I knew earlier.

## 1. Use Networks Properly

Don't put everything on the default bridge network:

\`\`\`yaml
networks:
  frontend:
  backend:
  database:
    internal: true
\`\`\`

## 2. Health Checks Are Essential

\`\`\`yaml
healthcheck:
  test: ["CMD", "curl", "-f", "http://localhost/health"]
  interval: 30s
  timeout: 10s
  retries: 3
\`\`\`

## 3. Use .env Files Wisely

Never commit secrets. Use \`.env\` files with proper permissions:

\`\`\`bash
chmod 600 .env
\`\`\`

## 4. Pin Your Versions

Avoid \`latest\` tag in production:

\`\`\`yaml
image: postgres:16.1-alpine
\`\`\`

These simple practices have saved me countless hours of debugging.
    `,
  },
  {
    slug: "cloudflare-tunnel-setup",
    title: "Secure Self-Hosting with Cloudflare Tunnels",
    summary: "How I expose my homelab services to the internet securely without opening any ports on my router.",
    date: "2024-11-15",
    tags: ["Cloudflare", "Security", "Networking"],
    content: `
# Secure Self-Hosting with Cloudflare Tunnels

Opening ports on your home router is risky. Here's how I use Cloudflare Tunnels instead.

## Why Cloudflare Tunnels?

- **No open ports** on your router
- **DDoS protection** included
- **Free SSL certificates**
- **Access policies** for additional security

## Setting Up

First, install cloudflared:

\`\`\`bash
curl -L https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-linux-amd64 -o cloudflared
chmod +x cloudflared
\`\`\`

Authenticate with Cloudflare:

\`\`\`bash
cloudflared tunnel login
\`\`\`

Create a tunnel:

\`\`\`bash
cloudflared tunnel create homelab
\`\`\`

## Docker Compose Integration

\`\`\`yaml
services:
  cloudflared:
    image: cloudflare/cloudflared:latest
    command: tunnel run
    environment:
      - TUNNEL_TOKEN=your_token_here
    restart: unless-stopped
\`\`\`

This setup has been rock-solid for over a year!
    `,
  },
  {
    slug: "n8n-automation-workflows",
    title: "Automating My Homelab with n8n",
    summary: "Building powerful automation workflows for notifications, backups, and monitoring using self-hosted n8n.",
    date: "2024-10-20",
    tags: ["n8n", "Automation", "Self-Hosting"],
    content: `
# Automating My Homelab with n8n

n8n is a powerful workflow automation tool that I self-host. Here are some workflows I've built.

## Workflow 1: Disk Space Alerts

Monitors disk usage and sends Discord notifications:

\`\`\`
SSH Command → If > 80% → Discord Webhook
\`\`\`

## Workflow 2: Backup Verification

Checks if nightly backups completed successfully:

\`\`\`
Cron (9am) → Check Backup File → Telegram Alert
\`\`\`

## Workflow 3: New Media Notifications

Notifies when new content is added to Jellyfin:

\`\`\`
Webhook (Jellyfin) → Format Message → Discord
\`\`\`

## Why n8n Over Alternatives?

- **Self-hosted**: Full control over data
- **Visual editor**: Easy to understand flows
- **Extensive integrations**: 400+ nodes available
- **Code when needed**: JavaScript/Python nodes

The possibilities are endless with n8n!
    `,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
