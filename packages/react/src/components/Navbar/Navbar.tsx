import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../utils'

export interface NavbarProps extends HTMLAttributes<HTMLElement> {
  /** Brand / logo section */
  brand?: ReactNode
  /** Navigation links */
  nav?: ReactNode
  /** Right-side actions */
  actions?: ReactNode
  children?: ReactNode
}

export const Navbar = forwardRef<HTMLElement, NavbarProps>(
  ({ brand, nav, actions, className, children, ...props }, ref) => {
    return (
      <nav ref={ref} className={cn('rw-navbar', className)} {...props}>
        {brand && <div className="rw-navbar__brand">{brand}</div>}
        {nav && <div className="rw-navbar__nav">{nav}</div>}
        {actions && <div className="rw-navbar__actions">{actions}</div>}
        {children}
      </nav>
    )
  }
)

Navbar.displayName = 'Navbar'

export interface NavbarLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  /** Whether the link is active */
  active?: boolean
  /** Link href */
  href?: string
  children?: ReactNode
}

export const NavbarLink = forwardRef<HTMLAnchorElement, NavbarLinkProps>(
  ({ active, className, children, ...props }, ref) => (
    <a
      ref={ref}
      className={cn('rw-navbar__link', active && 'rw-navbar__link--active', className)}
      {...props}
    >
      {children}
    </a>
  )
)

NavbarLink.displayName = 'NavbarLink'
