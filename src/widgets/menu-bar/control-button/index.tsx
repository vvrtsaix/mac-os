import { Popover, Transition } from '@headlessui/react'
import SwitchsIcon from 'icons/switchs.svg'
import React, { FC, Fragment } from 'react'
import ControlButton from './components/button'
import ControlPanel from './components/panel'
import ConnectionPanel from './connection-panel'
import FocusPanel from './focus-panel'

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
              <div className="grid grid-cols-4 grid-rows-6 gap-2 rounded-xl bg-white/80 p-2 shadow-lg backdrop-blur">
                <ControlPanel row="row-span-2" col="col-span-2">
                  <ConnectionPanel />
                </ControlPanel>
                <ControlPanel row="row-span-1" col="col-span-2">
                  <FocusPanel />
                </ControlPanel>
                <ControlPanel row="row-span-1" col="col-span-1">
                  <ControlButton
                    icon={<SwitchsIcon className="h-5 w-5" />}
                    title="Keyboard Brightness"
                  />
                </ControlPanel>
                <ControlPanel row="row-span-1" col="col-span-1">
                  <ControlButton
                    icon={<SwitchsIcon className="h-5 w-5" />}
                    title="Screen Mirroring"
                  />
                </ControlPanel>
                <ControlPanel row="row-span-1" col="col-span-4">
                  <FocusPanel />
                </ControlPanel>
                <ControlPanel row="row-span-1" col="col-span-4">
                  <FocusPanel />
                </ControlPanel>
                <ControlPanel row="row-span-1" col="col-span-4">
                  <FocusPanel />
                </ControlPanel>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export default ControlMenu
