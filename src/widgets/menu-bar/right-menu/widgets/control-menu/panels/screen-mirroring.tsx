import ScreenMirroringIcon from 'icons/screen-mirroring.svg'
import React, { FC } from 'react'
import ControlButton from '../components/button'
import ControlPanel from '../components/panel'

interface Props {}

const ScreenMirroring: FC<Props> = () => {
  return (
    <ControlPanel>
      <ControlButton
        icon={<ScreenMirroringIcon className="h-5 w-5" />}
        title="Screen Mirroring"
      />
    </ControlPanel>
  )
}

export default ScreenMirroring
