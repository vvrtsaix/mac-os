import MenuIconSwitch from 'components/menu-icon-switch'
import LockIcon from 'icons/lock.svg'
import WifiIcon from 'icons/wifi.svg'
import React, { FC } from 'react'

interface Props {
  title: string
  isEnable?: boolean
  hasPassword?: boolean
  onClick?: () => void
}

const WifiItem: FC<Props> = ({
  title,
  onClick,
  isEnable = false,
  hasPassword = false,
}) => {
  return (
    <a
      role="button"
      className="flex w-full cursor-pointer select-none flex-row items-center justify-center gap-1 rounded px-2 py-0.5 text-xs hover:bg-gray-500/20"
      onClick={onClick}
    >
      <MenuIconSwitch value={isEnable}>
        <WifiIcon className="h-3 w-3" />
      </MenuIconSwitch>
      <h5 className="w-10 whitespace-nowrap text-xs leading-none text-black-text">
        {title}
      </h5>
      <div className="ml-auto">
        {hasPassword && <LockIcon className="h-3 w-3 text-gray-500" />}
      </div>
    </a>
  )
}

export default WifiItem
