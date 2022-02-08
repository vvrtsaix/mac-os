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
            <MenuButton
              placement={DropdownMenuPlacement.LEFT}
              records={[
                { key: 'about-this-mac', value: 'About This Mac' },
                { key: 'div1', type: 'divider' },
                {
                  key: 'system-preferences',
                  value: 'System Preferences...',
                },
                {
                  key: 'app-store',
                  value: 'App Store...',
                },
                { key: 'div2', type: 'divider' },
                {
                  key: 'recent-items',
                  value: 'Recent Items',
                },
                { key: 'div3', type: 'divider' },
                {
                  key: 'force-quit',
                  value: 'Force Quit...',
                  shortcut: '⌥⌘⎋',
                },
                { key: 'div4', type: 'divider' },
                {
                  key: 'sleep',
                  value: 'Sleep',
                },
                {
                  key: 'restart',
                  value: 'Restart...',
                },
                {
                  key: 'shut-down',
                  value: 'Shut Down...',
                },
                { key: 'div5', type: 'divider' },
                {
                  key: 'lock-screen',
                  value: 'Lock Screen',
                  shortcut: '⌃⌘Q',
                },
                {
                  key: 'log-out-user',
                  value: 'Log Out Uurtsaikh Nyambat',
                  shortcut: '⇧⌘Q',
                },
              ]}
            >
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
                  key: 'add-to-sidebar',
                  value: 'Add to Sidebar',
                  shortcut: '⌃⌘T',
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
        {
          key: 'edit',
          value: (
            <MenuButton
              placement={DropdownMenuPlacement.LEFT}
              records={[
                {
                  key: 'undo',
                  value: 'Undo',
                  shortcut: '⌘Z',
                },
                {
                  key: 'redo',
                  value: 'Redo',
                  shortcut: '⇧⌘Z',
                },
                { key: 'div1', type: 'divider' },
                {
                  key: 'cut',
                  value: 'Cut',
                  shortcut: '⌘X',
                },
                {
                  key: 'copy',
                  value: 'Copy',
                  shortcut: '⌘C',
                },
                {
                  key: 'paste',
                  value: 'Paste',
                  shortcut: '⌘V',
                },
                {
                  key: 'select-all',
                  value: 'Select All',
                  shortcut: '⌘A',
                },
                { key: 'div2', type: 'divider' },
                { key: 'show-clipboard', value: 'Show Clipboard' },
                { key: 'div3', type: 'divider' },
                {
                  key: 'start-dictation',
                  value: 'Start Dictation...',
                },
                {
                  key: 'emoji-symbols',
                  value: 'Emoji & Symbols',
                  shortcut: '🌐 E',
                },
              ]}
            >
              Edit
            </MenuButton>
          ),
        },
        {
          key: 'view',
          value: (
            <MenuButton
              placement={DropdownMenuPlacement.LEFT}
              records={[
                {
                  key: 'use-stacks',
                  icon: '✓',
                  value: 'Use Stacks',
                  shortcut: '⌃⌘O',
                },
              ]}
            >
              View
            </MenuButton>
          ),
        },
        {
          key: 'go',
          value: (
            <MenuButton
              placement={DropdownMenuPlacement.LEFT}
              records={[
                {
                  key: 'back',
                  value: 'Back',
                  shortcut: '⌘[',
                },
                {
                  key: 'forward',
                  value: 'Forward',
                  shortcut: '⌘]',
                },
                {
                  key: 'enclosing-folder',
                  value: 'Enclosing Folder',
                  shortcut: '⌘▲',
                },
                { key: 'div1', type: 'divider' },
                {
                  key: 'recents',
                  value: 'Recents',
                  shortcut: '⇧⌘F',
                },
                {
                  key: 'documents',
                  value: 'Documents',
                  shortcut: '⇧⌘O',
                },
                {
                  key: 'desktop',
                  value: 'Desktop',
                  shortcut: '⇧⌘D',
                },
                {
                  key: 'downloads',
                  value: 'Downloads',
                  shortcut: '⇧⌘L',
                },
                {
                  key: 'home',
                  value: 'Home',
                  shortcut: '⇧⌘H',
                },
                {
                  key: 'library',
                  value: 'Library',
                  shortcut: '⇧⌘L',
                },
                {
                  key: 'computer',
                  value: 'Computer',
                  shortcut: '⇧⌘C',
                },
                {
                  key: 'airdrop',
                  value: 'Airdrop',
                  shortcut: '⇧⌘R',
                },
                {
                  key: 'network',
                  value: 'Network',
                  shortcut: '⇧⌘K',
                },
                {
                  key: 'icloud-drive',
                  value: 'ICloud Drive',
                  shortcut: '⇧⌘I',
                },
                {
                  key: 'shared',
                  value: 'Shared',
                  shortcut: '⇧⌘S',
                },
                {
                  key: 'applications',
                  value: 'applications',
                  shortcut: '⇧⌘A',
                },
                {
                  key: 'utilities',
                  value: 'Utilities',
                  shortcut: '⇧⌘U',
                },
                { key: 'div2', type: 'divider' },
                {
                  key: 'recent-folders',
                  value: 'Recent Folders',
                },
                { key: 'div3', type: 'divider' },
                {
                  key: 'go-to-folder',
                  value: 'Go to Folder...',
                  shortcut: '⇧⌘G',
                },
                {
                  key: 'connect-to-server',
                  value: 'Connect to Server...',
                  shortcut: '⌘K',
                },
              ]}
            >
              Go
            </MenuButton>
          ),
        },
        {
          key: 'window',
          value: (
            <MenuButton
              placement={DropdownMenuPlacement.LEFT}
              records={[
                {
                  key: 'minimize',
                  value: 'Minimize',
                  shortcut: '⌘M',
                },
                {
                  key: 'zoom',
                  value: 'Zoom',
                },
                { key: 'div1', type: 'divider' },
                {
                  key: 'bring-all-to-front',
                  value: 'Bring All to Front',
                },
              ]}
            >
              Window
            </MenuButton>
          ),
        },
        {
          key: 'help',
          value: (
            <MenuButton
              placement={DropdownMenuPlacement.LEFT}
              records={[
                {
                  type: 'custom',
                  key: 'search',
                  value: (
                    <input
                      type="search"
                      placeholder="Search"
                      className="focus:border-1 mb-1 w-full rounded border-gray-400 bg-white/40 px-2 py-0.5 align-middle text-xs text-black-text focus:border-gray-400 focus:outline-none focus:ring-0"
                    />
                  ),
                },
                {
                  key: 'macos-help',
                  value: 'macOS Help',
                },
                { key: 'div1', type: 'divider' },
                {
                  key: 'see-what-s-new-in-macos',
                  value: 'See What’s New in macOS',
                },
                {
                  key: 'new-to-macos-learn-the-basics',
                  value: 'New to macOS? Learn the Basics',
                },
              ]}
            >
              Help
            </MenuButton>
          ),
        },
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
