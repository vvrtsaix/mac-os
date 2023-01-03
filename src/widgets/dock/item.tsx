import React, { FC, PropsWithChildren } from 'react'
interface Props {
  isOpen?: boolean
  onClick?: () => void
}

const DockItem: FC<PropsWithChildren<Props>> = ({
  children,
  onClick,
  isOpen = false,
}) => {
  return (
    <button
      onClick={onClick}
      className="relative flex select-none flex-col items-center justify-center transition ease-in-out hover:-translate-y-1 hover:scale-110"
    >
      {children}
      {isOpen && <span className="absolute -bottom-2 text-3xl">.</span>}
    </button>
  )
}

export default DockItem
