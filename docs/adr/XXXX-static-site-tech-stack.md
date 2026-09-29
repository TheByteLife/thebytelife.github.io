---
number: XXXX
title: Static Site Tech Stack
drafted: 2026-09-29
accepted:
status: draft
tags: [tooling, language, ci-cd, dependencies, structure]
---

# Static Site Tech Stack

## Context

The project needs a static page hosted on GitHub Pages, authored in
TypeScript, compiled to static files. "Minimalism" is defined at the source
level — a clean, programmatic, component-based tree — not a minimal bundle or
dependency footprint. Hand-maintained HTML/CSS files are explicitly unwanted.
Styling (look and feel, CSS frameworks) is deferred and out of scope here.

## Decision

- **Build tool:** Vite
- **Package manager:** pnpm
- **UI:** React with TypeScript
- **Deploy:** GitHub Actions building `dist/` and publishing to GitHub Pages

React's rationale is the authoring model: JSX-as-TS gives a typed, composable
component model where the site is layered programmatically from parts, with
access to off-the-shelf components.

## Alternatives considered

- **Plain TypeScript + hand-written HTML/CSS** — string-centric authoring, no
  componentization. Conflicts with the project's definition of minimalism.
- **React itself** — honestly: partially familiarity. No current feature
  *demands* React; if the page stays truly static, this choice adds weight
  for comfort.
- **Astro** — static-first and lighter; different authoring paradigm
  (file-per-route, islands). Felt premature; revisit if the site grows.
- **Rollup/esbuild directly** — more control, more boilerplate. Vite wraps
  these anyway.
- **Parcel/Webpack** — heavier configuration story.
- **Bun** — fastest installs and attractive as an all-in-one runtime, but
  this project only needs a package manager right now; Vite owns the build.
  Keeping Bun would mean maintaining a second runtime primarily for novelty
  and convenience. Revisit if Bun-in-CI or its test runner becomes relevant.
- **Zero-JS output** — conflicts with the component-authoring goal.

## Consequences

- React runtime (~45 KB gzipped) ships regardless of content. Accepted trade.
- Standard CI path: setup-node with pnpm caching — no custom runtime setup.
- One deliberate tool per job: pnpm installs, Vite builds. No overlap.
- Losing Bun's integrated test runner; not yet a need.
- Styling deferred: plain CSS modules until a dedicated styling ADR. Risk of
  interim styles needing rework once Tailwind (or equivalent) arrives.
- `base` path configuration required for project-pages URLs.
- CI/CD deployment is decided but not yet implemented; deploying to Pages
  manually or via workflow is follow-up work within this boundary. Definition
  of done for the initial setup was a working local `dist/` build.
