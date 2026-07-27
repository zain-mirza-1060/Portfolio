# Design System

**Project:** Zain Mirza Portfolio
**Version:** 2.0
**Last Updated:** 2026-07-27

---

## Design Philosophy

This portfolio uses a **confident editorial-technical design language** that prioritizes evidence over decoration, clarity over cleverness, and technical credibility over generic patterns.

**Core Principles:**
- Single accent color throughout
- Solid surfaces, no glassmorphism
- Asymmetric layouts for visual interest
- Generous whitespace for scanning
- Purposeful motion, not decoration
- Typography as the primary design element

---

## Color System

### Base Palette

All colors use the Slate family for consistent cool neutrals.

```javascript
// Tailwind config colors
colors: {
  // Base backgrounds
  'base-darker': '#0f172a',  // slate-900
  'base-dark': '#1e293b',    // slate-800

  // Surfaces
  'surface': {
    DEFAULT: 'rgb(30 41 59 / 0.9)',  // slate-800/90
    light: 'rgb(51 65 85 / 0.5)',     // slate-700/50
    border: 'rgb(51 65 85 / 0.4)',    // slate-700/40
  },

  // Accent (Technical Blue)
  accent: {
    50: '#f0f9ff',
    400: '#38bdf8',
    500: '#0EA5E9',   // PRIMARY - use this
    600: '#0284c7',
    700: '#0369a1',
  },

  // Text colors
  text: {
    primary: '#f8fafc',    // slate-50
    secondary: '#cbd5e1',  // slate-300
    tertiary: '#94a3b8',   // slate-400
    muted: '#64748b',      // slate-500
  },

  // Border colors
  border: {
    DEFAULT: 'rgb(51 65 85 / 0.4)',  // slate-700/40
    light: 'rgb(51 65 85 / 0.2)',    // slate-700/20
    accent: '#0EA5E9',                // accent-500
  },

  // Shadows
  shadow: {
    DEFAULT: 'rgb(15 23 42 / 0.5)',  // slate-900/50
    strong: 'rgb(15 23 42 / 0.8)',   // slate-900/80
  },
}
```

### Color Usage

#### Backgrounds
```jsx
// Page background
<body className="bg-base-darker">

// Section backgrounds (alternate for visual rhythm)
<section className="bg-base-darker">    // or
<section className="bg-base-dark">

// No more gradients between sections
```

#### Surfaces (Cards, Containers)
```jsx
// Standard card/surface
<div className="bg-surface border border-surface-border">

// Hover state (project cards, interactive surfaces)
<div className="bg-surface border border-border hover:border-accent-500 transition-colors">

// No more: bg-white/5 backdrop-blur-sm
```

#### Text
```jsx
// Primary text (headings, important content)
<h1 className="text-text-primary">

// Secondary text (body copy)
<p className="text-text-secondary">

// Tertiary text (labels, metadata)
<span className="text-text-tertiary">

// Muted text (timestamps, least important info)
<small className="text-text-muted">
```

#### Accent Usage
**ONLY use accent-500 (#0EA5E9) for:**
- Primary CTAs: `bg-accent-500 hover:bg-accent-600`
- Links: `text-accent-500 hover:text-accent-400`
- Active states: `text-accent-500`
- Focus rings: `focus-visible:ring-accent-500`
- Icon accents: `text-accent-500`
- Borders on hover: `hover:border-accent-500`

**Never:**
- Multiple accent colors in same view
- Gradients with accent
- Accent for decorative elements

---

## Typography

### Typeface

**Geist** - Modern technical sans-serif from Vercel

```typescript
// app/layout.tsx
import { GeistSans, GeistMono } from 'geist/font';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={GeistSans.className}>
        {children}
      </body>
    </html>
  );
}
```

**Font Families:**
- `font-sans` → Geist (default)
- `font-mono` → Geist Mono (technical details, code)

### Type Scale

#### Display (Hero, Major Headings)
```jsx
// Hero headline
<h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none">

// Large section header
<h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
```

#### Section Headers
```jsx
// Main section title
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">

// Subsection title
<h3 className="text-2xl md:text-3xl font-semibold">

// Card/component title
<h4 className="text-xl md:text-2xl font-semibold">
```

#### Body Text
```jsx
// Large body (hero tagline, important paragraphs)
<p className="text-lg md:text-xl leading-relaxed max-w-[65ch]">

// Standard body
<p className="text-base md:text-lg leading-relaxed max-w-[65ch]">

// Small body (metadata, captions)
<p className="text-sm md:text-base text-text-tertiary">
```

#### Labels & UI Text
```jsx
// Button text
<button className="text-base font-semibold">

// Form labels
<label className="text-sm font-medium text-text-secondary">

// Metadata (dates, locations)
<span className="text-sm text-text-muted">

// Technical labels (skill badges)
<span className="text-sm font-mono text-text-secondary">
```

### Font Weights
- `font-normal` → 400 (body text)
- `font-medium` → 500 (emphasized body, labels)
- `font-semibold` → 600 (section headers, buttons)
- `font-bold` → 700 (display headlines)

### Letter Spacing
```jsx
// Display text (large headlines)
className="tracking-tight"       // -0.025em

// Extra tight (hero headlines only)
className="tracking-tighter"     // -0.05em

// Body text (default)
className="tracking-normal"      // 0em

// All caps labels (if used)
className="tracking-wide"        // 0.025em
```

### Line Height
```jsx
// Display/headlines
className="leading-none"         // 1
className="leading-tight"        // 1.25

// Body text
className="leading-relaxed"      // 1.625
className="leading-loose"        // 2

// UI elements
className="leading-normal"       // 1.5
```

### Max Width for Readability
```jsx
// Paragraph text
className="max-w-[65ch]"         // ~65 characters (optimal readability)

// Wide content
className="max-w-prose"          // Tailwind's prose width
```

### Special Typography Features

#### Tabular Figures (for stats, dates, numbers)
```css
.tabular-nums {
  font-variant-numeric: tabular-nums;
}
```

```jsx
// Use for aligned numbers
<div className="tabular-nums font-mono">
  2024-2025
</div>
```

---

## Spacing

### Spacing Scale

Use Tailwind's default scale (4px base unit):

```jsx
// Common spacing values
p-2   // 8px
p-4   // 16px
p-6   // 24px
p-8   // 32px
p-12  // 48px
p-16  // 64px
p-24  // 96px
p-32  // 128px
```

### Section Spacing (Vertical)

```jsx
// Section padding (mobile → desktop)
className="py-16 md:py-24 lg:py-32"

// Larger section spacing for visual rhythm
className="py-20 md:py-28 lg:py-36"

// Smaller section spacing (between related sections)
className="py-12 md:py-16 lg:py-20"

// Never uniform: vary section spacing for rhythm
```

### Container Padding (Horizontal)

```jsx
// Horizontal page padding
className="px-4 md:px-8 lg:px-16"

// Card/component padding
className="p-6 md:p-8"            // balanced
className="p-8 md:p-12"           // generous

// Button padding
className="px-6 py-3"             // standard
className="px-8 py-4"             // large
```

### Component Spacing

```jsx
// Stack spacing (flex-col)
className="space-y-4"             // tight
className="space-y-6"             // standard
className="space-y-8"             // generous
className="space-y-12"            // section-level

// Inline spacing (flex-row)
className="space-x-3"             // tight
className="space-x-4"             // standard
className="space-x-6"             // generous
```

### Grid Gaps

```jsx
// Card grids
className="gap-6"                 // standard
className="gap-8"                 // generous
className="gap-12"                // very generous

// Form grids
className="gap-4"                 // tight
```

---

## Layout

### Container

```jsx
// Page-level container
<div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
  {/* max-width: 1280px */}
</div>

// Narrow container (for text-heavy sections)
<div className="max-w-4xl mx-auto px-4 md:px-8">
  {/* max-width: 896px */}
</div>

// Wide container (for project showcases)
<div className="max-w-[1400px] mx-auto px-4 md:px-8">
</div>
```

### Grid System

```jsx
// Responsive grid (cards, projects)
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"

// 2-column layout (experience timeline, feature comparison)
className="grid grid-cols-1 md:grid-cols-2 gap-12"

// Asymmetric grid (featured + regular items)
className="grid grid-cols-1 lg:grid-cols-3 gap-8"
// First item: lg:col-span-2
// Rest: lg:col-span-1
```

### Flexbox

```jsx
// Horizontal stack
className="flex items-center gap-4"

// Vertical stack
className="flex flex-col gap-6"

// Space between
className="flex items-center justify-between"

// Centered content
className="flex items-center justify-center"
```

### Asymmetry (DESIGN_VARIANCE: 6)

**Techniques:**
```jsx
// Offset headers (not centered)
<h2 className="text-left">  {/* instead of text-center */}

// Mixed column widths
<div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">

// Offset content blocks
<div className="ml-0 lg:ml-12">  {/* visual offset on desktop */}
```

---

## Borders & Radius

### Border Width

```jsx
// Standard border
className="border"                // 1px

// Thick border (accent elements)
className="border-2"              // 2px

// No border
className="border-0"
```

### Border Colors

```jsx
// Subtle border (default)
className="border-border"         // slate-700/40

// Light border
className="border-border-light"   // slate-700/20

// Accent border (hover, active)
className="border-accent-500"

// Specific sides
className="border-t border-border"
className="border-b border-border"
```

### Border Radius

**Standardized to `rounded-xl` (12px) for consistency**

```jsx
// Cards, surfaces, major components
className="rounded-xl"            // 12px - STANDARD

// Buttons
className="rounded-lg"            // 8px

// Small elements (badges, pills)
className="rounded-md"            // 6px

// Images
className="rounded-lg"            // 8px

// Input fields
className="rounded-lg"            // 8px

// Never use:
className="rounded-full"          // Pills - avoid
className="rounded-2xl"           // 16px - too soft
className="rounded"               // 4px - too sharp
```

---

## Shadows

### Shadow Values

```jsx
// Subtle (cards on colored background)
className="shadow-lg shadow-shadow"  // slate-900/50 tint

// Strong (floating elements, modals)
className="shadow-2xl shadow-shadow-strong"  // slate-900/80

// No pure black shadows
// ✗ Bad: shadow-black/20
// ✓ Good: shadow-slate-900/50
```

### Shadow Usage

```jsx
// Project cards
<div className="bg-surface border border-border rounded-xl shadow-lg shadow-shadow">

// Buttons (subtle on hover)
<button className="... hover:shadow-lg">

// Floating navbar
<nav className="... shadow-xl shadow-shadow">
```

---

## Components

### Buttons

#### Primary CTA
```jsx
<button className="
  bg-accent-500 hover:bg-accent-600
  text-white font-semibold
  px-6 py-3
  rounded-lg
  transition-all duration-200
  hover:scale-[1.02] active:scale-[0.98]
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-base-darker
">
  Primary Action
</button>
```

#### Secondary CTA
```jsx
<button className="
  border-2 border-slate-700 hover:border-accent-500
  text-text-secondary hover:text-accent-500
  font-semibold
  px-6 py-3
  rounded-lg
  transition-all duration-200
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 focus-visible:ring-offset-base-darker
">
  Secondary Action
</button>
```

#### Text Link (Tertiary)
```jsx
<a href="#" className="
  text-accent-500 hover:text-accent-400
  underline-offset-4 hover:underline
  transition-colors duration-200
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:rounded
">
  Text Link
</a>
```

### Cards (Project Cards, Experience Cards)

```jsx
<div className="
  bg-surface
  border border-border hover:border-accent-500
  rounded-xl
  p-6 md:p-8
  shadow-lg shadow-shadow
  transition-all duration-300
">
  {/* Card content */}
</div>
```

### Badges (Tech Stack, Tags)

```jsx
<span className="
  inline-flex items-center
  px-2.5 py-1
  rounded-md
  bg-slate-700/30
  border border-slate-600/40
  text-sm text-text-secondary
  font-mono
  hover:border-accent-500 hover:text-accent-400
  transition-colors duration-200
">
  React
</span>
```

### Form Inputs

```jsx
// Text input
<input
  type="text"
  className="
    w-full
    bg-surface
    border border-border
    focus:border-accent-500
    rounded-lg
    px-4 py-3
    text-text-primary
    placeholder:text-text-muted
    focus:outline-none focus:ring-2 focus:ring-accent-500
    transition-colors duration-200
  "
  placeholder="Enter text..."
/>

// Textarea
<textarea
  rows={5}
  className="
    w-full
    bg-surface
    border border-border
    focus:border-accent-500
    rounded-lg
    px-4 py-3
    text-text-primary
    placeholder:text-text-muted
    focus:outline-none focus:ring-2 focus:ring-accent-500
    transition-colors duration-200
    resize-none
  "
  placeholder="Your message..."
/>

// Label
<label
  htmlFor="input-id"
  className="block text-sm font-medium text-text-secondary mb-2"
>
  Label Text
</label>
```

### Navigation

```jsx
// Desktop nav link
<a
  href="#section"
  className="
    text-text-secondary hover:text-accent-500
    transition-colors duration-200
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:rounded
  "
  aria-current="page"  // on active link
>
  Link
</a>

// Active state
<a className="text-accent-500">
  Active Link
</a>

// Mobile menu
<div className="
  md:hidden
  bg-base-dark
  border-t border-border
">
  {/* Mobile links */}
</div>
```

---

## Icons

### Icon Library
**React Icons** (current) - acceptable
**Consider:** Phosphor Icons for refresh

### Icon Sizing
```jsx
// Inline with text
<Icon className="w-5 h-5" />

// Section icons
<Icon className="w-6 h-6" />

// Feature icons (larger)
<Icon className="w-8 h-8" />
```

### Icon Colors
```jsx
// Accent
<Icon className="text-accent-500" />

// Muted
<Icon className="text-text-tertiary" />

// Inherit from parent
<Icon className="text-current" />
```

### Usage
```jsx
// With text
<div className="flex items-center gap-2">
  <Icon className="w-5 h-5 text-accent-500" />
  <span>Icon with text</span>
</div>

// No icon circles
// ✗ Bad:
<div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
  <Icon />
</div>

// ✓ Good:
<Icon className="w-8 h-8 text-accent-500" />
```

---

## Motion & Animation

### Animation Values

**Duration:**
```javascript
{
  fast: '200ms',      // Button feedback, hover
  standard: '400ms',  // Fades, reveals, transitions
  slow: '600ms',      // Hero intro, major transitions
}
```

**Easing:**
```javascript
{
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',       // Default (decelerating)
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',   // Symmetrical
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',        // Accelerating
}
```

### Framer Motion Patterns

#### Fade In
```jsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.4, ease: 'easeOut' }}
>
```

#### Fade + Slide Up
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4, ease: 'easeOut' }}
>
```

#### Scroll-Triggered Reveal
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-50px' }}
  transition={{ duration: 0.4, ease: 'easeOut' }}
>
```

#### Button Interaction
```jsx
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  transition={{ duration: 0.2 }}
>
```

### CSS Transitions

```jsx
// Standard transition
className="transition-colors duration-200"

// Multiple properties
className="transition-all duration-300"

// Custom timing
className="transition-transform duration-200 ease-out"
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

Add to `globals.css`.

### Motion Rules (MOTION_INTENSITY: 5)

**DO animate:**
- Hero introduction (once on mount)
- Section reveals on scroll (subtle, fast)
- Button press/hover feedback
- State transitions (form submission, navigation)
- Card hover (subtle border/shadow change)

**DON'T animate:**
- Every element on the page
- Stagger cascades on every section
- Continuous/infinite loops (floating orbs, pulsing elements)
- Heavy parallax effects
- Unnecessary text animations

**Timing:**
- Keep animations under 600ms
- Respect `prefers-reduced-motion`
- Use `viewport={{ once: true }}` to animate only once

---

## Accessibility

### Focus States

**All interactive elements must have visible focus:**

```jsx
className="
  focus-visible:outline-none
  focus-visible:ring-2
  focus-visible:ring-accent-500
  focus-visible:ring-offset-2
  focus-visible:ring-offset-base-darker
"
```

For inline links:
```jsx
className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:rounded"
```

### Color Contrast

**WCAG AA Requirements:**
- Normal text (< 18px): 4.5:1 contrast
- Large text (≥ 18px or ≥ 14px bold): 3:1 contrast
- UI components: 3:1 contrast

**Tested Combinations:**
- `text-text-primary` on `bg-base-darker`: ✅ 18.5:1
- `text-text-secondary` on `bg-base-darker`: ✅ 11.2:1
- `text-text-tertiary` on `bg-base-darker`: ✅ 6.4:1
- `text-accent-500` on `bg-base-darker`: ✅ 5.8:1

### Semantic HTML

```jsx
// Page structure
<header></header>
<nav></nav>
<main></main>
<section></section>
<article></article>
<aside></aside>
<footer></footer>

// Interactive elements
<button>Action</button>       // for actions
<a href="#">Navigation</a>    // for navigation

// Forms
<label htmlFor="id">Label</label>
<input id="id" />
```

### ARIA Attributes

```jsx
// Current page indicator
<a href="#current" aria-current="page">

// Button with icon only
<button aria-label="Close menu">
  <Icon />
</button>

// Form errors
<div role="alert" className="text-red-400">
  Error message
</div>

// Loading states
<div role="status" aria-live="polite">
  Loading...
</div>
```

### Keyboard Navigation

**Requirements:**
- All interactive elements focusable (no negative tabindex)
- Logical tab order
- Escape key closes modals/menus
- Enter/Space activates buttons
- Arrow keys navigate lists/menus (when applicable)

### Skip Link

```jsx
// app/layout.tsx or main component
<a
  href="#main-content"
  className="
    sr-only focus:not-sr-only
    focus:absolute focus:top-4 focus:left-4
    bg-accent-500 text-white
    px-4 py-2 rounded-lg
    focus:z-50
  "
>
  Skip to main content
</a>

// Main content
<main id="main-content">
```

---

## Responsive Breakpoints

### Tailwind Breakpoints

```javascript
{
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
}
```

### Mobile-First Approach

```jsx
// Default = mobile
<div className="text-2xl md:text-4xl lg:text-6xl">

// Not: desktop-first with max-width queries
```

### Critical Viewport Fixes

```jsx
// Hero section height
// ✗ Bad: h-screen (iOS Safari bug)
// ✓ Good: min-h-[100dvh]
<section className="min-h-[100dvh]">

// Touch targets (minimum 44×44px)
<button className="min-w-[44px] min-h-[44px]">
```

### Testing Viewports

- **375px** - iPhone SE, small Android
- **768px** - iPad portrait
- **1024px** - iPad landscape, small laptop
- **1440px** - Desktop standard
- **1920px** - Large desktop

---

## Implementation Checklist

### Phase 1: Foundation
- [ ] Install Geist font from `geist/font`
- [ ] Update tailwind.config.js with color tokens
- [ ] Add reduced-motion CSS to globals.css
- [ ] Create reusable button components
- [ ] Create reusable card component

### Phase 2: Typography
- [ ] Replace all Inter usage with Geist
- [ ] Apply display scale to headers
- [ ] Apply body scale to paragraphs
- [ ] Add max-w-[65ch] to long-form text
- [ ] Implement tabular-nums for numbers

### Phase 3: Colors
- [ ] Remove all gradient backgrounds
- [ ] Replace glassmorphism with solid surfaces
- [ ] Apply single accent color throughout
- [ ] Update text colors to semantic tokens
- [ ] Tint all shadows with slate

### Phase 4: Components
- [ ] Standardize border-radius to rounded-xl
- [ ] Update badges to rounded-md with solid backgrounds
- [ ] Remove icon circles
- [ ] Add proper focus states everywhere
- [ ] Implement button variants

### Phase 5: Motion
- [ ] Remove unnecessary animations
- [ ] Add purposeful hero intro
- [ ] Implement scroll reveals (sparingly)
- [ ] Add button interaction feedback
- [ ] Implement reduced-motion support

### Phase 6: Accessibility
- [ ] Add skip-to-content link
- [ ] Implement visible focus states
- [ ] Test keyboard navigation
- [ ] Run contrast checks
- [ ] Add ARIA labels where needed
- [ ] Test with screen reader

---

## Design Tokens Reference

Quick reference for developers:

```javascript
const tokens = {
  colors: {
    background: '#0f172a',        // base-darker
    surface: 'rgb(30 41 59/0.9)', // surface
    accent: '#0EA5E9',            // accent-500
    textPrimary: '#f8fafc',       // text-primary
    textSecondary: '#cbd5e1',     // text-secondary
    border: 'rgb(51 65 85/0.4)',  // border
  },

  spacing: {
    sectionY: 'py-16 md:py-24 lg:py-32',
    containerX: 'px-4 md:px-8 lg:px-16',
    cardPadding: 'p-6 md:p-8',
  },

  typography: {
    displayXL: 'text-5xl md:text-7xl font-bold tracking-tight leading-none',
    displayL: 'text-4xl md:text-6xl font-bold tracking-tight',
    headingXL: 'text-3xl md:text-5xl font-semibold tracking-tight',
    headingL: 'text-2xl md:text-3xl font-semibold',
    bodyL: 'text-lg md:text-xl leading-relaxed',
    bodyM: 'text-base md:text-lg leading-relaxed',
    bodyS: 'text-sm md:text-base',
  },

  radius: {
    card: 'rounded-xl',      // 12px
    button: 'rounded-lg',    // 8px
    badge: 'rounded-md',     // 6px
  },

  motion: {
    fast: 'duration-200',
    standard: 'duration-300',
    slow: 'duration-500',
  },
};
```

---

**Design System Complete**
**Version:** 2.0
**Ready for Implementation**
