import MenuIconSwitch from 'components/menu-icon-switch'
import AirdropIcon from 'icons/airdrop.svg'
import VolumeIcon from 'icons/volume.svg'
import React, { FC } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { settingsActions } from 'redux/slices/settings'
import ControlPanel from '../components/panel'
import ControlRangeInput from '../components/range'

interface Props {}

const SoundPanel: FC<Props> = () => {
  const dispatch = useAppDispatch()
  const { volume } = useAppSelector(({ settings }) => ({
    volume: settings.volume,
  }))
  return (
    <ControlPanel col="col-span-4">
      <ControlRangeInput
        id="volumes"
        label="Sound"
        prefix={<VolumeIcon className="h-4 w-4" />}
        suffix={
          <MenuIconSwitch value={false}>
            <AirdropIcon className="h-4 w-4" />
          </MenuIconSwitch>
        }
        value={volume}
        onChange={(value) => {
          dispatch(settingsActions.setVolume(value))
        }}
      />
    </ControlPanel>
  )
}

export default SoundPanel
