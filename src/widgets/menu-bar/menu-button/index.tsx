import { Menu } from '@headlessui/react'
import classNames from 'classnames'
import React, { FC } from 'react'
import DropdownMenu from './dropdown-menu'

interface Props {
  className?: string
  onClick?: () => void
}

const MenuButton: FC<Props> = ({ className, children, onClick = () => {} }) => {
  return (
    <Menu as="div" className="relative inline-block text-center">
      <Menu.Button
        className={classNames(
          'h-6 rounded px-3 align-middle text-sm focus:bg-[#ffffff30] active:bg-[#ffffff30]',
          className
        )}
        onClick={() => {
          onClick()
        }}
      >
        {children}
      </Menu.Button>
      <DropdownMenu
        // placement={DropdownMenuPlacement.RIGHT}
        records={[
          { key: 'about', value: <button>About Finder</button> },
          {
            key: 'preferences',
            value: <button>Preferences...</button>,
            shortcut: '⌘+,',
          },
          {
            key: 'emtry-trash',
            value: <button>Empty Trash...</button>,
            shortcut: '⌘+⌫',
          },
          {
            key: 'services',
            value: <button>Services</button>,
          },
        ]}
      />
    </Menu>
  )
}

export default MenuButton
