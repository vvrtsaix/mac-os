import SunIcon from 'icons/sun.svg'
import React, { FC } from 'react'
import ControlPanel from '../components/panel'
import ControlRangeInput from '../components/range'

interface Props {}

const DisplayPanel: FC<Props> = () => {
  return (
    <ControlPanel col="col-span-4">
      <ControlRangeInput
        id="brihtness"
        label="Display"
        prefix={<SunIcon className="h-4 w-4" />}
      />
    </ControlPanel>
  )
}

export default DisplayPanel
