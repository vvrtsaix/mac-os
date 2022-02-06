import classNames from 'classnames'
import React, { FC } from 'react'

interface Props {
  className?: string
  onClick?: () => void
}

const MenuButton: FC<Props> = ({ className, children, onClick = () => {} }) => {
  return (
    <button
      className={classNames(
        'h-6 rounded px-3 align-middle text-sm focus:bg-[#ffffff30] active:bg-[#ffffff30]',
        className
      )}
      onClick={() => {
        onClick()
      }}
    >
      {children}
    </button>
  )
}

export default MenuButton
