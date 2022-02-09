import MenuIconSwitch from 'components/menu-icon-switch'
import ArrowForwardIcon from 'icons/arrow-forward.svg'
import React, { FC } from 'react'

interface Props {
  icon: React.ReactNode
  title: string
  isEnable?: boolean
  caption?: string
  onClick?: () => void
  onIconClick?: () => void
}

const ControlItem: FC<Props> = ({
  icon,
  isEnable = false,
  title,
  caption,
  onClick,
  onIconClick,
}) => {
  return (
    <a
      role="button"
      className="group flex w-full cursor-pointer select-none flex-row items-center justify-center gap-2"
      onClick={onClick}
    >
      <MenuIconSwitch value={isEnable} onClick={onIconClick}>
        {icon}
      </MenuIconSwitch>
      <div className="truncate text-left leading-none text-black-text">
        <h5 className="whitespace-nowrap text-sm leading-none">{title}</h5>
        {caption && (
          <span className="whitespace-nowrap text-xs leading-none text-gray-400">
            {caption}
          </span>
        )}
      </div>
      <button className="ml-auto text-gray-400 opacity-0 transition-opacity group-hover:opacity-100">
        <ArrowForwardIcon className="h-4 w-4" />
      </button>
    </a>
  )
}

export default ControlItem
