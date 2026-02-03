"""🌹 Rosewood UI for PySide6.

A warm, cozy UI library for Qt applications.
"""

__version__ = "0.1.0"

from rosewood.theme import Theme, apply_theme
from rosewood.colors import Colors, DarkColors, LightColors
from rosewood.widgets import (
    RwButton,
    RwCard,
    RwInput,
    RwLabel,
    RwBadge,
)

__all__ = [
    "Theme",
    "apply_theme",
    "Colors",
    "DarkColors",
    "LightColors",
    "RwButton",
    "RwCard",
    "RwInput",
    "RwLabel",
    "RwBadge",
]
