import classNames from 'classnames'
import React from 'react'

interface ListRecord {
  key: string
  value: React.ReactNode
}

interface Props<T extends ListRecord> {
  id?: string
  label?: string
  horizontal?: boolean
  className?: string
  dataSource?: T[]
  gap?: string
  render?: (record: T, index: number) => React.ReactNode
  children?: React.ReactNode[]
}

const List = <T extends ListRecord>({
  id,
  label,
  className,
  children,
  dataSource,
  render,
  gap,
  horizontal = false,
}: Props<T>) => {
  return (
    <ul
      id={id}
      aria-label={label}
      className={classNames(
        'flex',
        horizontal ? 'flex-row' : 'flex-col',
        gap,
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
