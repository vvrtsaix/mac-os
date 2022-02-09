import List from 'components/list'
import ListItem from 'components/list/item'
import React, { FC } from 'react'
import WifiItem from './wifi-item'

interface Props {
  id?: string
}

const WifiList: FC<Props> = ({ id }) => {
  const wifiList = [
    {
      key: '1',
      value: 'Univision 6666',
      isEnable: false,
      hasPassword: true,
    },
    {
      key: '2',
      value: 'Free',
      isEnable: true,
      hasPassword: false,
    },
  ]
  return (
    <List
      id={id}
      gap="gap-1"
      dataSource={wifiList}
      render={(record) => (
        <ListItem key={record.key}>
          <WifiItem
            title={record.value}
            isEnable={record.isEnable}
            hasPassword={record.hasPassword}
          />
        </ListItem>
      )}
    ></List>
  )
}

export default WifiList
