"""🌹 Rosewood color tokens.

All colors match the CSS custom properties from @rosewood-ui/css.
"""

from dataclasses import dataclass


@dataclass(frozen=True)
class Colors:
    """Base color scheme interface."""
    
    # Primary accent
    accent: str
    accent_dark: str
    accent_light: str
    accent_bg: str
    accent_text: str
    
    # Secondary
    secondary: str
    secondary_dark: str
    secondary_light: str
    secondary_bg: str
    secondary_text: str
    
    # Backgrounds
    bg: str
    surface: str
    surface_hover: str
    surface_elevated: str
    
    # Borders
    border: str
    border_light: str
    
    # Text
    text: str
    text_secondary: str
    text_muted: str
    
    # Semantic
    success: str
    success_bg: str
    danger: str
    danger_bg: str
    warning: str
    warning_bg: str
    info: str
    info_bg: str
    
    # Glass
    glass_bg: str
    glass_border: str


# Dark theme (default)
DarkColors = Colors(
    # Primary accent - warm pink
    accent="#e8a8c0",
    accent_dark="#c0708a",
    accent_light="rgba(232, 168, 192, 0.15)",
    accent_bg="rgba(232, 168, 192, 0.08)",
    accent_text="#e8a8c0",
    
    # Secondary - lavender
    secondary="#b898d0",
    secondary_dark="#9878b8",
    secondary_light="rgba(184, 152, 208, 0.15)",
    secondary_bg="rgba(184, 152, 208, 0.08)",
    secondary_text="#b898d0",
    
    # Backgrounds - warm dark browns
    bg="#1a1614",
    surface="#201c1a",
    surface_hover="#352f2b",
    surface_elevated="#2a2420",
    
    # Borders
    border="#3a3230",
    border_light="#2a2420",
    
    # Text - warm whites
    text="#f5f0ec",
    text_secondary="#a89e98",
    text_muted="#6e6460",
    
    # Semantic
    success="#88c8a8",
    success_bg="rgba(136, 200, 168, 0.1)",
    danger="#e87070",
    danger_bg="rgba(232, 112, 112, 0.1)",
    warning="#e8c070",
    warning_bg="rgba(232, 192, 112, 0.1)",
    info="#70b8e8",
    info_bg="rgba(112, 184, 232, 0.1)",
    
    # Glass
    glass_bg="rgba(32, 28, 26, 0.72)",
    glass_border="rgba(232, 168, 192, 0.08)",
)


# Light theme
LightColors = Colors(
    # Primary accent - deeper pink for light bg
    accent="#d4849c",
    accent_dark="#c0708a",
    accent_light="#fce4ec",
    accent_bg="#fce4ec",
    accent_text="#8a3a52",
    
    # Secondary
    secondary="#9878b8",
    secondary_dark="#7a5a9a",
    secondary_light="#d8c8e8",
    secondary_bg="#f3e5f5",
    secondary_text="#5a3878",
    
    # Backgrounds - warm cream
    bg="#fefdfb",
    surface="#fff9f5",
    surface_hover="#f0ebe5",
    surface_elevated="#ffffff",
    
    # Borders
    border="#e8e0dc",
    border_light="#f0e8e4",
    
    # Text
    text="#1d1d1f",
    text_secondary="#6e6e73",
    text_muted="#a1a1a6",
    
    # Semantic
    success="#2ea860",
    success_bg="rgba(46, 168, 96, 0.1)",
    danger="#dc3545",
    danger_bg="rgba(220, 53, 69, 0.1)",
    warning="#d4a020",
    warning_bg="rgba(212, 160, 32, 0.1)",
    info="#2080c0",
    info_bg="rgba(32, 128, 192, 0.1)",
    
    # Glass
    glass_bg="rgba(255, 255, 255, 0.72)",
    glass_border="rgba(0, 0, 0, 0.06)",
)


# Spacing tokens (in pixels)
@dataclass(frozen=True)
class Spacing:
    xs: int = 4
    sm: int = 8
    md: int = 16
    lg: int = 24
    xl: int = 32
    xxl: int = 48
    xxxl: int = 64


# Border radius tokens
@dataclass(frozen=True)
class Radius:
    sm: int = 8
    md: int = 12
    lg: int = 16
    xl: int = 24
    full: int = 9999


# Typography
@dataclass(frozen=True)
class Typography:
    font_family: str = "Inter, -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', sans-serif"
    font_mono: str = "'SF Mono', 'Fira Code', 'Cascadia Code', monospace"
    
    # Font sizes
    size_xs: int = 12
    size_sm: int = 14
    size_base: int = 15
    size_md: int = 16
    size_lg: int = 18
    size_xl: int = 20
    size_2xl: int = 24
    size_3xl: int = 30


SPACING = Spacing()
RADIUS = Radius()
TYPOGRAPHY = Typography()
