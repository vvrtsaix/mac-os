import ArrowForwardIcon from 'icons/arrow-forward.svg'
import React, { FC } from 'react'
import IconSwitch from './icon-switch'

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
    <button
      className="group flex w-full flex-row items-center justify-center gap-2"
      onClick={onClick}
    >
      <IconSwitch value={isEnable} onClick={onIconClick}>
        {icon}
      </IconSwitch>
      <div className="text-left text-black-text">
        <h5 className="whitespace-nowrap text-sm leading-none">{title}</h5>
        {caption && (
          <caption className="whitespace-nowrap text-xs leading-none text-gray-400">
            {caption}
          </caption>
        )}
      </div>
      <button className="ml-auto text-gray-400 opacity-0 transition-opacity group-hover:opacity-100">
        <ArrowForwardIcon className="h-4 w-4" />
      </button>
    </button>
  )
}

export default ControlItem
