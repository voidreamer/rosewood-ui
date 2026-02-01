# 🌹 Rosewood UI

A warm, cozy UI library. Like a fireplace in code form. 🔥

Dark-first design system with CSS components and React wrappers.

## Packages

| Package | Description |
|---------|-------------|
| [`@rosewood-ui/css`](./packages/css) | Pure CSS component library |
| [`@rosewood-ui/react`](./packages/react) | React + TypeScript components |

## Quick Start

### CSS Only

```html
<link rel="stylesheet" href="https://unpkg.com/@rosewood-ui/css/dist/rosewood.min.css">
<button class="rw-btn rw-btn--primary">Click me</button>
```

### React

```bash
npm install @rosewood-ui/react @rosewood-ui/css
```

```tsx
import '@rosewood-ui/css/dist/rosewood.css'
import { Button, Card, useTheme, ToastProvider } from '@rosewood-ui/react'

function App() {
  const { theme, toggle } = useTheme()

  return (
    <ToastProvider>
      <Card variant="elevated">
        <h2>Hello Rosewood 🌹</h2>
        <Button onClick={toggle}>
          Switch to {theme === 'dark' ? 'light' : 'dark'} mode
        </Button>
      </Card>
    </ToastProvider>
  )
}
```

## Development

```bash
# Install dependencies
npm install

# Build everything
npm run build

# Run demo app
npm run dev:demo
```

## Theme

Dark mode is default. Add `data-theme="light"` to `<html>` for light mode, or use the `useTheme()` hook in React.

Override CSS custom properties (all prefixed `--rw-`) to customize colors, spacing, and typography.

## Examples

Open the HTML files in `examples/` to see CSS-only usage:
- `components.html` — All components
- `forms.html` — Form layouts
- `dashboard.html` — Dashboard layout
- `landing.html` — Landing page

## License

MIT — Fork it, customize it, make it yours.
