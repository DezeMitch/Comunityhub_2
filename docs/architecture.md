# Architecture

CommunityHub is a TypeScript monorepo designed for modular growth.

## High-level overview

```text
┌─────────────────┐     REST / WS      ┌─────────────────┐
│   apps/web      │ ─────────────────► │   apps/api      │
│   Next.js 15    │                    │   NestJS        │
└─────────────────┘                    └────────┬────────┘
                                                │
                     ┌──────────────────────────┼──────────────────────────┐
                     │                          │                          │
                     ▼                          ▼                          ▼
              PostgreSQL                     Redis                     Storage
              (Prisma)                      (BullMQ)                 (S3 / local)
```

## Package boundaries

| Package | Responsibility |
| --- | --- |
| `@communityhub/web` | UI, routing, client state |
| `@communityhub/api` | Domain logic, auth enforcement, REST, jobs |
| `@communityhub/database` | Prisma schema & client |
| `@communityhub/auth` | Shared auth helpers / permission checks |
| `@communityhub/types` | Shared DTOs and contracts |
| `@communityhub/ui` | Design system components |
| `@communityhub/sdk` | Public TypeScript client for integrators |
| `@communityhub/config` | Shared tooling config |

## Module design

Each product area (forum, tickets, docs, events, Discord) should be:

1. **API module** — controllers, services, DTOs, permissions
2. **Data models** — Prisma models scoped to that domain
3. **Web feature folder** — pages/components for that module
4. **Plugin hooks** — extension points for third-party plugins

Business rules live in the API layer. The web app consumes APIs and should not embed privilege logic that the API does not also enforce.

## Auth & authorization

- Authentication via Better Auth (email + OAuth)
- Authorization via RBAC (`Role`, `Permission`, `UserRole`)
- Every privileged endpoint must check permissions server-side
- Audit sensitive admin actions

## Plugin system (planned)

Plugins will register through a manifest and lifecycle hooks:

- `onLoad`
- `onMemberJoin`
- `onTicketCreated`
- `onForumPostCreated`
- Discord event bridges
- Custom routes / admin panels

See [PLUGIN_API.md](./PLUGIN_API.md).

## Security defaults

- Strict TypeScript
- Parameterized DB access via Prisma
- Rate limiting on auth and public APIs
- CSRF protection for cookie sessions
- Input validation at API boundaries
- Secrets only via environment variables

## Deployment

- Local / small teams: Docker Compose
- Production: containerized API + web + managed Postgres/Redis
- Kubernetes manifests planned in Phase 6
