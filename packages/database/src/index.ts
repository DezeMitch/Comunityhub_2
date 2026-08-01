import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var __communityhubPrisma: PrismaClient | undefined;
}

export const prisma =
  globalThis.__communityhubPrisma ??
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalThis.__communityhubPrisma = prisma;
}

export * from "@prisma/client";
