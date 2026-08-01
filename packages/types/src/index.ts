export type ApiError = {
  statusCode: number;
  message: string;
  code?: string;
  details?: unknown;
};

export type Paginated<T> = {
  data: T[];
  meta: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
};

export type AuthProvider = "email" | "discord" | "google" | "github";

export type MemberPublicProfile = {
  id: string;
  username: string;
  displayName: string | null;
  avatarUrl: string | null;
  bio: string | null;
  reputation: number;
  createdAt: string;
};

export type PluginManifest = {
  id: string;
  name: string;
  version: string;
  description: string;
  author: string;
  permissions: string[];
  hooks: string[];
};
