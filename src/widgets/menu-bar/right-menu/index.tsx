import List from 'components/list'
import ListItem from 'components/list/item'
import React, { FC } from 'react'
import Battery from './widgets/battery'
import ControlMenu from './widgets/control-menu'
import Datetime from './widgets/datetime'
import Search from './widgets/search'
import Siri from './widgets/siri'
import WiFi from './widgets/wifi'

interface Props {}

const RightMenu: FC<Props> = () => {
  return (
    <List
      horizontal
      label="left-menu"
      dataSource={[
        { key: 'battery', value: <Battery /> },
        { key: 'wifi', value: <WiFi /> },
        { key: 'search', value: <Search /> },
        { key: 'control', value: <ControlMenu /> },
        { key: 'siri', value: <Siri /> },
        { key: 'date', value: <Datetime /> },
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
