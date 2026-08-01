import { Injectable } from "@nestjs/common";
import type { MemberPublicProfile, Paginated } from "@communityhub/types";

/**
 * Placeholder service for Phase 0.
 * Replace with Prisma-backed queries in Phase 1.
 */
@Injectable()
export class MembersService {
  listPublicMembers(
    page: number,
    pageSize: number,
  ): Paginated<MemberPublicProfile> {
    const safePage = Math.max(1, page);
    const safePageSize = Math.min(100, Math.max(1, pageSize));

    const sample: MemberPublicProfile[] = [
      {
        id: "demo-user-1",
        username: "communityhub",
        displayName: "CommunityHub",
        avatarUrl: null,
        bio: "Open-source community platform maintainer",
        reputation: 100,
        createdAt: new Date().toISOString(),
      },
    ];

    return {
      data: sample,
      meta: {
        page: safePage,
        pageSize: safePageSize,
        total: sample.length,
        totalPages: 1,
      },
    };
  }
}
