import List from 'components/list'
import ListItem from 'components/list/item'
import AppleLogoIcon from 'icons/apple-logo.svg'
import React, { FC } from 'react'
import MenuButton from './menu-button'

type Props = {}

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
          value: <MenuButton className="font-bold">Finder</MenuButton>,
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
