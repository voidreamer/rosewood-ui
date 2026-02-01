# 🌹 Rosewood UI

> A warm, cozy CSS component library. Like a fireplace in code form. 🔥

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![CSS Only](https://img.shields.io/badge/CSS-Only-e8a8c0)](https://github.com/voidreamer/rosewood-ui)

Rosewood UI is a CSS-only design system with a warm, pinkish-dark aesthetic. No JavaScript. No build tools required. Works with React, Vue, Svelte, or plain HTML.

Think **shadcn/ui** but CSS-only, warm, and cozy. Not corporate. Not cold.

<!-- ![Preview](preview.png) -->

---

## ✨ Features

- 🎨 **Warm color system** — no cold blues/grays, everything has warmth
- 🌙 **Dark + Light modes** — dark by default, light via `data-theme="light"`
- ⚡ **Zero JavaScript** — pure CSS, under 12KB minified
- 🧩 **30+ components** — buttons, cards, inputs, tables, modals, navigation...
- ♿ **Accessible** — focus states, contrast ratios, reduced-motion support
- 🔧 **CSS Variables** — override any token to make it yours
- 📱 **Responsive** — mobile-first, works on any screen

---

## 📦 Installation

### npm / pnpm / bun
```bash
npm install rosewood-ui
# or
pnpm add rosewood-ui
# or
bun add rosewood-ui
```

### CDN
```html
<link rel="stylesheet" href="https://unpkg.com/rosewood-ui/dist/rosewood.min.css">
```

### Manual
Download `dist/rosewood.css` and link it:
```html
<link rel="stylesheet" href="rosewood.css">
```

---

## 🚀 Usage

```html
<!DOCTYPE html>
<html data-theme="dark">
<head>
  <link rel="stylesheet" href="rosewood.css">
</head>
<body>
  <button class="rw-btn rw-btn--primary">Hello Rosewood</button>
</body>
</html>
```

### Light Mode
```html
<html data-theme="light">
```

---

## 🎨 Color Palette

### Dark Mode (default)
| Token | Color | Hex |
|-------|-------|-----|
| Background | ![](https://via.placeholder.com/16/1a1614/1a1614) | `#1a1614` |
| Surface | ![](https://via.placeholder.com/16/201c1a/201c1a) | `#201c1a` |
| Accent | ![](https://via.placeholder.com/16/e8a8c0/e8a8c0) | `#e8a8c0` |
| Secondary | ![](https://via.placeholder.com/16/b898d0/b898d0) | `#b898d0` |
| Text | ![](https://via.placeholder.com/16/f5f0ec/f5f0ec) | `#f5f0ec` |
| Success | ![](https://via.placeholder.com/16/88c8a8/88c8a8) | `#88c8a8` |
| Danger | ![](https://via.placeholder.com/16/e87070/e87070) | `#e87070` |

### Light Mode
| Token | Color | Hex |
|-------|-------|-----|
| Background | ![](https://via.placeholder.com/16/fefdfb/fefdfb) | `#fefdfb` |
| Surface | ![](https://via.placeholder.com/16/fff9f5/fff9f5) | `#fff9f5` |
| Accent | ![](https://via.placeholder.com/16/d4849c/d4849c) | `#d4849c` |

---

## 🧩 Components

All components use the `rw-` prefix (rosewood).

| Component | Classes |
|-----------|---------|
| **Buttons** | `rw-btn`, `rw-btn--primary`, `--secondary`, `--ghost`, `--danger`, `--sm/--lg` |
| **Cards** | `rw-card`, `rw-card--elevated`, `--interactive`, `--glass`, `--accent` |
| **Inputs** | `rw-input`, `rw-textarea`, `rw-select`, `rw-checkbox`, `rw-radio`, `rw-toggle` |
| **Badges** | `rw-badge`, `--success`, `--danger`, `--warning`, `--info`, `--accent` |
| **Navigation** | `rw-navbar`, `rw-sidebar`, `rw-tabs`, `rw-breadcrumbs`, `rw-bottom-nav` |
| **Tables** | `rw-table`, `--striped`, `--bordered`, `--compact`, `rw-table-wrapper` |
| **Modals** | `rw-overlay`, `rw-modal`, `rw-dialog` |
| **Typography** | `rw-h1`–`rw-h6`, `rw-gradient-text`, `rw-label`, `rw-blockquote` |
| **Layout** | `rw-container`, `rw-grid`, `rw-flex`, `rw-stack`, `rw-section` |
| **Animations** | `rw-animate-fade-up`, `rw-spinner`, `rw-waveform`, `rw-skeleton` |

---

## 🔧 Customization

Override CSS variables to create your own theme:

```css
:root {
  --rw-accent: #ff6b6b;
  --rw-accent-dark: #ee5a5a;
  --rw-bg: #0d1117;
  --rw-surface: #161b22;
  --rw-radius-md: 8px;
}
```

Every color, spacing, shadow, radius, and font is a CSS variable. See `src/css/variables.css` for the full list.

---

## 📁 Project Structure

```
rosewood-ui/
├── src/css/
│   ├── variables.css          # All CSS custom properties
│   ├── base.css               # Reset + defaults
│   ├── rosewood.css           # Entry point (imports all)
│   └── components/
│       ├── typography.css
│       ├── buttons.css
│       ├── cards.css
│       ├── inputs.css
│       ├── badges.css
│       ├── navigation.css
│       ├── modals.css
│       ├── tables.css
│       ├── layout.css
│       └── animations.css
├── dist/
│   ├── rosewood.css           # Full build
│   └── rosewood.min.css       # Minified
├── examples/
│   ├── components.html        # Component gallery
│   ├── dashboard.html         # Dashboard layout
│   ├── landing.html           # Landing page
│   └── forms.html             # Form showcase
└── package.json
```

---

## 🏗️ Development

```bash
# Build
node build.js

# Watch mode
node build.js --watch
```

---

## 🌿 Design Principles

1. **Apple-like** — Generous whitespace, smooth animations, elegant typography
2. **Warm** — No cold blues or grays. Everything has warmth baked in
3. **Readable** — Components are self-documenting. Each CSS file has clear comments
4. **Accessible** — Proper contrast ratios, focus states, `prefers-reduced-motion`
5. **Simple** — No build tools required. Just CSS. Just works

---

## 📄 License

MIT — use it for anything. Commercial, personal, whatever makes you happy.

---

<p align="center">
  Made with warmth by <a href="https://github.com/voidreamer">voidreamer</a> 🌹
</p>
