import classNames from 'classnames'
import React, { FC, PropsWithChildren } from 'react'

interface Props {
  className?: string
  onClick?: () => void
}

const SystemActionButton: FC<PropsWithChildren<Props>> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <button
      className={classNames(
        'flex h-4 w-4 items-center justify-center rounded-full p-0 leading-none',
        className
      )}
      onClick={onClick}
    >
      <span className="opacity-0 transition group-hover:opacity-100">
        {children}
      </span>
    </button>
  )
}

export default SystemActionButton
