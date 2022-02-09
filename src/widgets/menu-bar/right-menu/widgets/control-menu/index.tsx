import { Popover, Transition } from '@headlessui/react'
import SwitchsIcon from 'icons/switchs.svg'
import React, { FC, Fragment } from 'react'
import AccessibilityPanel from './panels/accessibility'
import ConnectionPanel from './panels/connection'
import DisplayPanel from './panels/display'
import FocusPanel from './panels/focus'
import KeyboardBrightnessPanel from './panels/keyboard-brightness'
import MusicPanel from './panels/music'
import ScreenMirroring from './panels/screen-mirroring'
import SoundPanel from './panels/sound'

interface Props {}

const ControlMenu: FC<Props> = () => {
  return (
    <Popover className="relative">
      {() => (
        <>
          <Popover.Button className="flex h-6 items-center justify-center rounded px-3 align-middle focus:bg-white/30 focus-visible:outline-none focus-visible:ring-0 active:bg-white/30">
            <SwitchsIcon className="h-5 w-5" />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-1/2 z-10 mt-1 w-80 -translate-x-1/2 transform p-2">
              <div className="grid grid-cols-4 grid-rows-6 gap-2 rounded-xl bg-white/80 p-2 shadow-lg backdrop-blur-3xl">
                <ConnectionPanel />
                <FocusPanel />
                <KeyboardBrightnessPanel />
                <ScreenMirroring />
                <DisplayPanel />
                <SoundPanel />
                <MusicPanel />
                <AccessibilityPanel />
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export default ControlMenu
