# TAKUMI Portfolio — Persistent Project Context

> Read this file at the start of every session before touching any code.
> All decisions must be consistent with the specs below.

---

## Project Overview

**Brand name:** TAKUMI（職人）  
**Owner:** Sidney Chen — Senior UI/UX Designer  
**Contact:** sidney77chen@gmail.com  
**Goal:** Live portfolio targeting Design Directors / HR Recruiters at established orgs (50+ employees)  
**Aesthetic:** Takumi Nature & Craft — Minimalism × Tactile. Sanctuary-like, tranquil, high-end architectural studio feel.

---

## File Structure

```
/
├── index.html              ← Homepage (Hero + Works preview + CTA + Footer)
├── about.html              ← About: "Return to Craft" narrative + illustration
├── methodology.html        ← Design methodology: Discovery → Alignment → Execution
├── selected_works.html     ← CMS Architecture case study (systems, sanitized)
├── brand_identity_1.html   ← Brand Identity case study 1: 美學直覺
├── brand_identity_2.html   ← Brand Identity case study 2: 精煉與演進
├── design-system.html      ← Internal design token manager (not public-facing)
├── token-override.css      ← Auto-generated CSS variables (edit via design-system.html)
├── token_server.py         ← Local Python server for token hot-reload (port 8766)
└── DESIGN.md               ← Full design system specification (source of truth)
```

---

## Tech Stack (non-negotiable)

- **HTML:** Semantic, multi-page (not SPA)
- **CSS:** Tailwind CDN `https://cdn.tailwindcss.com?plugins=forms,container-queries`
- **Icons:** Material Symbols Outlined (wght 300, FILL 0)
- **JS:** Vanilla only — no Alpine.js, no frameworks
- **Fonts:** Google Fonts (see below)
- **No build tools. No bundler. No npm.**

---

## Typography

| Role | Font | Weights |
|------|------|---------|
| Headings (EN) | Libre Caslon Text | 400, 700, italic 400 |
| Body / UI (EN + ZH fallback) | Hanken Grotesk | 400, 500, 600 |
| Chinese fallback | PingFang TC | system |

**Google Fonts link (use this exact string):**
```html
<link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600&family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
```

**Tailwind fontFamily mapping:**
```js
fontFamily: {
  display:           ["Libre Caslon Text"],
  headline:          ["Libre Caslon Text"],
  "headline-display": ["Libre Caslon Text", "PingFang TC", "serif"],
  "headline-lg":     ["Libre Caslon Text", "PingFang TC", "serif"],
  "headline-md":     ["Libre Caslon Text", "PingFang TC", "serif"],
  "headline-sm":     ["Libre Caslon Text", "PingFang TC", "serif"],
  body:              ["Hanken Grotesk"],
  "body-lg":         ["Hanken Grotesk", "PingFang TC", "sans-serif"],
  "body-md":         ["Hanken Grotesk", "PingFang TC", "sans-serif"],
  label:             ["Hanken Grotesk"],
  "label-md":        ["Hanken Grotesk", "PingFang TC", "sans-serif"],
  "label-sm":        ["Hanken Grotesk", "PingFang TC", "sans-serif"],
}
```

---

## Color Tokens (authoritative — sourced from DESIGN.md)

**Key colors for daily use:**

| Token | Hex | Role |
|-------|-----|------|
| `primary` | `#182319` | Deep moss green — headings, logo, primary buttons |
| `primary-container` | `#2d392e` | Slightly lighter moss — button hover, card surfaces |
| `secondary` | `#79573f` | Warm wood brown — accents, labels, links |
| `background` | `#f8faf8` | Mist off-white — page background |
| `surface` | `#f8faf8` | Same as background |
| `surface-container` | `#eceeec` | Subtle card surface |
| `surface-container-highest` | `#e1e3e1` | CTA block background |
| `on-surface` | `#191c1b` | Primary body text |
| `on-surface-variant` | `#444843` | Secondary / muted text |
| `outline-variant` | `#c4c8c1` | Dividers, subtle borders |
| `on-primary` | `#ffffff` | Text on dark green buttons |
| `primary-fixed` | `#d8e6d6` | Selection highlight background |

All tokens are available as CSS variables via `token-override.css`.  
Usage pattern: `bg-primary`, `text-on-surface-variant`, `border-outline-variant`

---

## Spacing & Layout

- **Base unit:** 8px
- **Container max:** 1280px (`max-w-container-max`)
- **Desktop margin:** 64px (`px-margin-desktop`)
- **Mobile margin:** 24px (`px-margin-mobile`)
- **Section gap:** 128px (`pb-section-gap`)
- **Gutter:** 32px

All padding/margin must be multiples of 8px. No arbitrary values.

---

## Border Radius

| Token | Value | Use |
|-------|-------|-----|
| `DEFAULT` | 0.125rem (2px) | Inputs, small elements |
| `rounded-lg` | 0.25rem (4px) | Buttons, chips |
| `rounded-xl` | 0.5rem (8px) | Cards |
| `rounded-full` | 0.75rem (12px) | Pills, nav CTAs |

---

## Animation & Interaction

- **Easing:** `cubic-bezier(0.2, 0.8, 0.2, 1)` — fast out, slow settle
- **Duration:** 200ms for UI responses, 800ms for scroll reveals
- **Scroll reveal class:** `.reveal-on-scroll` (or `.reveal-up`) — opacity 0 + translateY(20px) → active state
- **Scroll observer:** IntersectionObserver, threshold 0.1
- **Nav shrink:** py-8 → py-4 on scrollY > 50

---

## Navigation (shared across all pages)

- Fixed top, `backdrop-blur-xl`, `bg-surface/80`
- Logo: TAKUMI (left), `font-headline-sm tracking-widest text-primary`
- Desktop links: 精選作品 (dropdown) / 設計方法論 / 關於我 / 聯絡諮詢 (CTA button)
- Works dropdown: 3 items → selected_works.html / brand_identity_1.html / brand_identity_2.html
- Mobile: hamburger → full-width drawer menu

**Every HTML page must include the identical nav block.**  
Copy from `index.html` nav section — do not rewrite from scratch.

---

## Page Completion Status

| Page | Status | Notes |
|------|--------|-------|
| `index.html` | ✅ Complete | Hero, works preview, CTA, footer |
| `about.html` | ✅ Complete | Needs illustration image swap |
| `methodology.html` | ✅ Complete | Discovery → Alignment → Execution |
| `selected_works.html` | ✅ Complete | CMS case study (sanitized) |
| `brand_identity_1.html` | ✅ Complete | 美學直覺 |
| `brand_identity_2.html` | ✅ Complete | 精煉與演進 |
| `design-system.html` | ✅ Complete | Internal tool only |

---

## Known Issues to Fix

- [ ] `methodology.html` has **duplicate Google Fonts `<link>` tags** — remove redundant ones
- [ ] `selected_works.html` missing `PingFang TC` fallback in fontFamily config  
- [ ] Nav Tailwind config block inconsistent across pages (some missing PingFang TC fallback)
- [ ] LinkedIn and Dribbble links in footer are `href="#"` — need real URLs
- [ ] Footer copyright year is `2024` — update to `2025`
- [ ] Illustration placeholder in `about.html` needs real image
- [ ] No `<meta name="description">` or OG tags on inner pages

---

## Deployment Target

- **Platform:** GitHub Pages or Vercel (static, no server)
- **Method:** Push entire folder to GitHub repo → enable Pages from root
- `token_server.py` is local development only — do NOT deploy

---

## How to Start a New Session

Paste this at the start of every Claude Code session:

```
Read CLAUDE.md. Then read [specific file you're working on].
Task: [what you want to do].
Output the updated file only. No explanation.
```

---

## Design Philosophy (reference when writing copy or making decisions)

The TAKUMI aesthetic evokes a high-end architectural studio or curated physical archive.  
Every decision should ask: *does this feel like it was made slowly, with full intention?*  
Whitespace is a material, not an absence. Typography carries the weight that decoration must not.
