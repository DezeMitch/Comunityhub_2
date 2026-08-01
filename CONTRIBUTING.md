# Contributing to CommunityHub

Thank you for helping build CommunityHub. This project succeeds when communities can contribute safely and productively.

## Ways to contribute

- Report bugs
- Suggest features
- Improve documentation
- Fix issues / open pull requests
- Build plugins
- Improve accessibility and UX
- Help review pull requests

## Before you start

1. Read [PROJECT.md](./PROJECT.md) and [ROADMAP.md](./ROADMAP.md)
2. Follow the [Code of Conduct](./CODE_OF_CONDUCT.md)
3. Search existing issues before opening a new one
4. For larger changes, open an issue first to discuss the approach

## Development setup

```bash
pnpm install
cp .env.example .env
pnpm docker:up
pnpm db:generate
pnpm db:migrate
pnpm dev
```

## Branch & commit guidelines

- Create a feature branch from `main`: `feat/short-description`, `fix/...`, `docs/...`
- Keep pull requests focused and reviewable
- Write clear commit messages (what + why)
- Prefer small PRs over large unrelated changes

### Commit message style

```text
feat(forum): add topic pinning
fix(auth): prevent session leak on logout
docs(readme): clarify Docker prerequisites
chore(deps): bump prisma to latest
```

## Code standards

- TypeScript strict mode — no `any`
- Feature-based folder structure
- Reusable components in `packages/ui`
- Business logic stays in the API / domain layer — not in React UI
- No hardcoded secrets
- No inline styles (use Tailwind / design tokens)
- Add or update tests when practical
- Update docs when behavior changes

## Pull request checklist

- [ ] Linked to an issue (when applicable)
- [ ] Builds locally (`pnpm build`)
- [ ] Lint / typecheck pass (`pnpm lint`, `pnpm typecheck`)
- [ ] Tests added/updated when relevant
- [ ] Docs updated when relevant
- [ ] No secrets committed
- [ ] Description explains **why**, not only what

## Issue labels (suggested)

| Label | Meaning |
| --- | --- |
| `bug` | Something is broken |
| `enhancement` | New feature or improvement |
| `good first issue` | Suitable for new contributors |
| `help wanted` | Extra attention needed |
| `docs` | Documentation |
| `security` | Security-related |
| `plugin` | Plugin system / extension |
| `roadmap` | Roadmap discussion |

## Security issues

Do **not** open public issues for vulnerabilities. Follow [SECURITY.md](./SECURITY.md).

## License

By contributing, you agree that your contributions are licensed under the MIT License.
