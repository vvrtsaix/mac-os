import MenuIconSwitch from 'components/menu-icon-switch'
import AirdropIcon from 'icons/airdrop.svg'
import VolumeIcon from 'icons/volume.svg'
import React, { FC } from 'react'
import ControlPanel from '../components/panel'
import ControlRangeInput from '../components/range'

interface Props {}

const SoundPanel: FC<Props> = () => {
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
      />
    </ControlPanel>
  )
}

export default SoundPanel
