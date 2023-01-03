import classNames from 'classnames'
import React, { FC, PropsWithChildren } from 'react'

interface Props {
  className?: string
}

const ListItem: FC<PropsWithChildren<Props>> = ({ className, children }) => {
  return <li className={classNames('align-middle', className)}>{children}</li>
}

export default ListItem
