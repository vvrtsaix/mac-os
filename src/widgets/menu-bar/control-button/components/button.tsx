import React, { FC } from 'react'

interface Props {
  icon: React.ReactNode
  title?: string
  onClick?: () => void
}

const ControlButton: FC<Props> = ({ icon, title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center justify-center text-gray-600"
    >
      {icon}
      <div className="mt-1 text-xs leading-none">{title}</div>
    </button>
  )
}

export default ControlButton
