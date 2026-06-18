# FileTransfer Project Instructions

This file contains foundational mandates and context for Gemini CLI's interactions with the FileTransfer repository.

## Foundational Mandates

### Non-Negotiable Workflow
- **Commit and Push:** After making ANY change to the codebase (including documentation like this file), you MUST immediately commit and push the changes to the GitHub repository. This is a strict, non-negotiable rule.

### Engineering Priorities
1. **Quality:** Code must be idiomatic, well-structured, and maintainable.
2. **No Bugs:** Exhaustive research and validation are required before and after every change.
3. **Good Front-end Design:** Interfaces must be visually appealing, modern, and user-centric.
4. **Speed:** Efficiency is secondary to technical excellence and correctness.

## Reinforcement Learning (RL)
*This section tracks persistent learnings, architectural insights, and "what works" in this specific codebase to improve future performance.*
- **Refactoring Strategy:** Successful replacement of "FilePizza" branding with "File Transfer" across all components (Wordmark, Footer, Downloader, etc.) while maintaining functional integrity.
- **UI Patterns:** Use of Tailwind CSS v4 for clean, badge-based security indicators in the footer.
- **Workflow:** Strict adherence to the commit-and-push-after-every-turn rule prevents synchronization issues with the remote repository.

## Gacha Section
*This section tracks experimental strategies, randomized architectural explorations, or "wildcard" improvements.*
- **Current Experiment:** Transitioning from an SVG-based wordmark to a pure CSS/Text-based branding for better accessibility and simplicity.

## Project Context

### Tech Stack
- **Framework:** Next.js 15 (App Router)
- **UI:** React 19 + Tailwind CSS v4
- **Language:** TypeScript
- **WebRTC:** PeerJS
- **State Management:** TanStack Query
- **Testing:** Vitest (unit) + Playwright (E2E)
- **Package Manager:** pnpm

### Project Structure
- `src/app/`: Next.js App Router pages
- `src/components/`: React components
- `src/hooks/`: Custom React hooks
- `src/utils/`: Utility functions
- `tests/`: Unit and E2E tests

## Development Workflow

### Useful Commands
- `pnpm dev`: Start development server
- `pnpm build`: Build for production
- `pnpm test`: Run unit tests
- `pnpm lint:fix`: Fix linting issues
- `pnpm format`: Format code with Prettier
- `pnpm type:check`: TypeScript type checking

## Coding Conventions

- **Language:** Always use TypeScript.
- **Components:** Use function syntax for defining React components. Define prop types inline.
- **Exports:** Export values on the same line as their definition.
- **Typing:** Always define the return type of a function or component.
- **Styling:** Use Tailwind CSS for styling.
- **Formatting:** Do not use trailing semicolons.

### Branching & PRs
- All changes should be committed directly to the main branch (or current active branch) and pushed immediately as per the mandate.
