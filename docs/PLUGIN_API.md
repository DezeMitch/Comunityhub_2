# Plugin API (draft)

CommunityHub plugins extend the platform without forking core.

> Status: design draft for Phase 5. Interfaces may change before 1.0.

## Manifest

```ts
type PluginManifest = {
  id: string;          // e.g. "communityhub-fivem"
  name: string;
  version: string;
  description: string;
  author: string;
  permissions: string[];
  hooks: string[];
};
```

## Example plugin skeleton

```text
plugins/
  fivem/
    package.json
    src/
      index.ts
      manifest.ts
      hooks/
        onMemberVerify.ts
```

## Lifecycle hooks (planned)

| Hook | When |
| --- | --- |
| `onLoad` | Plugin is enabled |
| `onUnload` | Plugin is disabled |
| `onMemberJoin` | New member registers |
| `onMemberVerify` | Discord / whitelist verification succeeds |
| `onTicketCreated` | Support ticket opened |
| `onForumPostCreated` | Forum reply posted |
| `onApplicationSubmitted` | Application form submitted |
| `registerCommands` | Discord slash commands registration |

## Security model

- Plugins request explicit permissions
- Admin must approve permission grants
- Plugins cannot bypass core RBAC
- Untrusted plugin code should run sandboxed (future)

## Official plugin ideas

- FiveM whitelist / ban sync
- Minecraft linking
- Economy / store
- Valorant / CS2 / League stats widgets
- Donation goals
