# DESIGN.md — ImageTools.site Design System

> Inspired by **Apple**, **Linear**, **Vercel**, **Raycast**, and **Arc Browser**.
> Every pixel, shadow, and transition is intentional.

---

## 🔤 Typography

| Token | Stack |
|-------|-------|
| **Primary** | `-apple-system, BlinkMacSystemFont, "Geist Sans", "Inter", "SF Pro Display", sans-serif` |
| **Mono** | `"Geist Mono", "JetBrains Mono", "SF Mono", "Fira Code", monospace` |

**Scale** (modular 1.25 ratio):
`xs(12) → sm(14) → base(16) → lg(18) → xl(20) → 2xl(24) → 3xl(30) → 4xl(36) → 5xl(48) → 6xl(60) → 7xl(72)`

- Headings: `font-semibold` or `font-bold`, tight tracking (`-0.02em`)
- Body: `font-normal`, relaxed line-height (`1.6`)
- Captions: `text-xs`, uppercase tracking (`0.05em`)

---

## 🌈 Color Palette

### Light Mode — *Pure Paper*

| Token | Hex | Usage |
|-------|-----|-------|
| `surface-primary` | `#FFFFFF` | Page background |
| `surface-secondary` | `#F5F5F7` | Section alt background |
| `surface-card` | `#FFFFFF` | Card backgrounds |
| `surface-glass` | `rgba(255,255,255,0.72)` | Glassmorphism panels |
| `border-primary` | `#E5E5E7` | 1px subtle borders |
| `border-secondary` | `#F0F0F2` | Inner dividers |
| `text-primary` | `#1D1D1F` | Headings, body |
| `text-secondary` | `#86868B` | Captions, meta |
| `text-tertiary` | `#AEAEB2` | Placeholders |
| `accent` | `#007AFF` | Primary CTA, links |
| `accent-hover` | `#0066D6` | Hover state |
| `accent-soft` | `#E8F2FF` | Subtle accent bg |

### Dark Mode — *Obsidian*

| Token | Hex | Usage |
|-------|-----|-------|
| `surface-primary` | `#0A0A0B` | Page background |
| `surface-secondary` | `#161618` | Section alt background |
| `surface-card` | `#1C1C1E` | Card backgrounds |
| `surface-glass` | `rgba(28,28,30,0.80)` | Glassmorphism panels |
| `border-primary` | `#2C2C2E` | 1px subtle borders |
| `border-secondary` | `#222224` | Inner dividers |
| `text-primary` | `#F5F5F7` | Headings, body |
| `text-secondary` | `#98989D` | Captions, meta |
| `text-tertiary` | `#6E6E73` | Placeholders |
| `accent` | `#0A84FF` | Primary CTA, links |
| `accent-hover` | `#40A0FF` | Hover state |
| `accent-soft` | `#1A2332` | Subtle accent bg |

### Neon Accent Spectrum

| Name | Hex (Light) | Hex (Dark) | Use |
|------|------------|------------|-----|
| Blue | `#007AFF` | `#0A84FF` | Primary |
| Purple | `#AF52DE` | `#BF5AF2` | Premium |
| Green | `#34C759` | `#30D158` | Success |
| Orange | `#FF9500` | `#FF9F0A` | Warning |
| Pink | `#FF375F` | `#FF453A` | Danger |

---

## ✨ Effects

### Glassmorphism
```
background: rgba(var(--glass-bg) / 0.72);
backdrop-filter: blur(24px) saturate(180%);
border: 1px solid rgba(var(--glass-border) / 0.12);
```

### Shadows — *Soft Ambient*
| Level | Usage |
|-------|-------|
| `shadow-xs` | Subtle lift (cards at rest) |
| `shadow-sm` | Hover lift |
| `shadow-md` | Dropdowns, tooltips |
| `shadow-lg` | Modals, sheets |
| `shadow-xl` | Full-screen overlays |

No harsh `0 0 0` shadows — only soft, layered ambient occlusion.

### Borders
- Default: `1px solid` with `border-primary` color
- Never use harsh black borders
- Ultra-subtle: `border-secondary` for inner dividers

---

## 🎯 Border Radius — *Arc / Raycast Style*

| Token | Value | Usage |
|-------|-------|-------|
| `radius-xs` | `6px` | Inline elements, badges |
| `radius-sm` | `8px` | Buttons, inputs |
| `radius-md` | `12px` | Cards, panels |
| `radius-lg` | `16px` | Modals, large cards |
| `radius-xl` | `20px` | Sheets, featured cards |
| `radius-2xl` | `24px` | Hero sections |

---

## 🎬 Micro-Animations

| Class | Effect |
|-------|--------|
| `.animate-soft` | `transition-all duration-200 ease-out` |
| `.animate-spring` | `transition-all duration-300 cubic-bezier(0.34, 1.56, 0.64, 1)` |
| `.hover-lift` | Scale 1.02 + shadow increase on hover |
| `.hover-glow` | Subtle accent border glow on hover |

**Principles:**
- All interactive elements get `animate-soft` by default
- No duration longer than 300ms (feels sluggish)
- Spring easing only for delight moments (not functional elements)
- `prefers-reduced-motion` respected globally

---

## 🖥️ Layout

- Max content width: `max-w-7xl` (1280px)
- Page padding: `px-4 sm:px-6 lg:px-8`
- Section spacing: `py-24` (96px) default, `py-32` (128px) for hero

---

*This is a living document — updated with each design decision.*
