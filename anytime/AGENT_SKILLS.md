# Agent Skills & Capabilities

This document describes the skills, tooling knowledge, and practices expected of any automated or human agent working on this repository.

## Overview

Agents should be able to read project context, propose incremental safe changes, and provide clear verification steps. When uncertain about impact, ask targeted questions rather than guessing.

## Core technical stack

- TypeScript (comfortable reading and editing .ts / .tsx files)
- Modern JavaScript (ES2020+)
- React (function components, hooks)
- Next.js (this repository uses a customized Next.js—consult `node_modules/next/dist/docs/` before changes)
- Node.js and npm (running scripts, managing packages)

## Frontend & accessibility

- CSS / PostCSS, familiarity with Tailwind or design system integration patterns
- Responsive design and cross-browser considerations
- Accessibility basics (semantic HTML, ARIA where needed, keyboard navigation)

## Developer tooling & quality

- ESLint and TypeScript configuration: follow existing linting rules and TypeScript settings
- Formatting: follow project's formatting conventions (Prettier if present)
- Testing: know how to run and interpret unit and integration tests (Jest, React Testing Library, or other configured tools)
- Debugging in-browser and using Node debugging tools

## CI / repository hygiene

- Git workflows: create focused branches, open PRs with clear descriptions, and keep commits small and atomic
- Include test coverage or reproduction steps for any bug fixes
- Add changelog notes for user-facing or breaking changes

## Operational & patching skills

- Produce clear unified diffs/patches when proposing edits
- Prefer incremental changes and include verification steps
- Provide platform-appropriate run commands (PowerShell on Windows; POSIX examples when cross-platform)

## Soft skills

- Provide a short checklist of proposed steps before making changes
- Explain rationale concisely and surface risks or breaking changes
- Ask concise follow-up questions when requirements are ambiguous

## Quick verification commands

Run these locally from the repository root to reproduce and test changes:

PowerShell (Windows):

```powershell
npm ci
npm run lint    # if configured
npm run build
npm run dev
```

POSIX:

```bash
npm ci
npm run lint
npm run build
npm run dev
```

## Example commit message template (recommended)

```
type(scope): short description

More detailed explanation of the change (one or two sentences).
- Why: reason for the change
- Testing: how it was tested

Refs: #ISSUE (if any)
```

## Example changelog entry

```
### Added
- New `AGENT_SKILLS.md` describing expectations for agents and verification commands.
```

---

If you want this document shortened to a one-paragraph summary or expanded to include a formal PR checklist and required CI gates, tell me which variant and I will update the file.

