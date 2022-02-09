import React, { FC } from 'react'

interface Props {
  name: string
  icon?: React.ReactNode
  onClick?: () => void
}

const AppItem: FC<Props> = ({ icon, name, onClick }) => {
  return (
    <a
      role="button"
      className="flex w-full cursor-pointer select-none flex-row items-center gap-1 rounded px-2 py-0.5 text-xs hover:bg-gray-500/20"
      onClick={onClick}
    >
      {icon}
      <h5 className="w-10 whitespace-nowrap text-xs leading-none text-black-text">
        {name}
      </h5>
    </a>
  )
}

export default AppItem
