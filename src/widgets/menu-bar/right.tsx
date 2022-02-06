import List from 'components/list'
import ListItem from 'components/list/item'
import BatteryIcon from 'icons/battery.svg'
import SearchIcon from 'icons/search.svg'
import SwitchsIcon from 'icons/switchs.svg'
import WifiIcon from 'icons/wifi.svg'
import React, { FC } from 'react'
import MenuButton from './menu-button'
import SiriButton from './siri-button'

type Props = {}

const RightMenu: FC<Props> = () => {
  return (
    <List
      label="left-menu"
      dataSource={[
        {
          key: 'battery',
          value: (
            <MenuButton>
              <BatteryIcon className="h-6 w-6" />
            </MenuButton>
          ),
        },
        {
          key: 'wifi',
          value: (
            <MenuButton>
              <WifiIcon className="h-5 w-5" />
            </MenuButton>
          ),
        },
        {
          key: 'search',
          value: (
            <MenuButton>
              <SearchIcon className="h-4 w-4" />
            </MenuButton>
          ),
        },
        {
          key: 'switchs',
          value: (
            <MenuButton>
              <SwitchsIcon className="h-5 w-5" />
            </MenuButton>
          ),
        },
        { key: 'siri', value: <SiriButton /> },
        {
          key: 'date',
          value: <MenuButton>{new Date().toLocaleString()}</MenuButton>,
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

export default RightMenu
