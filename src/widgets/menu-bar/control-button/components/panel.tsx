import classNames from 'classnames'
import React, { FC } from 'react'

interface Props {
  col?: string
  row?: string
}

const ControlPanel: FC<Props> = ({
  col = 'col-span-1',
  row = 'row-span-1',
  children,
}) => {
  return (
    <div
      className={classNames(
        'flex flex-col justify-center gap-3 rounded-xl bg-white/80 p-2 shadow',
        col,
        row
      )}
    >
      {children}
    </div>
  )
}

export default ControlPanel
