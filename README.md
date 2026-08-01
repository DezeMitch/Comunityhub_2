# CommunityHub

**The open-source community platform for gaming communities, developers, creators, and organizations.**

CommunityHub replaces fragmented tooling â€” forums, Discord bots, ticket systems, knowledge bases, event managers, and member portals â€” with one modular, self-hostable platform.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6.svg)](https://www.typescriptlang.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)
[![Discord](https://img.shields.io/badge/Discord-Join-5865F2.svg)](https://discord.gg/communityhub)

> Status: **Early development / public alpha scaffolding**  
> See [ROADMAP.md](./ROADMAP.md) and [PROJECT.md](./PROJECT.md) for the full vision.

---

## Why CommunityHub?

Most communities stitch together Discourse + Discord bots + Google Forms + Notion + a custom ticket bot. That creates fragmented member data, inconsistent permissions, and expensive vendor lock-in.

CommunityHub aims to be:

- **Open source first** â€” MIT licensed, community-driven
- **Self-hostable** â€” your data stays on your infrastructure
- **Modular** â€” enable only the features you need
- **API first** â€” every feature exposes a REST API
- **Extensible** â€” plugin system for games, economy, custom workflows
- **Modern** â€” Next.js, NestJS, PostgreSQL, Redis

---

## Core Features (planned)

| Module | Description |
| --- | --- |
| **Members** | Profiles, roles, permissions, reputation, badges |
| **Forum** | Categories, topics, replies, polls, rich editor |
| **Knowledge Base** | Searchable docs with Markdown and versioning |
| **Tickets** | Staff assignment, internal notes, status workflow |
| **Applications** | Custom forms for staff, whitelist, recruitment |
| **Events** | Calendar, RSVP, Discord sync, reminders |
| **Discord** | OAuth, role sync, verification, webhooks, slash commands |
| **Admin** | Users, RBAC, audit logs, plugins, settings |
| **Plugins** | Extend the platform for Minecraft, FiveM, Rust, and more |

---

## Architecture

```text
apps/
  web/          # Next.js 15 frontend
  api/          # NestJS backend API
packages/
  ui/           # Shared UI components (shadcn/ui)
  auth/         # Authentication helpers
  database/     # Prisma schema & client
  config/       # Shared ESLint / TS / Tailwind config
  types/        # Shared TypeScript types
  sdk/          # Public TypeScript SDK
plugins/        # Official & community plugins
docker/         # Docker & Compose deployment
docs/           # Project documentation
```

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| Frontend | Next.js 15, React 19, Tailwind CSS, shadcn/ui, TanStack Query, Zustand |
| Backend | NestJS, Prisma, PostgreSQL, Redis, BullMQ |
| Auth | Better Auth, Discord / Google / GitHub OAuth, email |
| Realtime | Socket.IO |
| Storage | Local or S3-compatible |
| Deploy | Docker Compose, Kubernetes-ready |

---

## Quick Start (development)

> Prerequisites: Node.js 22+, pnpm 9+, Docker Desktop

```bash
# Clone
git clone https://github.com/DezeMitch/communityhub.git
cd communityhub

# Install dependencies
pnpm install

# Copy environment files
cp .env.example .env

# Start Postgres + Redis
pnpm docker:up

# Generate Prisma client & run migrations
pnpm db:generate
pnpm db:migrate

# Start all apps in development
pnpm dev
```

| Service | URL |
| --- | --- |
| Web | http://localhost:3000 |
| API | http://localhost:4000 |
| API Docs (Swagger) | http://localhost:4000/docs |

---

## Documentation

- [Project Vision](./PROJECT.md)
- [Roadmap](./ROADMAP.md)
- [Contributing Guide](./CONTRIBUTING.md)
- [Security Policy](./SECURITY.md)
- [Code of Conduct](./CODE_OF_CONDUCT.md)
- [Architecture Docs](./docs/architecture.md)

---

## Contributing

We welcome contributions of all kinds â€” code, docs, design, translations, and plugins.

1. Read [CONTRIBUTING.md](./CONTRIBUTING.md)
2. Check open [Issues](https://github.com/DezeMitch/communityhub/issues)
3. Open a pull request

---

## Security

Please report vulnerabilities privately. See [SECURITY.md](./SECURITY.md).

---

## License

CommunityHub is released under the [MIT License](./LICENSE).

---

## Acknowledgments

Inspired by the best parts of Discourse, Discord, Linear, Vercel, GitHub, Notion, and community platforms like NamelessMC â€” rebuilt as a modern, modular, self-hostable open-source stack.
