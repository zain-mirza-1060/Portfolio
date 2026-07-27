# Design Direction

**Created:** 2026-07-27
**For:** Zain Mirza Portfolio Refactor

---

## Design Read Statement

**"Reading this as: a senior software engineer portfolio for technical recruiters, engineering managers, founders and clients, using a confident editorial-technical design language with restrained but purposeful motion."**

---

## Configuration Dials

Based on the design read and portfolio requirements:

- **`DESIGN_VARIANCE: 6`** *(1 = Perfect Symmetry, 10 = Artsy Chaos)*
  - Rationale: Enough asymmetry to feel distinctive and designed, but structured enough for recruiters to scan quickly
  - Avoid: Perfectly centered everything (current problem)
  - Allow: Offset headers, mixed aspect ratios, left-aligned content blocks

- **`MOTION_INTENSITY: 5`** *(1 = Static, 10 = Cinematic / Physics)*
  - Rationale: Purposeful motion that communicates state and adds delight, not decoration
  - Avoid: Excessive stagger sequences, continuous animations, unnecessary hover effects
  - Allow: Hero intro, meaningful state transitions, scroll-based reveals (sparingly)

- **`VISUAL_DENSITY: 4`** *(1 = Art Gallery / Airy, 10 = Cockpit / Packed Data)*
  - Rationale: Generous whitespace to let work breathe, but enough information density for time-constrained evaluators
  - Avoid: Cramming everything, dense bullet lists
  - Allow: Scannable hierarchies, clear section separation, breathing room

---

## Foundation & Stack

### Design System Choice
**No off-the-shelf design system.** This is a custom portfolio requiring:
- Tailwind v3 utilities (already in project)
- Custom component patterns
- Native CSS for advanced layouts
- Framer Motion for purposeful animation

**Why no design system:**
- Not a product UI (no Material, Fluent, Carbon)
- Not public sector (no USWDS, GOV.UK)
- Not enterprise (no Bootstrap)
- Portfolio requires custom expression within structured constraints

### Technology Stack (Preserve Existing)
- **Framework:** Next.js 15 (App Router) ✅
- **Styling:** Tailwind CSS v3.4.17 ✅
- **Animation:** Framer Motion ✅
- **Typography:** Replace Inter with Geist (see below)
- **Icons:** React Icons (already present) - acceptable, consider Phosphor for refresh

---

## Visual Character

### Desired Qualities (from PRODUCT.md)
- Senior and credible
- Technically sophisticated
- Clear before decorative
- Premium without looking luxurious
- Distinctive without becoming experimental
- Editorial enough to create personality
- Structured enough for recruiters to scan quickly
- Suitable for both technical and non-technical visitors

### Anti-Patterns to Eliminate (from audit + requirements)
❌ Purple-to-blue AI gradients
❌ Dark mesh backgrounds used without purpose
❌ Generic centered hero sections
❌ Three identical feature cards
❌ Cards nested inside cards
❌ Glassmorphism across the entire page
❌ Excessive rounded rectangles
❌ Excessive pill-shaped badges
❌ Large decorative quotation marks
❌ Random star or sparkle icons
❌ Fake terminal windows used only as decoration
❌ Infinite-loop animations
❌ Low-contrast gray text
❌ Generic claims such as "building innovative digital experiences"

---

## Typography Direction

### Typeface Strategy

**Replace Inter (generic) with Geist**
- **Display/Headers:** Geist (600-700 weight)
  - Large display: `text-5xl md:text-7xl tracking-tight leading-none font-bold`
  - Section headers: `text-3xl md:text-5xl tracking-tight leading-tight font-semibold`
  - Subsection headers: `text-xl md:text-2xl font-semibold`

- **Body Text:** Geist (400-500 weight)
  - Paragraph: `text-base md:text-lg leading-relaxed max-w-[65ch]`
  - UI labels: `text-sm md:text-base`
  - Metadata: `text-sm text-gray-500`

- **Code/Technical:** Geist Mono (when showing technical details)
  - For tech stack, command snippets, technical callouts
  - `font-mono text-sm`

**Why Geist:**
- Created by Vercel, feels native to Next.js
- Modern, technical, credible
- Excellent readability at all sizes
- Not overused like Inter
- Variable font with excellent weight range
- Pairs perfectly with Geist Mono

**Typography Hierarchy:**
- Tighten letter-spacing on large headlines (`tracking-tight`, `tracking-tighter`)
- Increase line-height for body text (`leading-relaxed`, `leading-loose`)
- Limit paragraph width to ~65 characters for readability
- Use font-weight strategically: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)
- Technical data (years, stats): tabular figures with `font-variant-numeric: tabular-nums`

---

## Color Strategy

### Palette Philosophy
**Single accent color system. Neutral base. High contrast.**

**Move away from:**
- Oversaturated blues (#3B82F6, #60A5FA)
- Purple/blue gradients everywhere
- Multiple accent colors

**New Direction:**

#### Option A: Technical Blue (Refined)
- **Base:** Slate-900 to Slate-950 (tinted dark, not pure black)
- **Surface:** Slate-800/90 (solid, no glassmorphism)
- **Accent:** Electric Blue #0EA5E9 (Cyan-500) - desaturated, technical
- **Text:** Slate-50 (primary), Slate-400 (secondary), Slate-500 (metadata)
- **Borders:** Slate-700/50

**Character:** Technical, modern, cloud/dev-focused. Feels like VS Code, Linear, Vercel.

#### Option B: Neutral + Emerald (Distinctive)
- **Base:** Zinc-900 to Zinc-950
- **Surface:** Zinc-800/95
- **Accent:** Emerald-500 #10B981 (success, growth, systems running)
- **Text:** Zinc-50 (primary), Zinc-400 (secondary), Zinc-500 (metadata)
- **Borders:** Zinc-700/50

**Character:** Confident, distinctive, suggests stable systems. Less common than blue.

#### Option C: Warm Neutral + Orange (Bold)
- **Base:** Stone-900 to Stone-950 (slight warm tint)
- **Surface:** Stone-800/95
- **Accent:** Orange-500 #F97316 (energy, deployment, fire)
- **Text:** Stone-50 (primary), Stone-400 (secondary)
- **Borders:** Stone-700/50

**Character:** Bold, energetic, memorable. Stands out from blue-heavy portfolio landscape.

### Recommended Choice: **Option A (Technical Blue Refined)**
**Rationale:**
- Aligns with technical/cloud/AI engineering
- Familiar to target audience (recruiters scanning dev portfolios)
- Not oversaturated - feels professional
- Single accent color throughout
- Consistent cool gray family (Slate)

**Implementation:**
```javascript
// tailwind.config.js additions
colors: {
  accent: {
    DEFAULT: '#0EA5E9',
    50: '#f0f9ff',
    500: '#0EA5E9',
    600: '#0284c7',
  },
  surface: {
    DEFAULT: 'rgb(30 41 59 / 0.9)', // slate-800/90
    light: 'rgb(51 65 85 / 0.5)', // slate-700/50
  }
}
```

### Color Usage Rules
1. **Backgrounds:** Slate-900 (body), Slate-800/90 (cards/surfaces)
2. **Accent:** ONLY #0EA5E9 - used for:
   - Primary CTAs
   - Links
   - Active states
   - Key highlights
   - Icons/visual accents
3. **Text:**
   - Primary: Slate-50
   - Secondary: Slate-300
   - Metadata/labels: Slate-400
   - Muted: Slate-500
4. **Borders:** Slate-700/50 (subtle)
5. **Shadows:** Tinted with slate, not pure black

**NO MORE:**
- Gradient backgrounds (`from-primary to-secondary`)
- Multiple accent colors
- Random color changes per section
- Glassmorphism with backdrop-blur

---

## Layout Strategy

### Grid & Container System
- **Max width:** `max-w-7xl` (1280px) - consistent across site
- **Padding:** `px-4 md:px-8 lg:px-16`
- **Section spacing:** `py-16 md:py-24 lg:py-32` (generous, not uniform `py-20` everywhere)
- **Grid:** CSS Grid over flexbox math
  - Hero: asymmetric (60/40 or full-width with offset)
  - Projects: masonry or 2-column with featured (not 3-equal-columns)
  - Experience: timeline (not stacked cards)

### Asymmetry & Variance (DESIGN_VARIANCE: 6)
**Techniques to employ:**
- Hero: Left-aligned text with right-side visual OR full-width with asymmetric text block
- Section headers: Left-aligned, not centered
- Project cards: Variable sizes (featured projects larger)
- Mixed aspect ratios in grids
- Offset margins to break symmetry
- Content blocks that bleed slightly off-grid

**Avoid:**
- Everything centered
- Perfectly symmetrical layouts
- Equal-height cards forced by flexbox
- Uniform padding top/bottom

### Depth & Hierarchy
**NOT via glassmorphism. Instead:**
- Solid surfaces with subtle borders
- Layering via z-index (content over background elements)
- Typography scale (larger = more important)
- Whitespace (more space around important elements)
- Tinted shadows (slate-900/50, not black/20)

---

## Component Patterns

### Buttons & CTAs
**Primary CTA:**
- Solid accent background: `bg-accent-500 hover:bg-accent-600`
- Medium rounded: `rounded-lg` (not `rounded-full`)
- Padding: `px-6 py-3` (desktop), `px-5 py-2.5` (mobile)
- Font: `font-semibold text-base`
- Hover: subtle scale `hover:scale-[1.02]` + background shift
- Active: `active:scale-[0.98]`
- Focus: `focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2`

**Secondary CTA:**
- Outline: `border-2 border-slate-700 hover:border-accent-500`
- Same size/padding as primary
- `text-slate-200 hover:text-accent-500`

**Tertiary (text link):**
- `text-accent-500 hover:text-accent-400 underline-offset-4 hover:underline`

**NO MORE:**
- `rounded-full` pill buttons
- Gradient backgrounds on buttons
- Glassmorphic buttons

### Cards & Surfaces
**Project cards:**
- Solid background: `bg-slate-800/90`
- Border: `border border-slate-700/50`
- Rounded: `rounded-xl` (12px, consistent)
- Padding: `p-6 md:p-8`
- Hover: subtle border color shift, NO scale transforms on large cards
- Shadow: `shadow-lg shadow-slate-900/50` (tinted, not pure black)

**NOT:**
- `bg-white/5 backdrop-blur-sm` on everything
- Cards inside cards
- Pill-shaped containers
- Random radius mixing

### Badges & Pills (Tech Stack)
**Current:** pill-shaped, primary/10 background - GENERIC

**New Direction:**
- Small, square-rounded: `rounded-md` (6px)
- Solid muted background: `bg-slate-700/30`
- Border: `border border-slate-600/40`
- Text: `text-slate-300 text-sm`
- Hover (if interactive): `hover:border-accent-500 hover:text-accent-400`
- Padding: `px-2.5 py-1`

**NO MORE:**
- `rounded-full` pills
- `bg-primary/10` backgrounds
- Excessive use (only for tech stack, not everywhere)

### Icons
**Current:** React Icons (FaCode, FaRobot, etc.) - acceptable

**Usage:**
- Consistent size: `w-5 h-5` (inline), `w-6 h-6` (section), `w-8 h-8` (features)
- Color: `text-accent-500` or `text-slate-400`
- NO icon circles: remove `w-16 h-16 bg-primary/20 rounded-full`
- Icons as accents, not decoration

**Consider upgrading to:**
- Phosphor Icons (`@phosphor-icons/react`) - more distinctive
- Standardize stroke-width if switching

---

## Motion Strategy (MOTION_INTENSITY: 5)

### Animation Philosophy
**Purposeful, not decorative. Restrained, not excessive.**

**WHERE to animate:**
1. **Hero intro** - fade + subtle Y-translate on mount (once)
2. **Section reveals** - fade-in on scroll (subtle, fast)
3. **Button interactions** - scale on press, hover feedback
4. **State transitions** - form submit, navigation
5. **Project cards** - hover reveal of additional info

**WHERE NOT to animate:**
- Every single element
- Stagger cascades on every section
- Continuous loops
- Blur orb floating
- Unnecessary hover effects on text

### Animation Values
**Timing:**
- Fast: `duration: 0.2s` (button feedback)
- Standard: `duration: 0.4s` (fades, reveals)
- Slow: `duration: 0.6s` (hero intro)

**Easing:**
- Default: `ease-out` (decelerating)
- Interactive: `ease-in-out` (symmetrical)
- Bounce/spring: AVOID unless specific brand reason

**Motion Library:**
- Framer Motion (already installed)
- Use `motion.div` sparingly
- `initial`, `animate`, `whileHover`, `whileTap`
- `viewport={{ once: true }}` for scroll reveals
- `transition={{ duration: 0.4, ease: "easeOut" }}`

**Reduced Motion:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Responsive Strategy

### Breakpoints (Tailwind defaults)
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Mobile-First Approach
**Default styles = mobile**
```jsx
<div className="text-2xl md:text-4xl lg:text-6xl">
```

### Critical Fixes
1. **Hero height:** `min-h-[100dvh]` (not `h-screen`)
2. **Touch targets:** minimum 44×44px
3. **Font sizes:** readable on small screens (16px minimum for body)
4. **Navigation:** Mobile menu must be keyboard-accessible
5. **Forms:** Large inputs, clear labels, visible focus states

### Testing Viewports
- 375px (iPhone SE, small Android)
- 768px (iPad portrait)
- 1024px (iPad landscape, small laptop)
- 1440px (desktop)

---

## Accessibility Requirements

### Keyboard Navigation
- All interactive elements focusable
- Visible focus rings: `focus-visible:ring-2 focus-visible:ring-accent-500`
- Tab order logical
- Escape closes mobile menu
- Skip to main content link

### Color Contrast
- WCAG AA minimum (4.5:1 for text, 3:1 for UI)
- Test all text on slate backgrounds
- Ensure accent-500 has sufficient contrast

### Semantic HTML
- `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- Proper heading hierarchy (h1 → h2 → h3)
- `<button>` for actions, `<a>` for navigation
- Form labels with `htmlFor`
- Alt text for images

### ARIA
- `aria-label` for icon-only buttons
- `aria-current="page"` for active nav
- `role="alert"` for form errors
- `aria-live` for dynamic content

### Motion
- Respect `prefers-reduced-motion`
- Ensure no critical info conveyed only through motion

---

## Content Strategy Principles

### Evidence Over Claims
- Show actual projects, not generic feature cards
- Quantify impact with real metrics (30%, 20%, etc.)
- Highlight technical decisions and architecture
- Leadership indicators (team size, mentorship)

### Hierarchy for Evaluators
1. **Hero:** Who, what level, what specialty (3 seconds)
2. **Immediate credibility:** Top 2-3 achievements or specializations
3. **Selected projects:** Featured work with depth (case studies)
4. **Experience:** Timeline showing progression
5. **Technical depth:** Skills with context, not just lists
6. **Contact:** Clear path to next step

### Voice & Tone
- **Active voice:** "Led migration" not "Migration was led"
- **Specific:** "GPU-optimized inference" not "improved performance"
- **Confident:** "Built scalable RAG system" not "Helped build..."
- **No AI cliches:** Remove "seamlessly", "innovative", "cutting-edge"

---

## Implementation Priority

Following the audit's phased plan:

### Phase 1: Kill the AI Aesthetic (HIGHEST IMPACT)
1. Install Geist font
2. Remove all gradients (text, backgrounds, buttons)
3. Replace glassmorphism with solid surfaces
4. Standardize border-radius to `rounded-xl`
5. Implement single accent color (Technical Blue)
6. Simplify backgrounds (solid slate-900)

### Phase 2: Information Architecture
7. Redesign Hero (left-aligned, clear specialization)
8. Rebuild Projects (case study depth, visual hierarchy)
9. Redesign Experience (timeline, progression)
10. Replace About features with evidence
11. Contextualize Skills (tiered, not flat lists)

### Phase 3: Polish & Refinement
12. Typography hierarchy pass
13. Spacing & rhythm optimization
14. Accessibility audit & fixes
15. Performance optimization
16. Motion reduction & purposeful animation

---

## Success Criteria

**Visual Distinctiveness:**
- [ ] Doesn't look like generic AI portfolio
- [ ] Single accent color used consistently
- [ ] No gratuitous gradients or glassmorphism
- [ ] Typography has character (Geist, not Inter)
- [ ] Asymmetric layouts create visual interest

**Content Hierarchy:**
- [ ] Hero clearly communicates seniority + specialization
- [ ] Projects show case study depth
- [ ] Experience shows progression and leadership
- [ ] Skills have context, not just lists

**Technical Excellence:**
- [ ] WCAG AA compliant
- [ ] Lighthouse 90+ all metrics
- [ ] Responsive 375px–1920px
- [ ] Respects reduced-motion preference
- [ ] Fast perceived performance

**Credibility:**
- [ ] Technical recruiters can assess level in <30 seconds
- [ ] Engineering managers see architecture depth
- [ ] All content factual (no invented metrics)
- [ ] Clear evidence of senior-level work

---

**Design Direction Complete**
**Next:** Create DESIGN.md with detailed design system tokens
