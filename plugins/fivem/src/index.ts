import { manifest } from "./manifest";

export function onLoad() {
  // Placeholder — wire into Plugin runtime in Phase 5
  return {
    manifest,
    status: "loaded" as const,
  };
}

export function onMemberVerify(payload: {
  userId: string;
  discordId?: string;
  license?: string;
}) {
  return {
    ok: true,
    message: "FiveM verification hook placeholder",
    payload,
  };
}

export function onApplicationSubmitted(payload: {
  submissionId: string;
  formSlug: string;
  userId: string;
}) {
  return {
    ok: true,
    message: "Application received by FiveM plugin placeholder",
    payload,
  };
}
