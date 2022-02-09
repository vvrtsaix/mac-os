import classNames from 'classnames'
import React, { FC } from 'react'

interface Props {
  htmlFor?: string
  padding?: string
}

const MenuLabel: FC<Props> = ({ htmlFor, padding = 'px-2', children }) => {
  const classes = classNames(
    'w-full whitespace-nowrap text-left text-xs font-bold text-black-text',
    padding
  )

  if (htmlFor) {
    return (
      <label htmlFor={htmlFor} className={classes}>
        {children}
      </label>
    )
  }
  return <h5 className={classes}>{children}</h5>
}

export default MenuLabel
