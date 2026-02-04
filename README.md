# Portfolio

Personal portfolio site for Yousri Meftah.

## Transparency & Attribution

This project was created with Lovable. It does **not** represent my frontend skill level. I’m a backend/DevOps‑focused engineer, and I want to be clear and honest about that.

## Getting started

```sh
npm i
npm run dev
```

## Contact Form (n8n Workflow)

The contact form posts to an n8n webhook, which then sends notifications and responds to the request.

Workflow summary (see `public/n8n.PNG`):
1. **Webhook** — Receives the form submission (POST).
2. **Send a message (Slack)** — Sends a message to Slack.
3. **Send a message (Gmail)** — Sends an email.
4. **Merge** — Combines results.
5. **Respond to Webhook** — Returns a success response to the frontend.

Environment variables:
```
VITE_N8N_WEBHOOK_URL=https://n8n.yousri-meftah.com/webhook/contact
VITE_N8N_WEBHOOK_HEADER_NAME=yousri
VITE_N8N_WEBHOOK_HEADER_VALUE=yousri
```

## Tech stack

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
