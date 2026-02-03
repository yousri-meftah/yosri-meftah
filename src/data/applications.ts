export interface Application {
  id: string;
  name: string;
  description: string;
  icon: string;
  url: string;
  credentials: {
    username: string;
    password: string;
    note?: string;
  };
  tags?: string[];
}

export const applications: Application[] = [
  {
    id: "jellyfin",
    name: "Jellyfin",
    description: "Self-hosted media streaming server for movies, TV shows, and music",
    icon: "🎬",
    url: "https://jellyfin.yousri-meftah.com",
    credentials: {
      username: "N/A",
      password: "N/A",
      note: "Private instance - request access"
    },
    tags: ["Media", "Streaming"]
  },
  {
    id: "nextcloud",
    name: "Nextcloud",
    description: "Self-hosted file sync and collaboration platform",
    icon: "☁️",
    url: "https://nextcloud.yousri-meftah.com",
    credentials: {
      username: "N/A",
      password: "N/A",
      note: "Private instance - request access"
    },
    tags: ["Storage", "Collaboration"]
  },
  {
    id: "it-tools",
    name: "IT-Tools",
    description: "Collection of handy online tools for developers and IT professionals",
    icon: "🛠️",
    url: "https://it-tools.yousri-meftah.com",
    credentials: {
      username: "N/A",
      password: "N/A",
      note: "Public access"
    },
    tags: ["Utilities", "DevTools"]
  },
  {
    id: "metube",
    name: "MeTube",
    description: "YouTube downloader with a clean web interface",
    icon: "📥",
    url: "https://metube.yousri-meftah.com",
    credentials: {
      username: "N/A",
      password: "N/A",
      note: "Private instance - request access"
    },
    tags: ["Download", "Media"]
  },
  {
    id: "n8n",
    name: "n8n",
    description: "Workflow automation platform for connecting apps and services",
    icon: "⚡",
    url: "https://n8n.yousri-meftah.com",
    credentials: {
      username: "N/A",
      password: "N/A",
      note: "Private instance - request access"
    },
    tags: ["Automation", "Workflows"]
  },
  {
    id: "draw",
    name: "Draw",
    description: "Collaborative whiteboard for diagrams and quick sketches",
    icon: "✏️",
    url: "https://draw.yousri-meftah.com",
    credentials: {
      username: "N/A",
      password: "N/A",
      note: "Public access"
    },
    tags: ["Whiteboard", "Productivity"]
  }
];
