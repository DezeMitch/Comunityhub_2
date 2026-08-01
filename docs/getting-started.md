# Getting Started

## Prerequisites

- Node.js 22+
- pnpm 9+
- Docker Desktop (for Postgres + Redis)

## Setup

```bash
git clone https://github.com/DezeMitch/Comunityhub_2.git
cd communityhub
pnpm install
cp .env.example .env
pnpm docker:up
pnpm db:generate
pnpm db:migrate
pnpm dev
```

## Services

| Service | URL |
| --- | --- |
| Web | http://localhost:3000 |
| API | http://localhost:4000 |
| Swagger | http://localhost:4000/docs |

## Current status

Phase 0 scaffolding is in place:

- Monorepo tooling
- NestJS API with `/health` and `/members`
- Next.js landing page
- Prisma schema foundation
- Example FiveM plugin skeleton

Auth, forum, tickets, and Discord modules arrive in later roadmap phases.
