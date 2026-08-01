import { Button } from "@communityhub/ui";

const modules = [
  "Forum",
  "Knowledge Base",
  "Tickets",
  "Applications",
  "Events",
  "Discord",
  "Plugins",
  "REST API",
];

export default function HomePage() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8">
      <header className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-accent to-indigo-500 shadow-glass" />
          <span className="font-display text-xl tracking-tight">CommunityHub</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a href="#modules" className="transition hover:text-white">
            Modules
          </a>
          <a href="#self-host" className="transition hover:text-white">
            Self-host
          </a>
          <a
            href="https://github.com/DezeMitch/communityhub"
            className="transition hover:text-white"
          >
            GitHub
          </a>
        </nav>
      </header>

      <section className="relative mt-20 flex flex-1 flex-col justify-center pb-24">
        <p className="mb-4 text-sm uppercase tracking-[0.22em] text-accent-soft">
          Open Source Community Platform
        </p>
        <h1 className="max-w-3xl font-display text-5xl leading-[1.05] tracking-tight text-white md:text-7xl">
          CommunityHub
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
          One modular platform for forums, tickets, docs, events, member portals,
          and Discord â€” self-hosted, API-first, and built for communities that want
          ownership of their data.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button>Get started</Button>
          <Button variant="secondary">Read the docs</Button>
        </div>
      </section>

      <section id="modules" className="border-t border-white/10 py-16">
        <h2 className="font-display text-3xl text-white">Built as modules</h2>
        <p className="mt-3 max-w-2xl text-slate-300">
          Enable what your community needs. Extend the rest with plugins and the
          public API.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {modules.map((moduleName) => (
            <li
              key={moduleName}
              className="rounded-2xl border border-white/10 bg-ink-800/60 px-4 py-5 text-sm text-slate-200 backdrop-blur"
            >
              {moduleName}
            </li>
          ))}
        </ul>
      </section>

      <section id="self-host" className="border-t border-white/10 py-16">
        <h2 className="font-display text-3xl text-white">Self-host in minutes</h2>
        <p className="mt-3 max-w-2xl text-slate-300">
          Docker Compose for local and small deployments. Kubernetes-ready for
          production scale.
        </p>
        <pre className="mt-8 overflow-x-auto rounded-2xl border border-white/10 bg-black/40 p-5 text-sm text-slate-200">
{`git clone https://github.com/DezeMitch/communityhub.git
cd communityhub
pnpm install
pnpm docker:up
pnpm dev`}
        </pre>
      </section>

      <footer className="mt-auto border-t border-white/10 py-8 text-sm text-slate-400">
        MIT Licensed Â· Built for communities that want control
      </footer>
    </main>
  );
}
