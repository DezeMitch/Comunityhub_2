# Security Policy

CommunityHub takes security seriously. Because this platform may handle member data, tickets, authentication, and admin permissions, we appreciate responsible disclosure.

## Supported versions

| Version | Supported |
| --- | --- |
| `main` (development) | ✅ |
| Pre-1.0 releases | ✅ Best-effort |
| Unreleased local forks | ❌ |

## Reporting a vulnerability

Please **do not** create a public GitHub issue for security vulnerabilities.

Instead, report privately via one of these channels:

1. GitHub Security Advisories (preferred): **Security → Report a vulnerability** on the repository
2. Email: `security@communityhub.dev` *(replace with your real contact before publishing)*

Include as much detail as possible:

- Description of the issue
- Steps to reproduce
- Impact assessment (auth bypass, data exposure, privilege escalation, etc.)
- Affected component / version / commit
- Proof of concept (if available)
- Suggested fix (optional)

## Response expectations

We aim to:

- Acknowledge reports within **72 hours**
- Provide an initial assessment within **7 days**
- Keep you updated until the issue is resolved or declined
- Credit reporters (if desired) after a fix is released

## Scope examples

In scope:

- Authentication / session issues
- Privilege escalation / RBAC bypass
- XSS, CSRF, injection
- Insecure plugin APIs
- Secrets exposure
- Unsafe file uploads

Out of scope (usually):

- Denial of service without a practical exploit path
- Issues that require physical access to the host
- Vulnerabilities only present in outdated dependencies already patched upstream
- Social engineering

## Security principles for contributors

- Never commit secrets, tokens, or production `.env` files
- Prefer parameterized queries via Prisma
- Validate and sanitize all user input at API boundaries
- Enforce RBAC on every privileged endpoint
- Rate-limit auth and public APIs
- Log security-relevant admin actions to audit logs

Thank you for helping keep CommunityHub and its communities safe.
