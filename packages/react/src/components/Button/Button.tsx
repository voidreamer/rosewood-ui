import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../utils'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'accent-outline'
  /** Button size */
  size?: 'sm' | 'md' | 'lg'
  /** Full width button */
  block?: boolean
  /** Pill-shaped border radius */
  pill?: boolean
  /** Icon-only button */
  icon?: boolean
  /** Show loading spinner */
  loading?: boolean
  children?: ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', block, pill, icon, loading, className, disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'rw-btn',
          `rw-btn--${variant}`,
          size !== 'md' && `rw-btn--${size}`,
          block && 'rw-btn--block',
          pill && 'rw-btn--pill',
          icon && 'rw-btn--icon',
          loading && 'rw-btn--loading',
          className,
        )}
        disabled={disabled || loading}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
