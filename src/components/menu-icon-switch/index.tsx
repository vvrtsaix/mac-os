import classNames from 'classnames'
import React, { FC } from 'react'

interface Props {
  value?: boolean
  onClick?: () => void
}

const MenuIconSwitch: FC<Props> = ({ children, value, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        'rounded-full p-1',
        value ? 'bg-primary' : 'bg-gray-400'
      )}
    >
      {children}
    </button>
  )
}

export default MenuIconSwitch
