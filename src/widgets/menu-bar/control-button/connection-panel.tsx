import AirdropIcon from 'icons/airdrop.svg'
import BluetoothIcon from 'icons/bluetooth.svg'
import WifiIcon from 'icons/wifi.svg'
import React, { FC, useState } from 'react'
import ControlItem from './components/item'

interface Props {}

const ConnectionPanel: FC<Props> = () => {
  const [wifi, setWifi] = useState(false)
  const [bluetooth, setBluetooth] = useState(false)
  const [airdrop, setAirdrop] = useState(false)
  return (
    <>
      <ControlItem
        title="Wi-Fi"
        caption="FREE"
        isEnable={wifi}
        icon={<WifiIcon className="h-4 w-4" />}
        onIconClick={() => {
          console.log('icon clicked')
        }}
        onClick={() => {
          setWifi((old) => !old)
        }}
      />
      <ControlItem
        title="Bluetooth"
        caption="Off"
        isEnable={bluetooth}
        icon={<BluetoothIcon className="h-4 w-4" />}
        onIconClick={() => {
          console.log('icon clicked')
        }}
        onClick={() => {
          setBluetooth((old) => !old)
        }}
      />
      <ControlItem
        title="AirDrop"
        caption="Off"
        isEnable={airdrop}
        icon={<AirdropIcon className="h-4 w-4" />}
        onIconClick={() => {
          console.log('icon clicked')
        }}
        onClick={() => {
          setAirdrop((old) => !old)
        }}
      />
    </>
  )
}

export default ConnectionPanel
