import type { AuthProvider } from "@communityhub/types";

export type SessionClaims = {
  sub: string;
  email: string;
  username: string;
  roles: string[];
  provider: AuthProvider;
};

export const PUBLIC_PERMISSIONS = [
  "forum:read",
  "docs:read",
  "events:read",
] as const;

export const STAFF_PERMISSIONS = [
  "tickets:manage",
  "applications:review",
  "members:moderate",
  "announcements:create",
] as const;

export const ADMIN_PERMISSIONS = [
  "admin:access",
  "roles:manage",
  "settings:manage",
  "plugins:manage",
  "audit:read",
] as const;

export function hasPermission(
  granted: readonly string[],
  required: string,
): boolean {
  return granted.includes("*") || granted.includes(required);
}

export function hasAnyPermission(
  granted: readonly string[],
  required: readonly string[],
): boolean {
  return required.some((permission) => hasPermission(granted, permission));
}
