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
        {
          key: 'file',
          value: (
            <MenuButton
              placement={DropdownMenuPlacement.LEFT}
              records={[
                {
                  key: 'new-finder-window',
                  value: 'New Finder Window',
                  shortcut: '⌘N',
                },
                {
                  key: 'new-folder',
                  value: 'New Folder',
                  shortcut: '⇧⌘N',
                },
                {
                  key: 'new-folder-with-selection',
                  value: 'New Folder with Selection',
                  shortcut: '⌃⌘N',
                },
                {
                  key: 'new-smart-folder',
                  value: 'New Smart Folder',
                },
                {
                  key: 'new-tab',
                  value: 'New Tab',
                  shortcut: '⌘T',
                },
                {
                  key: 'open',
                  value: 'Open',
                  shortcut: '⌘O',
                },
                {
                  key: 'open-with',
                  value: 'Open With',
                },
                {
                  key: 'close-window',
                  value: 'Close Window',
                  shortcut: '⌘W',
                },
                { key: 'div1', type: 'divider' },
                {
                  key: 'get-info',
                  value: 'Get Info',
                  shortcut: '⌘I',
                },
                {
                  key: 'rename',
                  value: 'Rename',
                },
                {
                  key: 'compress',
                  value: 'Compress',
                },
                {
                  key: 'duplicate',
                  value: 'Duplicate',
                  shortcut: '⌘D',
                },
                {
                  key: 'make-alias',
                  value: 'Make Alias',
                  shortcut: '⌃⌘A',
                },
                {
                  key: 'quick-look',
                  value: 'Quick Look',
                  shortcut: '⌘Y',
                },
                {
                  key: 'print',
                  value: 'Print',
                  shortcut: '⌘P',
                },
                { key: 'div2', type: 'divider' },
                {
                  key: 'share',
                  value: 'Share',
                },
                { key: 'div3', type: 'divider' },
                {
                  key: 'show-original',
                  value: 'Show Original',
                  shortcut: '⌘R',
                },
                {
                  key: 'add-to-dock',
                  value: 'Add to Dock',
                  shortcut: '⌃⇧⌘T',
                },
                { key: 'div4', type: 'divider' },
                {
                  key: 'move-to-trash',
                  value: 'Move to Trash',
                  shortcut: '⌘⌫',
                },
                {
                  key: 'eject',
                  value: 'Eject',
                  shortcut: '⌘E',
                },
                { key: 'div5', type: 'divider' },
                {
                  key: 'tags',
                  value: 'Tags...',
                },
                { key: 'div6', type: 'divider' },
                {
                  key: 'find',
                  value: 'Find',
                  shortcut: '⌘F',
                },
              ]}
            >
              File
            </MenuButton>
          ),
        },
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
