import KeyboardBrightnessIcon from 'icons/keyboard-brightness.svg'
import React, { FC } from 'react'
import ControlButton from '../components/button'
import ControlPanel from '../components/panel'

interface Props {}

const KeyboardBrightnessPanel: FC<Props> = () => {
  return (
    <ControlPanel>
      <ControlButton
        icon={<KeyboardBrightnessIcon className="h-5 w-5" />}
        title="Keyboard Brightness"
      />
    </ControlPanel>
  )
}

export default KeyboardBrightnessPanel
