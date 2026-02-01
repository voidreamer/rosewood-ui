import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../utils'

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  /** Number of columns */
  cols?: 2 | 3 | 4 | 'auto' | 'auto-sm'
  children?: ReactNode
}

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ cols = 'auto', className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('rw-grid', typeof cols === 'number' ? `rw-grid--${cols}` : `rw-grid--${cols}`, className)}
      {...props}
    >
      {children}
    </div>
  )
)

Grid.displayName = 'Grid'
