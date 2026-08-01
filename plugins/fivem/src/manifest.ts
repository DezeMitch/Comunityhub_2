import type { PluginManifest } from "@communityhub/types";

export const manifest: PluginManifest = {
  id: "communityhub-fivem",
  name: "FiveM Integration",
  version: "0.1.0",
  description:
    "Example plugin for FiveM communities: member verification hooks and whitelist workflows.",
  author: "CommunityHub",
  permissions: ["members:read", "applications:review", "discord:sync"],
  hooks: ["onLoad", "onMemberVerify", "onApplicationSubmitted"],
};
