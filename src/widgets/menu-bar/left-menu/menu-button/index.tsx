import { Menu } from '@headlessui/react'
import classNames from 'classnames'
import React, { FC, PropsWithChildren } from 'react'
import DropdownMenu from './dropdown-menu'
import { DropdownMenuPlacement, MenuItemRecord } from './types'

interface Props {
  records?: MenuItemRecord[]
  placement?: DropdownMenuPlacement
  className?: string
  onClick?: () => void
}

const MenuButton: FC<PropsWithChildren<Props>> = ({
  className,
  children,
  onClick,
  records = [],
  placement = DropdownMenuPlacement.LEFT,
}) => {
  return (
    <Menu as="div" className="relative inline-block text-center">
      <Menu.Button
        className={classNames(
          'h-6 rounded px-3 align-middle text-sm focus:bg-white/30 focus-visible:outline-none focus-visible:ring-0 active:bg-white/30',
          className
        )}
        onClick={onClick}
      >
        {children}
      </Menu.Button>
      <DropdownMenu placement={placement} records={records} />
    </Menu>
  )
}

export default MenuButton
