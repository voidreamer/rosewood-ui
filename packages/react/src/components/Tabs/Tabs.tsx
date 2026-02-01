import { forwardRef, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../utils'

export interface TabItem {
  /** Unique key for the tab */
  key: string
  /** Tab label */
  label: ReactNode
  /** Tab content */
  content?: ReactNode
}

export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Tab items */
  items: TabItem[]
  /** Currently active tab key */
  activeKey?: string
  /** Called when tab changes */
  onChange?: (key: string) => void
  /** Use pill style instead of underline */
  pills?: boolean
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ items, activeKey, onChange, pills, className, ...props }, ref) => {
    return (
      <div ref={ref} className={className} {...props}>
        <div className={cn('rw-tabs', pills && 'rw-tabs--pills')} role="tablist">
          {items.map((item) => (
            <button
              key={item.key}
              role="tab"
              aria-selected={activeKey === item.key}
              className={cn('rw-tab', activeKey === item.key && 'rw-tab--active')}
              onClick={() => onChange?.(item.key)}
            >
              {item.label}
            </button>
          ))}
        </div>
        {items.map((item) =>
          activeKey === item.key && item.content ? (
            <div key={item.key} role="tabpanel" style={{ marginTop: 'var(--rw-space-lg, 1.5rem)' }}>
              {item.content}
            </div>
          ) : null
        )}
      </div>
    )
  }
)

Tabs.displayName = 'Tabs'
