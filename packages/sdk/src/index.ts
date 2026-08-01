import type { ApiError, MemberPublicProfile, Paginated } from "@communityhub/types";

export type CommunityHubClientOptions = {
  baseUrl: string;
  apiKey?: string;
  fetch?: typeof fetch;
};

export class CommunityHubApiError extends Error {
  readonly statusCode: number;
  readonly code: string | undefined;
  readonly details: unknown | undefined;

  constructor(error: ApiError) {
    super(error.message);
    this.name = "CommunityHubApiError";
    this.statusCode = error.statusCode;
    this.code = error.code;
    this.details = error.details;
  }
}

export class CommunityHubClient {
  private readonly baseUrl: string;
  private readonly apiKey: string | undefined;
  private readonly fetchImpl: typeof fetch;

  constructor(options: CommunityHubClientOptions) {
    this.baseUrl = options.baseUrl.replace(/\/$/, "");
    this.apiKey = options.apiKey;
    this.fetchImpl = options.fetch ?? fetch;
  }

  async getHealth(): Promise<{ status: "ok"; service: string }> {
    return this.request("/health");
  }

  async listMembers(page = 1, pageSize = 20): Promise<Paginated<MemberPublicProfile>> {
    const params = new URLSearchParams({
      page: String(page),
      pageSize: String(pageSize),
    });
    return this.request(`/members?${params.toString()}`);
  }

  private async request<T>(path: string, init?: RequestInit): Promise<T> {
    const headers = new Headers(init?.headers);
    headers.set("Accept", "application/json");

    if (this.apiKey) {
      headers.set("Authorization", `Bearer ${this.apiKey}`);
    }

    if (init?.body && !headers.has("Content-Type")) {
      headers.set("Content-Type", "application/json");
    }

    const response = await this.fetchImpl(`${this.baseUrl}${path}`, {
      ...init,
      headers,
    });

    if (!response.ok) {
      let payload: ApiError = {
        statusCode: response.status,
        message: response.statusText,
      };

      try {
        payload = (await response.json()) as ApiError;
      } catch {
        // keep fallback payload
      }

      throw new CommunityHubApiError(payload);
    }

    return (await response.json()) as T;
  }
}
