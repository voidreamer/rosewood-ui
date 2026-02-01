import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cn } from '../../utils'

export interface ToggleProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  /** Whether the toggle is active */
  active?: boolean
  /** Called when toggle state changes */
  onChange?: (active: boolean) => void
  /** Accessible label */
  label?: string
}

export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
  ({ active = false, onChange, label, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={active}
        aria-label={label}
        className={cn('rw-toggle', active && 'rw-toggle--active', className)}
        onClick={() => onChange?.(!active)}
        {...props}
      />
    )
  }
)

Toggle.displayName = 'Toggle'
