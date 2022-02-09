import List from 'components/list'
import ListItem from 'components/list/item'
import { wifiList } from 'data-sources'
import React, { FC } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { settingsActions } from 'redux/slices/settings'
import WifiItem from './wifi-item'

interface Props {
  id?: string
}

const WifiList: FC<Props> = ({ id }) => {
  const dispatch = useAppDispatch()
  const selectedWiFi = useAppSelector(({ settings }) => settings.selectedWiFi)
  return (
    <List
      id={id}
      gap="gap-1"
      dataSource={wifiList}
      render={(record) => (
        <ListItem key={record.key}>
          <WifiItem
            title={record.value}
            isEnable={selectedWiFi === record.value}
            hasPassword={record.hasPassword}
            onClick={() => {
              dispatch(settingsActions.selectWiFi(record.value))
            }}
          />
        </ListItem>
      )}
    ></List>
  )
}

export default WifiList
