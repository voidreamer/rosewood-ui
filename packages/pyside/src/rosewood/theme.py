"""🌹 Rosewood theme and QSS generation.

Generates Qt stylesheets matching the CSS design system.
"""

from __future__ import annotations

from enum import Enum
from typing import TYPE_CHECKING

from rosewood.colors import (
    Colors,
    DarkColors,
    LightColors,
    RADIUS,
    SPACING,
    TYPOGRAPHY,
)

if TYPE_CHECKING:
    from PySide6.QtWidgets import QApplication, QWidget


class ThemeMode(Enum):
    DARK = "dark"
    LIGHT = "light"


class Theme:
    """Rosewood theme manager.
    
    Usage:
        theme = Theme()  # Dark by default
        theme.apply(app)
        
        # Or light mode
        theme = Theme(ThemeMode.LIGHT)
        theme.apply(app)
    """
    
    def __init__(self, mode: ThemeMode = ThemeMode.DARK) -> None:
        self.mode = mode
        self._colors = DarkColors if mode == ThemeMode.DARK else LightColors
    
    @property
    def colors(self) -> Colors:
        return self._colors
    
    def toggle(self) -> None:
        """Toggle between dark and light mode."""
        self.mode = ThemeMode.LIGHT if self.mode == ThemeMode.DARK else ThemeMode.DARK
        self._colors = DarkColors if self.mode == ThemeMode.DARK else LightColors
    
    def generate_qss(self) -> str:
        """Generate complete Qt stylesheet."""
        c = self._colors
        r = RADIUS
        s = SPACING
        t = TYPOGRAPHY
        
        return f'''
/* ==========================================================================
   🌹 ROSEWOOD UI — Qt Stylesheet
   Generated from @rosewood-ui design tokens
   ========================================================================== */

/* ── Global ── */
QWidget {{
    font-family: {t.font_family};
    font-size: {t.size_base}px;
    color: {c.text};
    background: transparent;
}}

QMainWindow, QDialog {{
    background: {c.bg};
}}

/* ── Labels ── */
QLabel {{
    color: {c.text};
    background: transparent;
    padding: 0;
}}

QLabel[class="muted"] {{
    color: {c.text_muted};
}}

QLabel[class="secondary"] {{
    color: {c.text_secondary};
}}

QLabel[class="accent"] {{
    color: {c.accent};
}}

/* ── Buttons ── */
QPushButton {{
    background: {c.surface};
    color: {c.text};
    border: 1px solid {c.border};
    border-radius: {r.md}px;
    padding: {s.sm}px {s.lg}px;
    font-weight: 600;
    font-size: {t.size_base}px;
    min-height: 36px;
}}

QPushButton:hover {{
    background: {c.accent_bg};
    border-color: {c.accent};
    color: {c.accent_text};
}}

QPushButton:pressed {{
    background: {c.accent_light};
}}

QPushButton:disabled {{
    opacity: 0.4;
    color: {c.text_muted};
}}

QPushButton[class="primary"] {{
    background: {c.accent};
    color: #000000;
    border: none;
}}

QPushButton[class="primary"]:hover {{
    background: {c.accent_dark};
}}

QPushButton[class="danger"] {{
    background: {c.danger};
    color: #ffffff;
    border: none;
}}

QPushButton[class="danger"]:hover {{
    background: {c.danger};
    filter: brightness(1.1);
}}

QPushButton[class="ghost"] {{
    background: transparent;
    color: {c.text_secondary};
    border: none;
}}

QPushButton[class="ghost"]:hover {{
    background: {c.surface_hover};
    color: {c.text};
}}

/* ── Inputs ── */
QLineEdit, QTextEdit, QPlainTextEdit {{
    background: {c.bg};
    color: {c.text};
    border: 1.5px solid {c.border};
    border-radius: {r.md}px;
    padding: {s.sm}px {s.md}px;
    font-size: {t.size_base}px;
    selection-background-color: {c.accent};
    selection-color: #000000;
}}

QLineEdit:focus, QTextEdit:focus, QPlainTextEdit:focus {{
    border-color: {c.accent};
}}

QLineEdit::placeholder {{
    color: {c.text_muted};
}}

/* ── ComboBox ── */
QComboBox {{
    background: {c.bg};
    color: {c.text};
    border: 1.5px solid {c.border};
    border-radius: {r.md}px;
    padding: {s.sm}px {s.md}px;
    padding-right: 32px;
    min-height: 36px;
}}

QComboBox:focus {{
    border-color: {c.accent};
}}

QComboBox::drop-down {{
    border: none;
    width: 24px;
}}

QComboBox::down-arrow {{
    image: none;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid {c.text_muted};
}}

QComboBox QAbstractItemView {{
    background: {c.surface};
    color: {c.text};
    border: 1px solid {c.border};
    border-radius: {r.sm}px;
    selection-background-color: {c.accent_bg};
    selection-color: {c.accent_text};
}}

/* ── Checkbox & Radio ── */
QCheckBox, QRadioButton {{
    color: {c.text};
    spacing: {s.sm}px;
}}

QCheckBox::indicator {{
    width: 20px;
    height: 20px;
    border: 1.5px solid {c.border};
    border-radius: 6px;
    background: {c.bg};
}}

QCheckBox::indicator:checked {{
    background: {c.accent};
    border-color: {c.accent};
}}

QRadioButton::indicator {{
    width: 20px;
    height: 20px;
    border: 1.5px solid {c.border};
    border-radius: 10px;
    background: {c.bg};
}}

QRadioButton::indicator:checked {{
    background: {c.accent};
    border-color: {c.accent};
}}

/* ── Scrollbars ── */
QScrollBar:vertical {{
    background: transparent;
    width: 8px;
    margin: 0;
}}

QScrollBar::handle:vertical {{
    background: {c.border};
    border-radius: 4px;
    min-height: 40px;
}}

QScrollBar::handle:vertical:hover {{
    background: {c.text_muted};
}}

QScrollBar::add-line:vertical, QScrollBar::sub-line:vertical {{
    height: 0;
}}

QScrollBar:horizontal {{
    background: transparent;
    height: 8px;
    margin: 0;
}}

QScrollBar::handle:horizontal {{
    background: {c.border};
    border-radius: 4px;
    min-width: 40px;
}}

QScrollBar::handle:horizontal:hover {{
    background: {c.text_muted};
}}

QScrollBar::add-line:horizontal, QScrollBar::sub-line:horizontal {{
    width: 0;
}}

/* ── TreeView & ListView ── */
QTreeView, QListView, QTableView {{
    background: {c.surface};
    color: {c.text};
    border: 1px solid {c.border_light};
    border-radius: {r.md}px;
    outline: none;
}}

QTreeView::item, QListView::item {{
    padding: {s.sm}px;
    border-radius: {r.sm}px;
}}

QTreeView::item:hover, QListView::item:hover {{
    background: {c.surface_hover};
}}

QTreeView::item:selected, QListView::item:selected {{
    background: {c.accent_bg};
    color: {c.accent_text};
}}

QHeaderView::section {{
    background: {c.surface};
    color: {c.text_muted};
    border: none;
    border-bottom: 1px solid {c.border};
    padding: {s.sm}px {s.md}px;
    font-weight: 600;
    font-size: {t.size_sm}px;
    text-transform: uppercase;
}}

/* ── TabWidget ── */
QTabWidget::pane {{
    border: 1px solid {c.border};
    border-radius: {r.md}px;
    background: {c.surface};
}}

QTabBar::tab {{
    background: transparent;
    color: {c.text_muted};
    padding: {s.sm}px {s.lg}px;
    border-bottom: 2px solid transparent;
    font-weight: 500;
}}

QTabBar::tab:hover {{
    color: {c.text};
}}

QTabBar::tab:selected {{
    color: {c.accent};
    border-bottom-color: {c.accent};
}}

/* ── GroupBox ── */
QGroupBox {{
    background: {c.surface};
    border: 1px solid {c.border_light};
    border-radius: {r.lg}px;
    padding: {s.lg}px;
    padding-top: {s.xl}px;
    margin-top: {s.md}px;
}}

QGroupBox::title {{
    color: {c.text};
    font-weight: 700;
    subcontrol-origin: margin;
    subcontrol-position: top left;
    padding: 0 {s.sm}px;
    left: {s.md}px;
}}

/* ── ProgressBar ── */
QProgressBar {{
    background: {c.surface};
    border: none;
    border-radius: {r.sm}px;
    height: 8px;
    text-align: center;
}}

QProgressBar::chunk {{
    background: {c.accent};
    border-radius: {r.sm}px;
}}

/* ── Slider ── */
QSlider::groove:horizontal {{
    background: {c.border};
    height: 4px;
    border-radius: 2px;
}}

QSlider::handle:horizontal {{
    background: {c.accent};
    width: 16px;
    height: 16px;
    margin: -6px 0;
    border-radius: 8px;
}}

QSlider::handle:horizontal:hover {{
    background: {c.accent_dark};
}}

/* ── SpinBox ── */
QSpinBox, QDoubleSpinBox {{
    background: {c.bg};
    color: {c.text};
    border: 1.5px solid {c.border};
    border-radius: {r.md}px;
    padding: {s.sm}px;
}}

QSpinBox:focus, QDoubleSpinBox:focus {{
    border-color: {c.accent};
}}

/* ── ToolTip ── */
QToolTip {{
    background: {c.surface_elevated};
    color: {c.text};
    border: 1px solid {c.border};
    border-radius: {r.sm}px;
    padding: {s.sm}px {s.md}px;
}}

/* ── Menu ── */
QMenu {{
    background: {c.surface};
    border: 1px solid {c.border};
    border-radius: {r.md}px;
    padding: {s.xs}px;
}}

QMenu::item {{
    padding: {s.sm}px {s.lg}px;
    border-radius: {r.sm}px;
}}

QMenu::item:selected {{
    background: {c.accent_bg};
    color: {c.accent_text};
}}

QMenu::separator {{
    height: 1px;
    background: {c.border_light};
    margin: {s.xs}px {s.sm}px;
}}

/* ── StatusBar ── */
QStatusBar {{
    background: {c.surface};
    color: {c.text_secondary};
    border-top: 1px solid {c.border_light};
}}
'''
    
    def apply(self, widget: QWidget | QApplication) -> None:
        """Apply theme to a widget or application."""
        widget.setStyleSheet(self.generate_qss())


def apply_theme(widget: QWidget | QApplication, mode: ThemeMode = ThemeMode.DARK) -> Theme:
    """Convenience function to apply theme.
    
    Usage:
        from rosewood import apply_theme
        apply_theme(app)
    """
    theme = Theme(mode)
    theme.apply(widget)
    return theme
