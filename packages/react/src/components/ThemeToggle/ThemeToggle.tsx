import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cn } from '../../utils'
import { useTheme } from '../../hooks/useTheme'

export interface ThemeToggleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Override the label */
  label?: string
}

/** A button that toggles between dark and light themes */
export const ThemeToggle = forwardRef<HTMLButtonElement, ThemeToggleProps>(
  ({ label, className, ...props }, ref) => {
    const { theme, toggle } = useTheme()
    const isDark = theme === 'dark'

    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={isDark}
        aria-label={label || `Switch to ${isDark ? 'light' : 'dark'} mode`}
        className={cn('rw-btn rw-btn--ghost rw-btn--icon', className)}
        onClick={toggle}
        {...props}
      >
        {isDark ? '☀️' : '🌙'}
      </button>
    )
  }
)

ThemeToggle.displayName = 'ThemeToggle'
