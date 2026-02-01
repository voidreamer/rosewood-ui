import { forwardRef, type TableHTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../utils'

export interface TableColumn<T = any> {
  /** Column key matching data property */
  key: string
  /** Column header label */
  title: ReactNode
  /** Custom render function */
  render?: (value: any, row: T, index: number) => ReactNode
}

export interface TableProps<T = any> extends Omit<TableHTMLAttributes<HTMLTableElement>, 'children'> {
  /** Column definitions */
  columns: TableColumn<T>[]
  /** Data rows */
  data: T[]
  /** Table style variant */
  variant?: 'default' | 'striped' | 'bordered' | 'compact'
  /** Wrap in a card container */
  wrapped?: boolean
}

function TableInner<T extends Record<string, any>>(
  { columns, data, variant = 'default', wrapped, className, ...props }: TableProps<T>,
  ref: React.ForwardedRef<HTMLTableElement>,
) {
  const table = (
    <table
      ref={ref}
      className={cn(
        'rw-table',
        variant !== 'default' && `rw-table--${variant}`,
        className,
      )}
      {...props}
    >
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key}>{col.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {columns.map((col) => (
              <td key={col.key}>
                {col.render ? col.render(row[col.key], row, i) : row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )

  if (wrapped) {
    return <div className="rw-table-wrapper">{table}</div>
  }

  return table
}

export const Table = forwardRef(TableInner) as <T extends Record<string, any>>(
  props: TableProps<T> & { ref?: React.Ref<HTMLTableElement> }
) => React.ReactElement | null

