import { Menu } from '@headlessui/react'
import classNames from 'classnames'
import React, { FC } from 'react'

export interface MenuItemRecord {
  key: string
  value: React.ReactNode
  shortcut?: React.ReactNode
  onClick?: () => void
  children?: MenuItemRecord[]
}

interface Props {
  record: MenuItemRecord
}

const DropdownMenuItem: FC<Props> = ({ record }) => {
  return (
    <Menu.Item as="li">
      {({ active }) => (
        <button
          className={classNames(
            active ? 'bg-blue-500 text-white' : 'text-gray-900',
            'flex w-full items-center justify-between whitespace-nowrap rounded-md px-2 py-1 text-sm'
          )}
        >
          {record.value}
          {record.shortcut && (
            <span
              className={classNames(
                active ? 'text-white' : 'text-gray-400',
                'ml-4'
              )}
            >
              {record.shortcut}
            </span>
          )}
        </button>
      )}
    </Menu.Item>
  )
}

export default DropdownMenuItem
