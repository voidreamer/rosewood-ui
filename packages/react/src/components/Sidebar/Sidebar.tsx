import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../utils'

export interface SidebarProps extends HTMLAttributes<HTMLElement> {
  /** Header content (brand/logo) */
  header?: ReactNode
  children?: ReactNode
}

export const Sidebar = forwardRef<HTMLElement, SidebarProps>(
  ({ header, className, children, ...props }, ref) => {
    return (
      <aside ref={ref} className={cn('rw-sidebar', className)} {...props}>
        {header && <div className="rw-sidebar__header">{header}</div>}
        {children}
      </aside>
    )
  }
)

Sidebar.displayName = 'Sidebar'

export interface SidebarSectionProps extends HTMLAttributes<HTMLDivElement> {
  /** Section title */
  title?: string
  children?: ReactNode
}

export const SidebarSection = forwardRef<HTMLDivElement, SidebarSectionProps>(
  ({ title, className, children, ...props }, ref) => (
    <div ref={ref} className={cn('rw-sidebar__section', className)} {...props}>
      {title && <div className="rw-sidebar__section-title">{title}</div>}
      {children}
    </div>
  )
)

SidebarSection.displayName = 'SidebarSection'

export interface SidebarLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  /** Whether the link is active */
  active?: boolean
  /** Link icon (rendered before label) */
  icon?: ReactNode
  /** Link href */
  href?: string
  children?: ReactNode
}

export const SidebarLink = forwardRef<HTMLAnchorElement, SidebarLinkProps>(
  ({ active, icon, className, children, ...props }, ref) => (
    <a
      ref={ref}
      className={cn('rw-sidebar__link', active && 'rw-sidebar__link--active', className)}
      {...props}
    >
      {icon}
      {children}
    </a>
  )
)

SidebarLink.displayName = 'SidebarLink'
