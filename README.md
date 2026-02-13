# Rauf Maharramov — Portfolio

Personal portfolio website built with Next.js 14 (App Router), TypeScript, and TailwindCSS.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type checking |
| `npm run format` | Format code with Prettier |

## Deploy to Vercel

```bash
npx vercel
```

Or connect the GitHub repository to Vercel for automatic deployments.

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── about/
│   ├── contact/
│   ├── resume/
│   ├── work/
│   │   └── [slug]/
│   ├── writing/
│   │   └── [slug]/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── not-found.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── ui/               # Shared UI components
│   ├── header.tsx
│   ├── footer.tsx
│   └── theme-provider.tsx
├── content/              # Case studies and articles data
├── lib/                  # Constants, types, utilities
└── public/               # Static assets
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Linting**: ESLint + Prettier
- **Deployment**: Vercel (static export)
