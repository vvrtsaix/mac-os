import MoonIcon from 'icons/moon.svg'
import React, { FC, useState } from 'react'
import ControlItem from './components/item'

interface Props {}

const FocusPanel: FC<Props> = () => {
  const [focus, setFocus] = useState(false)
  return (
    <>
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
    </>
  )
}

export default FocusPanel
