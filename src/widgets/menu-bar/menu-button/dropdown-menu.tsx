import { Menu, Transition } from '@headlessui/react'
import classNames from 'classnames'
import React, { FC, Fragment } from 'react'
import DropdownMenuItem from './dropdown-menu-item'
import { DropdownMenuPlacement, MenuItemRecord } from './types'

interface Props {
  placement?: DropdownMenuPlacement
  records: MenuItemRecord[]
}

const DropdownMenu: FC<Props> = ({
  records,
  placement = DropdownMenuPlacement.LEFT,
}) => {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items
        as="ul"
        className={classNames(
          placement === DropdownMenuPlacement.RIGHT ? 'right-0' : 'left-0',
          'absolute origin-top-right rounded bg-white/80 p-1 backdrop-blur focus:outline-none'
        )}
      >
        {records.map((record) => (
          <DropdownMenuItem key={record.key} record={record} />
        ))}
      </Menu.Items>
    </Transition>
  )
}

export default DropdownMenu
