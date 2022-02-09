import AccessibilityIcon from 'icons/accessibility.svg'
import React, { FC } from 'react'
import ControlPanel from '../components/panel'

interface Props {}

const AccessibilityPanel: FC<Props> = () => {
  return (
    <div className="col-span-4 flex flex-row items-center">
      <ControlPanel>
        <button className="p-1">
          <div className="rounded-full border-2 border-gray-500 p-1">
            <AccessibilityIcon className="h-3 w-3 text-gray-500" />
          </div>
        </button>
      </ControlPanel>
    </div>
  )
}

export default AccessibilityPanel
