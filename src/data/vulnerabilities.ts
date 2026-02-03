export interface Vulnerability {
  id: string;
  title: string;
  description: string;
  type: string;
  status: "Reported" | "Fixed" | "In Progress";
  date: string;
  reference?: {
    label: string;
    url: string;
  };
}

export const vulnerabilities: Vulnerability[] = [
  {
    id: "vuln-001",
    title: "IDOR in User Profile API",
    description: "Discovered an Insecure Direct Object Reference vulnerability allowing unauthorized access to other users' profile data through predictable API endpoints.",
    type: "IDOR",
    status: "Fixed",
    date: "2024-11-15",
    reference: {
      label: "Write-up",
      url: "#",
    },
  },
  {
    id: "vuln-002",
    title: "Stored XSS in Comment System",
    description: "Identified a stored cross-site scripting vulnerability in a comment section that could execute arbitrary JavaScript in victims' browsers.",
    type: "XSS",
    status: "Fixed",
    date: "2024-10-22",
  },
  {
    id: "vuln-003",
    title: "SSRF via Webhook Configuration",
    description: "Found a Server-Side Request Forgery vulnerability through webhook URL validation bypass, allowing internal network scanning.",
    type: "SSRF",
    status: "Reported",
    date: "2024-09-30",
    reference: {
      label: "GitHub Issue",
      url: "#",
    },
  },
  {
    id: "vuln-004",
    title: "Misconfigured S3 Bucket Permissions",
    description: "Discovered publicly accessible S3 bucket containing sensitive configuration files and backup data.",
    type: "Misconfiguration",
    status: "Fixed",
    date: "2024-08-14",
  },
  {
    id: "vuln-005",
    title: "Authentication Bypass via JWT Manipulation",
    description: "Identified weak JWT implementation allowing algorithm confusion attack to bypass authentication controls.",
    type: "Authentication Bypass",
    status: "In Progress",
    date: "2024-12-01",
  },
];
