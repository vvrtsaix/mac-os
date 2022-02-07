import List from 'components/list'
import ListItem from 'components/list/item'
import AppleLogoIcon from 'icons/apple-logo.svg'
import React, { FC } from 'react'
import MenuButton from './menu-button'
import { DropdownMenuPlacement } from './menu-button/types'

interface Props {}

const LeftMenu: FC<Props> = () => {
  return (
    <List
      label="left-menu"
      dataSource={[
        {
          key: 'logo',
          value: (
            <MenuButton>
              <AppleLogoIcon className="h-5 w-5" />
            </MenuButton>
          ),
        },
        {
          key: 'finder',
          value: (
            <MenuButton
              className="font-bold"
              placement={DropdownMenuPlacement.LEFT}
              records={[
                { key: 'about', value: 'About Finder' },
                { key: 'div1', type: 'divider' },
                {
                  key: 'preferences',
                  value: 'Preferences...',
                  shortcut: '⌘ ,',
                },
                { key: 'div2', type: 'divider' },
                {
                  key: 'emtry-trash',
                  value: 'Empty Trash...',
                  shortcut: '⇧⌘⌫',
                },
                { key: 'div3', type: 'divider' },
                {
                  key: 'services',
                  value: 'Services',
                },
                { key: 'div4', type: 'divider' },
                {
                  key: 'hide-finder',
                  value: 'Hide Finder',
                  shortcut: '⌘H',
                },
                {
                  key: 'hide-others',
                  value: 'Hide Others',
                  shortcut: '⌥⌘H',
                },
                {
                  key: 'show-all',
                  value: 'Show All',
                },
              ]}
            >
              Finder
            </MenuButton>
          ),
        },
        { key: 'file', value: <MenuButton>File</MenuButton> },
        { key: 'edit', value: <MenuButton>Edit</MenuButton> },
        { key: 'view', value: <MenuButton>View</MenuButton> },
        { key: 'go', value: <MenuButton>Go</MenuButton> },
        { key: 'window', value: <MenuButton>Window</MenuButton> },
        { key: 'help', value: <MenuButton>Help</MenuButton> },
      ]}
      render={(record) => (
        <ListItem key={record.key} className="flex items-center justify-center">
          {record.value}
        </ListItem>
      )}
    />
  )
}

export default LeftMenu
