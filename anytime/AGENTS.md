<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

## Agent instructions

These guidelines are for any automated or human agent working in this repository.

- Read the project context first:
  - Open `README.md`, `AGENTS.md`, and `node_modules/next/dist/docs/` (if present) before making suggestions.
  - Examine `tsconfig.json`, `package.json`, and `eslint.config.mjs` for project conventions.

- Communication & workflow:
  - Always present a short checklist of proposed steps before making changes.
  - When suggesting edits, include:
	- A short rationale.
	- A concise checklist of actions.
	- A unified diff or full file snippets showing the exact changes.
	- Exact commands (PowerShell on Windows) to apply, run, or test the change.
  - Wrap every filename or symbol from this repo in backticks (e.g., `src/app/page.tsx`).

- Edit rules (for agents that propose edits):
  - Do not modify files directly unless explicitly authorized. Instead, provide patches, diffs, or step-by-step edit instructions.
  - Prefer changes that are incremental and include tests or manual verification steps.
  - Respect formatting, linting, and TypeScript rules used in the repo.

- Testing & verification:
  - Provide commands to run the app and tests locally:
	- Install / restore deps: `npm ci`
	- Run lint: `npm run lint` (if configured)
	- Run build: `npm run build`
	- Run dev server: `npm run dev`
  - When possible, include expected results and how to verify them.

- Safety & provenance:
  - Cite external sources when recommending new libraries or patterns.
  - Note potentially breaking changes and the minimal migration steps.
  - When making automated suggestions, include a commit message template and a changelog note.

- Clarify when unsure:
  - Ask for clarification if requirements are ambiguous or if the change might affect production behavior.

(End of agent instructions)
 (End of agent instructions)

## Skills & capabilities

Agents working on this repository should be prepared with the following skills and capabilities:

- Core stack
  - TypeScript & modern JavaScript (ES2020+)
  - React (hooks, SSR/SSG concepts) and Next.js (note: this repo uses a forked/modified Next.js — read `node_modules/next/dist/docs/` first)
  - Node.js tooling (npm, scripts, basic package management)

- Frontend skills
  - CSS / PostCSS / Tailwind or design-system integration
  - Accessibility (WCAG basics) and responsive design

- Quality & developer tooling
  - Linting (ESLint), formatting (Prettier if present), and TypeScript strictness
  - Testing frameworks (Jest, React Testing Library) — know how to run and interpret tests
  - Browser debugging & devtools

- CI / repo hygiene
  - Git workflows (branching, PRs, meaningful commit messages)
  - Creating small, testable commits and adding changelog entries when applicable
  - Understanding of CI pipelines and required checks before merge

- Operational skills
  - Writing clear unified diffs / patches
  - Providing PowerShell commands on Windows and POSIX commands where appropriate
  - Reproducing issues locally: `npm ci`, `npm run dev`, `npm run build`

- Soft skills
  - Clear, concise communication and checklists before changes
  - When unsure, ask targeted questions rather than guessing

Produce a smaller or more expanded instruction set (e.g., add commit message template or changelog example)? Tell me which variation you prefer and I’ll generate an updated patch for you.

<!-- END:nextjs-agent-rules -->
