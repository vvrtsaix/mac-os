import MoonIcon from 'icons/moon.svg'
import React, { FC, useState } from 'react'
import ControlItem from '../components/item'
import ControlPanel from '../components/panel'

interface Props {}

const FocusPanel: FC<Props> = () => {
  const [focus, setFocus] = useState(false)
  return (
    <ControlPanel col="col-span-2">
      <ControlItem
        title="Focus"
        isEnable={focus}
        icon={<MoonIcon className="h-4 w-4" />}
        onIconClick={() => {
          console.log('icon clicked')
        }}
        onClick={() => {
          setFocus((old) => !old)
        }}
      />
    </ControlPanel>
  )
}

export default FocusPanel
