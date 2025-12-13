# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Start production server (requires build first)
npm run start

# Lint code
npm run lint
```

## Architecture Overview

This is a Next.js 14 App Router portfolio site built with TypeScript and Tailwind CSS. The architecture follows a server-first approach with strategic client components for interactivity.

### Tech Stack
- **Framework**: Next.js 14.2 with App Router
- **Language**: TypeScript 5 (strict mode enabled)
- **Styling**: Tailwind CSS v4 with OKLch color space variables
- **Components**: shadcn/ui (New York style) built on Radix UI primitives
- **Animation**: motion library (Framer Motion alternative)
- **Icons**: lucide-react

### Directory Structure

```
app/
├── layout.tsx                 # Root layout with metadata
├── page.tsx                   # Home page with projects array
├── globals.css                # Tailwind + CSS variables for theming
└── projects/
    ├── layout.tsx             # Shared layout for case studies
    └── [project-name]/
        └── page.tsx           # Individual project case studies

components/
├── ui/                        # shadcn/ui primitive components
├── sidebar.tsx                # Portfolio sidebar (sticky on desktop)
├── project-card.tsx           # Project showcase cards
├── animated-heading.tsx       # Word-by-word streaming animation
├── reveal-on-view.tsx         # Scroll-triggered reveal wrapper
├── case-study-detail.tsx      # Case study layout wrapper
├── prose-wrapper.tsx          # Typography styling wrapper
└── [other components]

lib/
└── utils.ts                   # cn() utility for Tailwind class merging
```

### Path Aliases

Configured in `tsconfig.json` and `components.json`:
- `@/components` → `/components`
- `@/lib` → `/lib`
- `@/hooks` → `/hooks`

## Key Architectural Patterns

### Server vs Client Components
- **Default**: Server Components (all components without `"use client"`)
- **Client Components** (require `"use client"` directive):
  - Components using hooks (useState, useEffect, useRef)
  - Components using motion library animations
  - Components using browser APIs (Intersection Observer, etc.)
  - Examples: sidebar.tsx, animated-heading.tsx, reveal-on-view.tsx, live-clock.tsx

### Content Management
All content is **hard-coded** in component files as TypeScript objects/arrays. There is no CMS or database.

**Home page** (`app/page.tsx`):
- Contains `projects` array with project metadata (title, image, tags, gradient colors, href)
- Contains `certifications` and `achievements` arrays

**Project pages** (`app/projects/[name]/page.tsx`):
- Each defines its own achievements/outcomes data
- Content is written directly in JSX (not markdown)
- Images imported from `/public/images/`

### Styling Conventions
- **Color System**: CSS variables in OKLch color space defined in `globals.css`
- **Dark Mode**: `.dark` class selector with variable overrides
- **Class Merging**: Use `cn()` utility from `lib/utils.ts` to merge Tailwind classes
- **Typography**: `.prose-content` class applies rich formatting only to case study content
- **Component Variants**: Uses class-variance-authority for shadcn/ui components

### Animation Patterns
- **Scroll Reveals**: Wrap content in `<RevealOnView>` component with "soft" or "hero" intensity
- **Text Animation**: Use `<AnimatedHeading>` for word-by-word streaming effects
- **Easing**: Standard easing is `cubic-bezier(0.22, 1, 0.36, 1)`
- **Stagger**: Use motion's stagger for sequential animations

### Layout Pattern
- **Desktop**: Sticky sidebar (left) + main content (right) using grid layout
- **Mobile**: Full-width stacked layout
- **Sidebar**: Uses `lg:sticky lg:top-4 lg:max-h-[calc(100svh-2rem)]` with independent scroll

### Naming Conventions
- **Files**: kebab-case (e.g., `project-card.tsx`, `animated-heading.tsx`)
- **Components**: PascalCase exports (e.g., `ProjectCard`, `AnimatedHeading`)
- **Props**: TypeScript interfaces named `[ComponentName]Props`

## Adding New Content

### Adding a New Project

1. Create new directory: `app/projects/[project-name]/`
2. Create `page.tsx` with project metadata and content
3. Add project to the `projects` array in `app/page.tsx`:
   ```typescript
   {
     title: "Project Name",
     subtitle: "Brief description",
     imageSrc: "/images/portfolio-[name].png",
     tags: ["Tag1", "Tag2"],
     href: "/projects/[project-name]",
     gradientFrom: "#hexcolor",
     gradientTo: "#hexcolor"
   }
   ```
4. Add project images to `public/images/`

### Adding shadcn/ui Components

The project uses shadcn/ui (New York style) with:
- Base color: neutral
- CSS variables: enabled
- RSC: enabled
- Icon library: lucide-react

To add components, use the shadcn CLI or manually add to `components/ui/`.

## Important Technical Notes

### Font Loading
- Uses **local Geist fonts** (located in `public/fonts/`)
- `middleware.ts` blocks Next.js auto-injected font requests (`/__nextjs_font/*`)
- This prevents external font loading for performance

### Image Handling
- All project images in `public/images/`
- Use Next.js `Image` component with:
  - `priority` for above-the-fold images
  - `sizes` prop for responsive loading
  - `fill` layout with aspect ratios where needed

### TypeScript Configuration
- Strict mode enabled
- Path alias `@/*` points to root directory
- Target: ES6
- Module resolution: bundler

### Tailwind v4
- Uses `@tailwindcss/postcss` plugin (modern approach)
- Config: `postcss.config.mjs`
- CSS variables defined in `app/globals.css`
- No traditional `tailwind.config.js` file

## Color & Theme System

The site uses OKLch color space for perceptual uniformity. All colors are defined as CSS variables in `globals.css`:

```css
:root {
  --primary: oklch(0.205 0 0);
  --accent: oklch(0.97 0 0);
  /* ... 20+ more variables */
}

.dark {
  --primary: oklch(0.985 0 0);
  /* ... overrides */
}
```

When adding new colors, use OKLch format and define both light and dark mode values.

## Component Development Guidelines

### Creating New Components
1. Use kebab-case for filenames
2. Define TypeScript Props interface
3. Determine if component needs `"use client"` directive
4. Use `cn()` utility for className merging
5. Accept `className` prop for style overrides
6. Use semantic HTML with proper ARIA attributes

### Animation Components
- For scroll-triggered reveals: wrap in `<RevealOnView>`
- For text animations: use `<AnimatedHeading>`
- For custom animations: import from `motion` library

### Example Component Structure
```typescript
type MyComponentProps = {
  title: string
  description?: string
  className?: string
  children?: React.ReactNode
}

export default function MyComponent({
  title,
  description,
  className,
  children
}: MyComponentProps) {
  return (
    <div className={cn("base-classes", className)}>
      {/* content */}
    </div>
  )
}
```
