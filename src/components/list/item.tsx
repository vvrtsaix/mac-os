import classNames from 'classnames'
import React, { FC } from 'react'

interface Props {
  className?: string
}

const ListItem: FC<Props> = ({ className, children }) => {
  return <li className={classNames('align-middle', className)}>{children}</li>
}

export default ListItem
