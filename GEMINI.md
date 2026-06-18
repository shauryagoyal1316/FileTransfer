# FileTransfer Project Instructions

This file contains foundational mandates and context for Gemini CLI's interactions with the FileTransfer repository.

## Foundational Mandates

### Non-Negotiable Workflow
- **Commit and Push:** After making ANY change to the codebase (including documentation like this file), you MUST immediately commit and push the changes to the GitHub repository. This is a strict, non-negotiable rule.

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

### Branching & PRs
- All changes should be committed directly to the main branch (or current active branch) and pushed immediately as per the mandate.
