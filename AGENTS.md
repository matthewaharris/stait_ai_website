# Instructions for AI coding agents (Codex / IDE agents)

## Goal
Maintain a premium, "dark aurora" marketing site for stait.ai.

## Non-negotiables
- Keep the site fast: avoid heavy images or large third-party scripts.
- Keep animations subtle: no flashing, no infinite parallax storms.
- Prefer Tailwind utility classes + small CSS helpers in `app/globals.css`.
- Use **motion** (framer-motion) only in client components.
- Keep copy business-first (outcomes, trust, security) — no hype.

## Conventions
- Sections live in `components/sections/*`.
- Anchor ids: `#services`, `#process`, `#proof`, `#contact`.
- Colors: CSS variables in `app/globals.css`.

## Typical tasks
- “Add a Services detail page”
- “Add a simple blog/resources page (MDX later)”
- “Add Calendly link + analytics (Plausible) with minimal footprint”

## What *not* to do
- Do not add a template theme or large UI library.
- Do not add tracking pixels by default.
- Do not remove the aurora background or glass styling.
