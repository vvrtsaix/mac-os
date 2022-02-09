import SunIcon from 'icons/sun.svg'
import React, { FC } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { settingsActions } from 'redux/slices/settings'
import ControlPanel from '../components/panel'
import ControlRangeInput from '../components/range'

interface Props {}

const DisplayPanel: FC<Props> = () => {
  const dispatch = useAppDispatch()
  const { brightness } = useAppSelector(({ settings }) => ({
    brightness: settings.brightness,
  }))
  return (
    <ControlPanel col="col-span-4">
      <ControlRangeInput
        id="brihtness"
        label="Display"
        prefix={<SunIcon className="h-4 w-4" />}
        value={brightness}
        onChange={(value) => {
          dispatch(settingsActions.setBrightness(value))
        }}
      />
    </ControlPanel>
  )
}

export default DisplayPanel
