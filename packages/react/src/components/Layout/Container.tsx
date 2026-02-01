import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../utils'

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /** Max width variant */
  size?: 'sm' | 'md' | 'lg' | 'default' | 'full'
  children?: ReactNode
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ size = 'default', className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('rw-container', size !== 'default' && `rw-container--${size}`, className)}
      {...props}
    >
      {children}
    </div>
  )
)

Container.displayName = 'Container'
