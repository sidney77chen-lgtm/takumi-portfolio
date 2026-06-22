# inten·t Portfolio — Persistent Project Context

> Read this file at the start of every session before touching any code.
> All decisions must be consistent with the specs below.

---

## Project Overview

**Brand name:** inten·t  
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
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Noto+Sans+TC:wght@300;400;500;600&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
```

**Tailwind fontFamily mapping:**
```js
fontFamily: {
  playfair: ["Playfair Display", "serif"],        // 標題、引言、大字
  dm:       ["DM Sans", "sans-serif"],            // UI 文字、標籤、導覽
  "noto-tc": ["Noto Sans TC", "PingFang TC", "sans-serif"], // 中文內文
}
```

> ⚠️ 字型系統已於 2026-06 切換：Libre Caslon Text → Playfair Display，Hanken Grotesk → DM Sans，中文改用 Noto Sans TC。

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
- Logo: inten·t (left), `logo-intent text-primary`
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

## Known Issues

- [x] ~~`methodology.html` 重複 Google Fonts link~~ — 已修復
- [x] ~~`selected_works.html` 缺少 PingFang TC fallback~~ — 已修復
- [x] ~~Footer copyright year 2024~~ — 已更新為 2025
- [x] ~~OG tags 缺失~~ — 已補齊（含正確的 /takumi-portfolio/ 路徑）
- [x] LinkedIn 連結 — 已移除（不公開）
- [x] Dribbble 連結 — 已移除
- [ ] `about.html` 插畫佔位符 — 等待真實圖片（放入 assets/ 資料夾）
- [ ] 各 case study 頁面圖片仍為佔位符 — 等待真實截圖素材
- [ ] 尚未在真實手機瀏覽器測試 RWD

---

## Deployment

- **Platform:** GitHub Pages ✅ 已上線
- **Live URL:** https://sidney77chen-lgtm.github.io/takumi-portfolio/
- **Repo:** https://github.com/sidney77chen-lgtm/takumi-portfolio
- **Branch:** master → root (/)
- `token_server.py` 是本地開發工具，已加入 `.gitignore`，不會部署

---

## 工作流規範（Workflow Rules）

### 每次 Session 開始前
1. 必須先 `Read CLAUDE.md` — 不得跳過
2. 必須先 `Read` 目標檔案 — 不得憑記憶修改
3. 確認 Page Completion Status 和 Known Issues 後再動手

### 修改規則
- **一次只改一個檔案** — 不得同時修改多個頁面
- **禁止硬編碼顏色數值** — 一律使用 `token-override.css` 的 CSS 變數（如 `bg-primary`、`text-on-surface-variant`）
- **禁止修改 Tailwind config 區塊** — 除非明確指示
- **禁止重寫 nav 和 footer** — 只能從 `index.html` 複製，不得重新生成
- **所有間距必須是 8px 的倍數** — 不得使用任意數值（如 `p-[13px]`）
- **禁止新增任何 npm 套件或 build 工具** — 這是純靜態專案

### 輸出規則
- 輸出完整檔案內容，不得只輸出片段
- 不需要解釋，直接輸出檔案
- 不得用 markdown code fence 包住輸出（直接輸出 HTML）

### 部署規則
每次修改完畢後，在終端機執行：
```bash
cd ~/Desktop/vibecoding/profolio
git add .
git commit -m "說明這次改了什麼"
git push
```
推送後約 1–2 分鐘網站自動更新。

### 完成一個任務後
在 CLAUDE.md 更新以下內容：
- 把已解決的 Known Issues 標記為 ✅
- 更新 Page Completion Status
- 新增任何發現的新問題到 Known Issues

---

## How to Start a New Session

複製以下模板，填入空格後貼進 Claude Code：

```
Read CLAUDE.md. Read [TARGET_FILE].

Task: [一句話描述任務]
Only modify: [要改的區塊]
Do not touch: nav, footer, Tailwind config, token-override.css link

Output: updated [TARGET_FILE] only. No explanation.
```

**範例：**
```
Read CLAUDE.md. Read about.html.

Task: Replace the illustration placeholder div with an <img> tag pointing to assets/illustration-01.jpg
Only modify: the illustration section
Do not touch: nav, footer, Tailwind config, token-override.css link

Output: updated about.html only. No explanation.
```

---

## Design Philosophy (reference when writing copy or making decisions)

The inten·t aesthetic evokes a high-end architectural studio or curated physical archive.  
Every decision should ask: *does this feel like it was made slowly, with full intention?*  
Whitespace is a material, not an absence. Typography carries the weight that decoration must not.
