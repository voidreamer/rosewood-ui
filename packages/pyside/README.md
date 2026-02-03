# 🌹 Rosewood UI for PySide6

A warm, cozy UI library for Qt applications — matching the web design system.

## Installation

```bash
pip install rosewood-ui[pyside]
```

## Quick Start

```python
from PySide6.QtWidgets import QApplication, QMainWindow, QVBoxLayout, QWidget
from rosewood import apply_theme, RwButton, RwCard, RwLabel, RwBadge

app = QApplication([])

# Apply Rosewood theme
apply_theme(app)

# Create window
window = QMainWindow()
central = QWidget()
window.setCentralWidget(central)
layout = QVBoxLayout(central)

# Use styled widgets
layout.addWidget(RwLabel("Hello Rosewood 🌹", style="accent"))
layout.addWidget(RwButton("Primary Button", variant="primary"))
layout.addWidget(RwButton("Ghost Button", variant="ghost"))
layout.addWidget(RwBadge("New", variant="accent"))

window.show()
app.exec()
```

## Theme

```python
from rosewood import Theme, ThemeMode

# Dark theme (default)
theme = Theme()
theme.apply(app)

# Light theme
theme = Theme(ThemeMode.LIGHT)
theme.apply(app)

# Toggle
theme.toggle()
theme.apply(app)
```

## Colors

Access design tokens directly:

```python
from rosewood.colors import DarkColors, LightColors, SPACING, RADIUS

# Use in custom styles
print(DarkColors.accent)      # #e8a8c0
print(DarkColors.bg)          # #1a1614
print(SPACING.md)             # 16
print(RADIUS.lg)              # 16
```

## Widgets

### RwButton

```python
RwButton("Default")
RwButton("Primary", variant="primary")
RwButton("Ghost", variant="ghost")
RwButton("Danger", variant="danger")
```

### RwCard

```python
card = RwCard()                          # Basic
card = RwCard(variant="elevated")        # With shadow
card = RwCard(variant="interactive")     # Clickable
card.clicked.connect(on_card_click)
```

### RwBadge

```python
RwBadge("Label")
RwBadge("New", variant="accent")
RwBadge("Success", variant="success")
RwBadge("Error", variant="danger")
RwBadge("Warning", variant="warning")
RwBadge("Info", variant="info")
```

### RwLabel

```python
RwLabel("Primary text")
RwLabel("Secondary", style="secondary")
RwLabel("Muted", style="muted")
RwLabel("Accent", style="accent")
```

## Custom QSS

Generate the stylesheet for manual application:

```python
from rosewood import Theme

theme = Theme()
qss = theme.generate_qss()

# Apply to any widget
widget.setStyleSheet(qss)
```

## Design Tokens

| Token | Dark | Light |
|-------|------|-------|
| `accent` | #e8a8c0 | #d4849c |
| `bg` | #1a1614 | #fefdfb |
| `surface` | #201c1a | #fff9f5 |
| `text` | #f5f0ec | #1d1d1f |
| `border` | #3a3230 | #e8e0dc |

See `rosewood/colors.py` for all tokens.

## License

MIT
