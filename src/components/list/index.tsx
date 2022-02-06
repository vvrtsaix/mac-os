import classNames from 'classnames'
import React from 'react'

interface ListRecord {
  key: string
  value: React.ReactNode
}

interface Props<T extends ListRecord> {
  label?: string
  row?: boolean
  className?: string
  dataSource?: T[]
  render?: (record: T, index: number) => React.ReactNode
  children?: React.ReactNode[]
}

const List = <T extends ListRecord>({
  label,
  className,
  children,
  dataSource,
  render,
  row = false,
}: Props<T>) => {
  return (
    <ul
      aria-label={label}
      className={classNames(
        'flex',
        {
          'flex-row': row,
        },
        className
      )}
    >
      {dataSource && render
        ? dataSource.map((record, index) => render(record, index))
        : children}
    </ul>
  )
}

export default List
