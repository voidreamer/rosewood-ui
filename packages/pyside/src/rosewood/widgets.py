"""🌹 Rosewood styled widgets.

Pre-styled PySide6 widgets matching the design system.
"""

from __future__ import annotations

from typing import Optional

try:
    from PySide6.QtWidgets import (
        QPushButton,
        QLabel,
        QLineEdit,
        QFrame,
        QVBoxLayout,
        QWidget,
        QGraphicsDropShadowEffect,
    )
    from PySide6.QtCore import Qt, Signal, Property
    from PySide6.QtGui import QColor
    HAS_PYSIDE = True
except ImportError:
    HAS_PYSIDE = False
    QPushButton = object
    QLabel = object
    QLineEdit = object
    QFrame = object

from rosewood.colors import DarkColors, RADIUS, SPACING


class RwButton(QPushButton if HAS_PYSIDE else object):
    """Rosewood styled button.
    
    Variants:
        - default: Secondary style
        - primary: Accent background
        - ghost: Transparent
        - danger: Red/destructive
    
    Usage:
        btn = RwButton("Click me")
        btn = RwButton("Submit", variant="primary")
        btn = RwButton("Delete", variant="danger")
    """
    
    def __init__(
        self,
        text: str = "",
        variant: str = "default",
        parent: Optional[QWidget] = None,
    ) -> None:
        if not HAS_PYSIDE:
            raise ImportError("PySide6 is required")
        
        super().__init__(text, parent)
        self._variant = variant
        self._apply_variant()
    
    def _apply_variant(self) -> None:
        """Apply variant-specific styling via property."""
        if self._variant == "primary":
            self.setProperty("class", "primary")
        elif self._variant == "ghost":
            self.setProperty("class", "ghost")
        elif self._variant == "danger":
            self.setProperty("class", "danger")
        else:
            self.setProperty("class", "")
        
        # Force style refresh
        self.style().unpolish(self)
        self.style().polish(self)
    
    @property
    def variant(self) -> str:
        return self._variant
    
    @variant.setter
    def variant(self, value: str) -> None:
        self._variant = value
        self._apply_variant()


class RwLabel(QLabel if HAS_PYSIDE else object):
    """Rosewood styled label.
    
    Styles:
        - default: Primary text
        - secondary: Muted text
        - muted: Very muted
        - accent: Accent color
    
    Usage:
        label = RwLabel("Hello")
        label = RwLabel("Subtitle", style="secondary")
    """
    
    def __init__(
        self,
        text: str = "",
        style: str = "default",
        parent: Optional[QWidget] = None,
    ) -> None:
        if not HAS_PYSIDE:
            raise ImportError("PySide6 is required")
        
        super().__init__(text, parent)
        self._label_style = style
        self._apply_style()
    
    def _apply_style(self) -> None:
        if self._label_style == "secondary":
            self.setProperty("class", "secondary")
        elif self._label_style == "muted":
            self.setProperty("class", "muted")
        elif self._label_style == "accent":
            self.setProperty("class", "accent")
        else:
            self.setProperty("class", "")
        
        self.style().unpolish(self)
        self.style().polish(self)


class RwInput(QLineEdit if HAS_PYSIDE else object):
    """Rosewood styled input field.
    
    Usage:
        input = RwInput(placeholder="Enter name...")
        input = RwInput(placeholder="Search", icon="🔍")
    """
    
    def __init__(
        self,
        placeholder: str = "",
        parent: Optional[QWidget] = None,
    ) -> None:
        if not HAS_PYSIDE:
            raise ImportError("PySide6 is required")
        
        super().__init__(parent)
        self.setPlaceholderText(placeholder)
        self.setMinimumHeight(40)


class RwCard(QFrame if HAS_PYSIDE else object):
    """Rosewood card container.
    
    A styled container with optional elevation shadow.
    
    Variants:
        - default: Basic card
        - elevated: With drop shadow
        - interactive: Hover effects
    
    Usage:
        card = RwCard()
        layout = QVBoxLayout(card)
        layout.addWidget(QLabel("Card content"))
    """
    
    if HAS_PYSIDE:
        clicked = Signal()
    
    def __init__(
        self,
        variant: str = "default",
        parent: Optional[QWidget] = None,
    ) -> None:
        if not HAS_PYSIDE:
            raise ImportError("PySide6 is required")
        
        super().__init__(parent)
        self._variant = variant
        self._setup()
    
    def _setup(self) -> None:
        c = DarkColors
        r = RADIUS
        s = SPACING
        
        self.setFrameStyle(QFrame.StyledPanel)
        
        base_style = f"""
            RwCard {{
                background: {c.surface};
                border: 1px solid {c.border_light};
                border-radius: {r.lg}px;
                padding: {s.lg}px;
            }}
        """
        
        if self._variant == "elevated":
            # Add shadow effect
            shadow = QGraphicsDropShadowEffect()
            shadow.setBlurRadius(20)
            shadow.setOffset(0, 4)
            shadow.setColor(QColor(0, 0, 0, 100))
            self.setGraphicsEffect(shadow)
            
            base_style = f"""
                RwCard {{
                    background: {c.surface_elevated};
                    border: none;
                    border-radius: {r.lg}px;
                    padding: {s.lg}px;
                }}
            """
        
        elif self._variant == "interactive":
            self.setCursor(Qt.PointingHandCursor)
        
        self.setStyleSheet(base_style)
    
    def mousePressEvent(self, event) -> None:
        if self._variant == "interactive":
            self.clicked.emit()
        super().mousePressEvent(event)


class RwBadge(QLabel if HAS_PYSIDE else object):
    """Rosewood badge/tag component.
    
    Variants:
        - default: Neutral
        - accent: Primary accent
        - success: Green
        - danger: Red
        - warning: Yellow
        - info: Blue
    
    Usage:
        badge = RwBadge("New")
        badge = RwBadge("Error", variant="danger")
    """
    
    def __init__(
        self,
        text: str = "",
        variant: str = "default",
        parent: Optional[QWidget] = None,
    ) -> None:
        if not HAS_PYSIDE:
            raise ImportError("PySide6 is required")
        
        super().__init__(text, parent)
        self._variant = variant
        self._setup()
    
    def _setup(self) -> None:
        c = DarkColors
        r = RADIUS
        
        colors_map = {
            "default": (c.surface, c.text_secondary, c.border_light),
            "accent": (c.accent_bg, c.accent_text, c.accent_light),
            "success": (c.success_bg, c.success, "transparent"),
            "danger": (c.danger_bg, c.danger, "transparent"),
            "warning": (c.warning_bg, c.warning, "transparent"),
            "info": (c.info_bg, c.info, "transparent"),
        }
        
        bg, fg, border = colors_map.get(self._variant, colors_map["default"])
        
        self.setStyleSheet(f"""
            RwBadge {{
                background: {bg};
                color: {fg};
                border: 1px solid {border};
                border-radius: {r.full}px;
                padding: 4px 12px;
                font-size: 12px;
                font-weight: 600;
            }}
        """)
        
        self.setAlignment(Qt.AlignCenter)
