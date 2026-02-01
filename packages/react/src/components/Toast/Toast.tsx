import { forwardRef, useState, useEffect, useCallback, createContext, useContext, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../utils'

export interface ToastData {
  id: string
  message: ReactNode
  variant?: 'default' | 'success' | 'danger' | 'warning' | 'info'
  duration?: number
}

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  /** Toast variant */
  variant?: ToastData['variant']
  /** Called when toast should be dismissed */
  onDismiss?: () => void
  children?: ReactNode
}

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  ({ variant = 'default', onDismiss, className, children, ...props }, ref) => {
    const variantBg: Record<string, string> = {
      default: '',
      success: 'rw-badge--success',
      danger: 'rw-badge--danger',
      warning: 'rw-badge--warning',
      info: 'rw-badge--info',
    }

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          'rw-card rw-card--elevated rw-animate-slide-up',
          className,
        )}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '12px 16px',
          minWidth: '280px',
          maxWidth: '420px',
        }}
        {...props}
      >
        {variant !== 'default' && (
          <span className={cn('rw-badge rw-badge--sm', variantBg[variant])}>
            {variant}
          </span>
        )}
        <span style={{ flex: 1 }}>{children}</span>
        {onDismiss && (
          <button
            className="rw-btn rw-btn--ghost rw-btn--icon rw-btn--sm"
            onClick={onDismiss}
            aria-label="Dismiss"
          >
            ×
          </button>
        )}
      </div>
    )
  }
)

Toast.displayName = 'Toast'

/* ── Toast container context ── */

type ToastFn = (message: ReactNode, opts?: Partial<Omit<ToastData, 'id' | 'message'>>) => void

const ToastContext = createContext<ToastFn>(() => {})

export const useToast = () => useContext(ToastContext)

export interface ToastProviderProps {
  children: ReactNode
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastData[]>([])

  const addToast: ToastFn = useCallback((message, opts) => {
    const id = Math.random().toString(36).slice(2)
    const toast: ToastData = { id, message, duration: 4000, ...opts }
    setToasts((prev) => [...prev, toast])
  }, [])

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={addToast}>
      {children}
      <div
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 'var(--rw-z-toast, 500)' as any,
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}
      >
        {toasts.map((t) => (
          <ToastItem key={t.id} toast={t} onDismiss={() => dismiss(t.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  )
}

function ToastItem({ toast, onDismiss }: { toast: ToastData; onDismiss: () => void }) {
  useEffect(() => {
    if (toast.duration && toast.duration > 0) {
      const timer = setTimeout(onDismiss, toast.duration)
      return () => clearTimeout(timer)
    }
  }, [toast.duration, onDismiss])

  return (
    <Toast variant={toast.variant} onDismiss={onDismiss}>
      {toast.message}
    </Toast>
  )
}
