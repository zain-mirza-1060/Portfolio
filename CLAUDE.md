# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 portfolio website for Zain Mirza, a Full Stack AI Engineer. The site is **content-driven** - all portfolio data (experience, projects, skills, contact info) is sourced from markdown files in the `content/` directory using gray-matter frontmatter parsing.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm lint
```

## Content Architecture

**Critical**: The `content/` directory is the **single source of truth** for all portfolio data. Do NOT hardcode content in components.

### Content Files (YAML frontmatter in .md files)
- `content/intro.md` - Personal info: name, title, tagline, summary, years_experience
- `content/experience.md` - Work history: array of jobs with role, company, location, period, bullets
- `content/industry-projects.md` - Professional projects: array with name, tagline, tech, bullets
- `content/personal-projects.md` - Side projects: array with name, tagline, tech, bullets
- `content/tech-stacks.md` - Skills: languages, databases, frameworks, tools, ai_ml
- `content/contact.md` - Contact info: email, phone, linkedin, github
- `content/Zain_resume.pdf` - Resume PDF (source of truth for content)

### Content Loading System
The `lib/content.ts` file exports functions that:
1. Read markdown files from the `content/` directory
2. Parse YAML frontmatter using gray-matter
3. Return typed objects for consumption by components

All content is loaded **server-side** in `app/page.tsx` and passed as props to `PortfolioClient`.

## Application Architecture

### Server/Client Boundary
- `app/page.tsx` - **Server Component** - loads all content via `lib/content.ts` functions
- `app/components/PortfolioClient.tsx` - **Client Component** (`'use client'`) - receives content as props and orchestrates all child components
- Child components (Hero, About, Experience, Skills, Projects, Contact) - receive data via props

**Why this pattern?**: Next.js 15 server components enable file system access (reading markdown files) at build/request time, then hydrate the client with data.

### Component Hierarchy
```
app/page.tsx (Server)
  └─> PortfolioClient.tsx (Client - manages loading state)
      ├─> Navbar
      ├─> Hero
      ├─> About
      ├─> Experience
      ├─> Skills
      ├─> Projects (combines industry + personal)
      ├─> Contact
      └─> Footer
```

### Styling System
- **Tailwind CSS** with custom theme configuration in `tailwind.config.js`
- Custom colors: `primary` (#3B82F6), `secondary` (#60A5FA), `dark` (#0a0a0f), `light` (#F8FAFC)
- Custom animations: `fade-in`, `slide-up`, `float` (defined in tailwind config)
- Global styles: `styles/globals.css`
- **Framer Motion** for advanced animations (see component files)

### TypeScript Configuration
- Path alias: `@/*` maps to root directory (e.g., `@/lib/content`, `@/app/components/Hero`)
- Strict mode enabled
- Target: ES5 for broad browser compatibility

## Key Technical Details

### Next.js App Router Structure
This project uses Next.js 15's App Router (not Pages Router):
- Layouts: `app/layout.tsx` (root layout with metadata)
- Page entry point: `app/page.tsx`
- Components: `app/components/*`
- Legacy pages directory exists but is minimal (only `_app.tsx`)

### Case Sensitivity
**Important**: The repository has been migrated to use lowercase `content/` directory (not `Content/`) for Linux/Vercel compatibility. Always reference `content/` in lowercase.

### Security Updates
The project uses Next.js 15.3.8+ (patched version). When updating dependencies, ensure Next.js stays at a patched version for security.

## Deployment

The site is deployed to **Vercel** (see `DEPLOYMENT.md` for details).
- Framework: Auto-detected as Next.js
- Build command: `npm run build`
- Output directory: `.next`
- Automatic deployments on push to `main` branch

## Modifying Content

To update portfolio content:
1. Edit the relevant markdown file in `content/` directory
2. Follow the existing YAML frontmatter structure
3. Test locally with `npm run dev`
4. The content will automatically be parsed and rendered

**Do NOT**:
- Hardcode content in components
- Create new content files without updating `lib/content.ts`
- Skip testing after content changes (ensure proper YAML formatting)

## Adding New Features

When adding new sections or data:
1. Create/update markdown file in `content/` with frontmatter
2. Add parsing function to `lib/content.ts` with proper TypeScript types
3. Update `app/page.tsx` to fetch the new content
4. Pass data through `PortfolioClient` to the relevant component
5. Create or update component in `app/components/`

## Package Management

The project uses npm (see `package-lock.json`). Key dependencies:
- **next**: React framework
- **react** & **react-dom**: UI library
- **gray-matter**: Frontmatter parser (critical for content system)
- **framer-motion**: Animation library
- **tailwindcss**: Utility-first CSS framework
- **typescript**: Type checking

Always run `npm install` after pulling changes to ensure dependencies are synced.
