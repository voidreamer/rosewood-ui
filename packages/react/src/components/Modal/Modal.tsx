import { forwardRef, useEffect, useCallback, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../utils'

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  /** Whether the modal is open */
  open?: boolean
  /** Called when the modal should close */
  onClose?: () => void
  /** Modal size */
  size?: 'sm' | 'md' | 'lg' | 'full'
  /** Modal title */
  title?: string
  /** Footer content */
  footer?: ReactNode
  children?: ReactNode
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ open = false, onClose, size = 'md', title, footer, className, children, ...props }, ref) => {
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose?.()
    }, [onClose])

    useEffect(() => {
      if (open) {
        document.addEventListener('keydown', handleKeyDown)
        document.body.style.overflow = 'hidden'
        return () => {
          document.removeEventListener('keydown', handleKeyDown)
          document.body.style.overflow = ''
        }
      }
    }, [open, handleKeyDown])

    if (!open) return null

    return (
      <div className="rw-overlay" onClick={(e) => e.target === e.currentTarget && onClose?.()}>
        <div
          ref={ref}
          role="dialog"
          aria-modal="true"
          aria-label={title}
          className={cn(
            'rw-modal',
            size !== 'md' && `rw-modal--${size}`,
            className,
          )}
          {...props}
        >
          {title && (
            <div className="rw-modal__header">
              <h3 className="rw-modal__title">{title}</h3>
              <button className="rw-modal__close" onClick={onClose} aria-label="Close">&times;</button>
            </div>
          )}
          <div className="rw-modal__body">{children}</div>
          {footer && <div className="rw-modal__footer">{footer}</div>}
        </div>
      </div>
    )
  }
)

Modal.displayName = 'Modal'
