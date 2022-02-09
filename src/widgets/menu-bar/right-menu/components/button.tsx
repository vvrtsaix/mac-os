import React, { FC } from 'react'

interface Props {}

const RightMenuButton: FC<Props> = ({ children }) => {
  return (
    <button className="flex w-full items-center justify-between whitespace-nowrap rounded px-2 py-0.5 text-xs text-black-text hover:bg-gray-500/20">
      {children}
    </button>
  )
}

export default RightMenuButton
