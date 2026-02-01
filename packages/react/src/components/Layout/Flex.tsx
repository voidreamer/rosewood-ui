import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../utils'

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  /** Flex direction */
  direction?: 'row' | 'column'
  /** Wrap children */
  wrap?: boolean
  /** Center both axes */
  center?: boolean
  /** Space between */
  between?: boolean
  /** Align items center */
  alignCenter?: boolean
  /** Gap size */
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  children?: ReactNode
}

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  ({ direction, wrap, center, between, alignCenter, gap, className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rw-flex',
        direction === 'column' && 'rw-flex--col',
        wrap && 'rw-flex--wrap',
        center && 'rw-flex--center',
        between && 'rw-flex--between',
        alignCenter && 'rw-flex--align-center',
        gap && `rw-flex--gap-${gap}`,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
)

Flex.displayName = 'Flex'

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  /** Gap size */
  gap?: 'sm' | 'md' | 'lg' | 'xl'
  children?: ReactNode
}

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ gap = 'md', className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('rw-stack', gap !== 'md' && `rw-stack--${gap}`, className)}
      {...props}
    >
      {children}
    </div>
  )
)

Stack.displayName = 'Stack'
