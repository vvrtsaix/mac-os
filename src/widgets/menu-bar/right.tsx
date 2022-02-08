import List from 'components/list'
import ListItem from 'components/list/item'
import BatteryIcon from 'icons/battery.svg'
import SearchIcon from 'icons/search.svg'
import SwitchsIcon from 'icons/switchs.svg'
import WifiIcon from 'icons/wifi.svg'
import React, { FC } from 'react'
import Datetime from './datetime'
import MenuButton from './menu-button'
import { DropdownMenuPlacement } from './menu-button/types'
import SiriButton from './siri-button'

interface Props {}

const RightMenu: FC<Props> = () => {
  return (
    <List
      label="left-menu"
      dataSource={[
        {
          key: 'battery',
          value: (
            <MenuButton
              placement={DropdownMenuPlacement.LEFT}
              records={[
                {
                  type: 'custom',
                  key: 'barrery',
                  value: (
                    <div className="mb-1 w-full whitespace-nowrap px-2 text-left text-xs font-bold text-black-text">
                      Battery
                    </div>
                  ),
                },
                {
                  type: 'custom',
                  key: 'power-source',
                  value: (
                    <span className="w-full whitespace-nowrap px-2 text-left text-xs text-black-text">
                      Power Source: Battery
                    </span>
                  ),
                },
                { key: 'div1', type: 'divider' },
                {
                  type: 'custom',
                  key: 'using-significant-energy',
                  value: (
                    <span className="w-full whitespace-nowrap px-2 text-left text-xs font-bold text-black-text">
                      Using Significant Energy
                    </span>
                  ),
                },
                {
                  key: 'chrome',
                  value: '🌏 Chrome.app',
                },
                { key: 'div2', type: 'divider' },
                {
                  key: 'battery-preferences',
                  value: 'Battery Preferences...',
                },
              ]}
            >
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
          value: <Datetime showSeconds />,
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
