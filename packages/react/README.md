# @rosewood-ui/react

React components for [Rosewood UI](https://github.com/voidreamer/rosewood-ui) — warm, cozy, and customizable. 🌹

## Install

```bash
npm install @rosewood-ui/react @rosewood-ui/css
```

## Usage

```tsx
import '@rosewood-ui/css/dist/rosewood.css'
import { Button, Card, useTheme, ToastProvider } from '@rosewood-ui/react'

function App() {
  const { theme, toggle } = useTheme()

  return (
    <ToastProvider>
      <Card>
        <Button onClick={toggle}>
          Switch to {theme === 'dark' ? 'light' : 'dark'} mode
        </Button>
      </Card>
    </ToastProvider>
  )
}
```

## Components

| Component | Description |
|-----------|-------------|
| `Button` | Primary, secondary, ghost, danger variants + sizes |
| `Card` | Default, elevated, interactive, glass, accent |
| `Input` | Text input with sizes and error state |
| `TextArea` | Multi-line text input |
| `Select` | Native select dropdown |
| `Toggle` | Switch toggle |
| `Badge` | Status badges with variants |
| `Modal` | Dialog with keyboard support |
| `Tabs` | Tab navigation (underline + pill styles) |
| `Table` | Data table with column definitions |
| `Navbar` | Top navigation bar |
| `Sidebar` | Side navigation |
| `ThemeToggle` | Dark/light mode toggle button |
| `Typography` | H1-H6, Text, Label, Code |
| `Layout` | Container, Grid, Flex, Stack |
| `Toast` | Toast notifications with provider |

## Hooks

- `useTheme()` — Dark/light toggle, persists to localStorage
- `useModal()` — Simple open/close state helper
- `useToast()` — Show toast notifications (requires `ToastProvider`)

## License

MIT
