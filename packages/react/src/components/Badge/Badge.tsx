import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../utils'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /** Badge color variant */
  variant?: 'default' | 'accent' | 'success' | 'danger' | 'warning' | 'info'
  /** Badge size */
  size?: 'sm' | 'md' | 'lg'
  /** Show a dot indicator before text */
  dot?: boolean
  children?: ReactNode
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'default', size = 'md', dot, className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'rw-badge',
          variant !== 'default' && `rw-badge--${variant}`,
          size !== 'md' && `rw-badge--${size}`,
          className,
        )}
        {...props}
      >
        {dot && <span className="rw-badge__dot" />}
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'
