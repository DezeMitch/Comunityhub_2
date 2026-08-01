# Roadmap

CommunityHub is built in phases. Each phase delivers a usable milestone.

Status legend:

- âœ… Done
- ðŸš§ In progress
- â³ Planned
- ðŸ’¡ Future

---

## Phase 0 â€” Foundation âœ… / ðŸš§

- âœ… Repository structure (monorepo)
- âœ… Open-source documentation (README, LICENSE, CONTRIBUTING, SECURITY)
- âœ… Project vision & architecture docs
- ðŸš§ Shared TypeScript config & tooling
- ðŸš§ Docker Compose (PostgreSQL + Redis)
- ðŸš§ Prisma schema foundation
- ðŸš§ NestJS API bootstrap
- ðŸš§ Next.js web bootstrap

---

## Phase 1 â€” Auth & Members

- â³ Email registration & login
- â³ Email verification & password reset
- â³ Discord / Google / GitHub OAuth
- â³ Sessions & JWT API auth
- â³ Member profiles
- â³ Roles & permissions (RBAC)
- â³ Admin user management
- â³ Audit logs (basic)

---

## Phase 2 â€” Forum & Dashboard

- â³ Dashboard (stats, activity feed, notifications)
- â³ Forum categories, topics, replies
- â³ Markdown / rich editor
- â³ Pin / lock topics
- â³ Polls
- â³ Reputation & badges (basic)

---

## Phase 3 â€” Support & Knowledge

- â³ Knowledge base (categories, search, Markdown)
- â³ Ticket system (categories, assignment, notes, attachments)
- â³ Application forms & approval workflow
- â³ Announcements (homepage + email)

---

## Phase 4 â€” Discord & Events

- â³ Discord role sync & member verification
- â³ Discord announcements & webhooks
- â³ Slash commands (bot)
- â³ Events calendar + RSVP
- â³ Event reminders & Discord sync

---

## Phase 5 â€” Platform Extensibility

- â³ Plugin API & lifecycle hooks
- â³ Official example plugins (FiveM, Minecraft)
- â³ Public REST API keys + rate limiting
- â³ Swagger / OpenAPI completeness
- â³ Custom branding & theme system
- â³ SDK package (`@communityhub/sdk`)

---

## Phase 6 â€” Production Hardening

- â³ Security review (CSRF, XSS, rate limits, RBAC)
- â³ Performance & caching strategy
- â³ Backups & migration tooling
- â³ Kubernetes manifests
- â³ Observability (metrics, tracing, structured logs)
- â³ Accessibility audit (WCAG)

---

## Long-term ðŸ’¡

- Plugin Marketplace
- Mobile app
- Desktop app
- AI moderation
- AI knowledge base assistant
- AI ticket assistant
- ActivityPub / federation
- Multi-community / multi-tenant
- Enterprise edition

---

## How priorities are decided

1. Self-hostable core (auth, members, RBAC)
2. High-demand community modules (forum, tickets, Discord)
3. Extensibility (plugins + API)
4. Polish, scale, and ecosystem

Want to influence the roadmap? Open a [GitHub Discussion](https://github.com/DezeMitch/communityhub/discussions) or an issue with the `roadmap` label.
