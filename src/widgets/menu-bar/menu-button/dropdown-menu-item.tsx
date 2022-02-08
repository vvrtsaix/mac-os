import { Menu } from '@headlessui/react'
import classNames from 'classnames'
import React, { FC } from 'react'
import { MenuItemRecord } from './types'

interface Props {
  record: MenuItemRecord
}

const DropdownMenuItem: FC<Props> = ({ record }) => {
  if (record.type === 'divider') {
    return (
      <div className="my-1 px-2">
        <div className="h-px w-full bg-gray-300" />
      </div>
    )
  }
  if (record.type === 'custom') {
    return (
      <Menu.Item as="li" className="flex items-center justify-center">
        {record.value}
      </Menu.Item>
    )
  }
  return (
    <Menu.Item as="li">
      {({ active }) => (
        <button
          className={classNames(
            active ? 'bg-primary text-white-text' : 'text-black-text',
            'flex w-full items-center justify-between whitespace-nowrap rounded px-2 py-0.5 text-xs'
          )}
        >
          {record.icon ? (
            <div
              className={classNames(
                'flex flex-row items-center justify-center',
                record.iconGap || 'gap-1'
              )}
            >
              <span>{record.icon}</span>
              <span>{record.value}</span>
            </div>
          ) : (
            record.value
          )}
          {record.shortcut && (
            <span
              className={classNames(
                active ? 'text-white-text' : 'text-gray-400',
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
