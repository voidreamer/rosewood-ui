import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../utils'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Card style variant */
  variant?: 'default' | 'elevated' | 'interactive' | 'glass' | 'accent'
  /** Padding size */
  padding?: 'compact' | 'default' | 'spacious'
  children?: ReactNode
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'default', padding = 'default', className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rw-card',
          variant !== 'default' && `rw-card--${variant}`,
          padding === 'compact' && 'rw-card--compact',
          padding === 'spacious' && 'rw-card--spacious',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('rw-card__header', className)} {...props}>{children}</div>
  )
)
CardHeader.displayName = 'CardHeader'

export const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => (
    <h3 ref={ref} className={cn('rw-card__title', className)} {...props}>{children}</h3>
  )
)
CardTitle.displayName = 'CardTitle'

export const CardSubtitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => (
    <p ref={ref} className={cn('rw-card__subtitle', className)} {...props}>{children}</p>
  )
)
CardSubtitle.displayName = 'CardSubtitle'

export const CardBody = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('rw-card__body', className)} {...props}>{children}</div>
  )
)
CardBody.displayName = 'CardBody'

export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('rw-card__footer', className)} {...props}>{children}</div>
  )
)
CardFooter.displayName = 'CardFooter'
