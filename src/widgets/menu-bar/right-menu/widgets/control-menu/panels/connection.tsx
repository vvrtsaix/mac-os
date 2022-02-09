import AirdropIcon from 'icons/airdrop.svg'
import BluetoothIcon from 'icons/bluetooth.svg'
import WifiIcon from 'icons/wifi.svg'
import React, { FC } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { settingsActions } from 'redux/slices/settings'
import ControlItem from '../components/item'
import ControlPanel from '../components/panel'

interface Props {}

const ConnectionPanel: FC<Props> = () => {
  const dispatch = useAppDispatch()
  const { enableWiFi, enableBluetooth, enableAirdrop, selectedWiFi } =
    useAppSelector(({ settings }) => ({
      enableWiFi: settings.enableWiFi,
      enableBluetooth: settings.enableBluetooth,
      enableAirdrop: settings.enableAirdrop,
      selectedWiFi: settings.selectedWiFi,
    }))

  return (
    <ControlPanel row="row-span-2" col="col-span-2">
      <ControlItem
        title="Wi-Fi"
        caption={selectedWiFi}
        isEnable={enableWiFi}
        icon={<WifiIcon className="h-4 w-4" />}
        onIconClick={() => {}}
        onClick={() => {
          dispatch(settingsActions.setWiFi(!enableWiFi))
        }}
      />
      <ControlItem
        title="Bluetooth"
        isEnable={enableBluetooth}
        caption={enableBluetooth ? 'On' : 'Off'}
        icon={<BluetoothIcon className="h-4 w-4" />}
        onIconClick={() => {}}
        onClick={() => {
          dispatch(settingsActions.setBluetooth(!enableBluetooth))
        }}
      />
      <ControlItem
        title="AirDrop"
        isEnable={enableAirdrop}
        caption={enableAirdrop ? 'On' : 'Off'}
        icon={<AirdropIcon className="h-4 w-4" />}
        onIconClick={() => {}}
        onClick={() => {
          dispatch(settingsActions.setAirdrop(!enableAirdrop))
        }}
      />
    </ControlPanel>
  )
}

export default ConnectionPanel
