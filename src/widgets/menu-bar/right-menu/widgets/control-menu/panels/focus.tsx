import MoonIcon from 'icons/moon.svg'
import React, { FC } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { settingsActions } from 'redux/slices/settings'
import ControlItem from '../components/item'
import ControlPanel from '../components/panel'

interface Props {}

const FocusPanel: FC<Props> = () => {
  const dispatch = useAppDispatch()
  const { enableFocus } = useAppSelector(({ settings }) => ({
    enableFocus: settings.enableFocus,
  }))

  return (
    <ControlPanel col="col-span-2">
      <ControlItem
        title="Focus"
        isEnable={enableFocus}
        icon={<MoonIcon className="h-4 w-4" />}
        onIconClick={() => {}}
        onClick={() => {
          dispatch(settingsActions.setFocus(!enableFocus))
        }}
      />
    </ControlPanel>
  )
}

export default FocusPanel
