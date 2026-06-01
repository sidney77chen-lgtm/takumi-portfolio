---
name: Takumi Nature & Craft
colors:
  surface: '#f8faf8'
  surface-dim: '#d8dad9'
  surface-bright: '#f8faf8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f2'
  surface-container: '#eceeec'
  surface-container-high: '#e6e9e7'
  surface-container-highest: '#e1e3e1'
  on-surface: '#191c1b'
  on-surface-variant: '#444843'
  inverse-surface: '#2e3130'
  inverse-on-surface: '#eff1ef'
  outline: '#747872'
  outline-variant: '#c4c8c1'
  surface-tint: '#556255'
  primary: '#182319'
  on-primary: '#ffffff'
  primary-container: '#2d392e'
  on-primary-container: '#95a394'
  inverse-primary: '#bccabb'
  secondary: '#79573f'
  on-secondary: '#ffffff'
  secondary-container: '#ffd1b3'
  on-secondary-container: '#7a5840'
  tertiary: '#122331'
  on-tertiary: '#ffffff'
  tertiary-container: '#283847'
  on-tertiary-container: '#91a1b4'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e6d6'
  primary-fixed-dim: '#bccabb'
  on-primary-fixed: '#131e14'
  on-primary-fixed-variant: '#3e4a3e'
  secondary-fixed: '#ffdcc6'
  secondary-fixed-dim: '#eabda0'
  on-secondary-fixed: '#2d1604'
  on-secondary-fixed-variant: '#5f402a'
  tertiary-fixed: '#d3e4f8'
  tertiary-fixed-dim: '#b8c8db'
  on-tertiary-fixed: '#0c1d2b'
  on-tertiary-fixed-variant: '#394858'
  background: '#f8faf8'
  on-background: '#191c1b'
  surface-variant: '#e1e3e1'
typography:
  headline-display:
    fontFamily: Libre Caslon Text
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Libre Caslon Text
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.03em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  margin-desktop: 64px
  margin-mobile: 24px
  section-gap: 128px
---

## Brand & Style
The design system is rooted in the philosophy of *Takumi*—a blend of ancient craftsmanship and the quiet resilience of the natural world. It targets design leadership who prioritize intentionality, depth, and the "slow design" movement. 

The aesthetic is a sophisticated fusion of **Minimalism** and **Tactile/Skeuomorphic** elements. It emphasizes large expanses of negative space (representing the "mist") punctuated by high-precision typography and organic textures. The goal is to evoke a sense of sanctuary—tranquil, professional, and deeply grounded. The interface should feel less like a software tool and more like a curated physical archive or a high-end architectural studio.

## Colors
The palette is derived from the light and shadow of a dense woodland ecosystem.

- **Primary (Moss):** A deep, saturated forest green (#2D392E) used for primary navigation, headings, and key structural elements. It represents depth and stability.
- **Secondary (Wood):** An earthy, warm brown (#6F4E37) reserved for high-intent actions, accents, and artisanal details.
- **Tertiary (Slate):** A cool, stony gray (#5D6D7E) used for secondary UI elements, iconography, and metadata.
- **Background (Mist):** A very soft, off-white green-tinted neutral (#F2F4F2). This is the "air" of the design system, providing a luminous, high-end backdrop that reduces eye strain and feels organic rather than sterile.

## Typography
The typographic hierarchy creates a dialogue between tradition and modernity. 

**Libre Caslon Text** provides the authoritative, "historical" voice for headlines. It should be typeset with generous leading and slight negative tracking in larger sizes to feel like premium editorial print.

**Hanken Grotesk** serves as the functional workhorse. Its open apertures and modern proportions provide a clear, spacious reading experience for body copy and data. 

Use **Label-MD** (uppercase) for category headers and navigation items to introduce a rhythmic, structured feel that contrasts with the fluid curves of the serif headings.

## Layout & Spacing
This design system utilizes a **Fluid Grid** with an emphasis on asymmetric, rhythmic compositions. 

- **Desktop:** A 12-column grid with wide 32px gutters. Use "Power Margins" (64px+) to create a gallery-like feel.
- **Mobile:** A 4-column grid with 24px margins.
- **Rhythm:** Instead of standard vertical stacking, use staggered placements for images and text blocks to mimic the organic distribution of stones in a stream. 
- **Negative Space:** Whitespace is treated as a core design element. Avoid crowding components; allow "Mist" (background color) to flow between sections using the `section-gap` unit (128px).

## Elevation & Depth
Depth is expressed through **Tonal Layers** and **Organic Textures** rather than traditional drop shadows.

1.  **Surfaces:** Use subtle shifts in background color (e.g., a slightly darker "Slate" tint) to distinguish containers.
2.  **Textures:** Apply low-opacity photographic overlays of leaf veins or stone grain (5-10% opacity) to large container backgrounds to give them a tactile, physical quality.
3.  **Shadows:** When necessary for functional depth (e.g., floating menus), use "Ambient Shadows"—extremely diffused, long-range shadows with a hint of the Primary Moss color to simulate a natural, soft-light environment.
4.  **Glassmorphism:** Use high-diffusion backdrop blurs (40px+) for navigation bars to simulate looking through mountain mist.

## Shapes
Shapes are **Soft** but disciplined. The design system avoids both the harshness of sharp corners and the playfulness of heavy rounding.

- **Base Radius:** 0.25rem (4px) for most UI elements like buttons and inputs.
- **Container Radius:** 0.75rem (12px) for cards and modals to suggest a hand-finished, softened edge.
- **Organic Accents:** Occasionally use non-geometric, hand-drawn SVG masks for image containers to reinforce the "Nature" aspect of the brand.

## Components
Consistent craft is maintained through the following component guidelines:

- **Buttons:** Primary buttons use the `Primary Moss` background with white text. Secondary buttons are `Secondary Wood` outlines. Hover states should involve a subtle shift in color saturation rather than a dramatic brightness change.
- **Input Fields:** Use "Ghost" styling—bottom borders only in `Tertiary Slate`, with labels floating in `Hanken Grotesk`. Focus states transition the border to `Primary Moss`.
- **Cards:** Cards should have no borders and minimal shadows. Distinction is achieved through the background texture and the use of the `headline-sm` typography for titles.
- **Chips/Labels:** Use the `Tertiary Slate` color at 10% opacity with a solid text color. Roundedness is always `rounded-lg` for chips.
- **Lists:** Use custom bullet points (a small "leaf" or "stone" icon) or simple horizontal dividers with a 0.5px weight to maintain a light, airy feel.
- **Navigation:** Top-level navigation uses `label-md` with generous 40px horizontal spacing.