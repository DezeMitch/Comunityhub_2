# CommunityHub

### The Open Source Community Platform

## Vision

CommunityHub is a modern, open-source community platform built for gaming communities, developers, creators, businesses, and organizations.

The goal is to replace the need for multiple separate tools such as forums, Discord bots, ticket systems, knowledge bases, event managers, and member portals with one modular platform.

CommunityHub will be completely self-hostable, extensible through plugins, and built with modern web technologies.

---

## Principles

- Open Source First
- Self Hostable
- Modular Architecture
- API First
- Fast
- Secure
- Beautiful UI
- Developer Friendly
- Mobile Responsive
- Accessibility First

---

## Tech Stack

### Frontend

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui
- TanStack Query
- Zustand

### Backend

- NestJS
- TypeScript
- PostgreSQL
- Prisma ORM
- Redis
- BullMQ

### Authentication

- Better Auth
- Discord OAuth
- Google OAuth
- GitHub OAuth
- Email Login
- Passkeys (Future)

### Storage

- S3 Compatible
- Local Storage

### Realtime

- WebSockets
- Socket.IO

### Deployment

- Docker
- Docker Compose
- Kubernetes Ready

---

## Main Features

### Authentication

- Login
- Register
- Email Verification
- Password Reset
- OAuth
- Two Factor Authentication

### Dashboard

- Statistics
- Recent Activity
- Notifications
- Community Feed

### Members

- Member Profiles
- Roles
- Permissions
- Reputation
- Activity
- Badges
- Social Links

### Forum

- Categories
- Topics
- Replies
- Rich Editor
- Markdown
- Emoji
- Polls
- Pin Topics
- Lock Topics

### Documentation

Knowledge Base with categories, search, Markdown, and versioning.

### Tickets

Support system with categories, staff assignment, internal notes, attachments, and status workflow.

### Applications

Custom forms and approval workflows for staff applications, whitelist, and team recruitment.

### Events

- Calendar
- RSVP
- Discord Sync
- Reminders

### Discord Integration

- OAuth
- Sync Roles
- Verify Members
- Send Announcements
- Slash Commands
- Webhooks

### Announcements

- Homepage
- Email
- Discord
- Push Notifications

### Notifications

- Browser
- Email
- Discord

### Admin Panel

- Users
- Roles
- Permissions
- Audit Logs
- Plugins
- Settings

### Plugin System

Every feature should be extensible. Plugin API examples: Economy, Minecraft, FiveM, Rust, Valorant, League, CS2.

### REST API

Everything exposes an API with JWT, rate limiting, API keys, and Swagger.

### Themes

- Dark Mode
- Light Mode
- Custom Branding
- Custom CSS

### Security

- CSRF
- XSS Protection
- SQL Injection Protection
- Rate Limiting
- RBAC
- Audit Logs

---

## UI Style

Modern, inspired by Discord, Linear, Vercel, GitHub, and Notion.

- Rounded corners
- Glass effects where appropriate
- Minimal animations
- Professional typography

---

## Folder Structure

```text
apps/
  web/
  api/
packages/
  ui/
  auth/
  database/
  config/
  types/
  sdk/
plugins/
docker/
docs/
```

---

## Development Rules

### Always

- Use TypeScript
- Use strict mode
- Write reusable components
- Create clean architecture
- Avoid duplicated code
- Write documentation
- Generate tests where possible
- Use feature-based folders

### Never

- Use `any`
- Use inline styles
- Hardcode secrets
- Mix business logic into UI

---

## Long Term Goals

- Plugin Marketplace
- Mobile App
- Desktop App
- AI Moderation
- AI Knowledge Base
- AI Ticket Assistant
- Federation
- ActivityPub
- Multiple Communities
- Multi Tenant
- Enterprise Edition

---

## License

MIT

---

## Objective for Cursor

Generate production-ready code.

Prioritize scalability, maintainability, and clean architecture.

Every feature must be modular and documented.

Think like a senior software architect.
