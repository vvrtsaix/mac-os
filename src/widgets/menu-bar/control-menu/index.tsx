import { Popover, Transition } from '@headlessui/react'
import AirdropIcon from 'icons/airdrop.svg'
import ForwardIcon from 'icons/forward.svg'
import MusicIcon from 'icons/music.svg'
import PlayIcon from 'icons/play.svg'
import SwitchsIcon from 'icons/switchs.svg'
import React, { FC, Fragment } from 'react'
import ControlButton from './components/button'
import IconSwitch from './components/icon-switch'
import ControlPanel from './components/panel'
import ControlRangeInput from './components/range'
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
                  <ControlRangeInput
                    id="brihtness"
                    label="Display"
                    prefix="☀︎"
                  />
                </ControlPanel>
                <ControlPanel row="row-span-1" col="col-span-4">
                  <ControlRangeInput
                    id="volumes"
                    label="Sound"
                    prefix="∰"
                    suffix={
                      <IconSwitch value={false}>
                        <AirdropIcon className="h-4 w-4" />
                      </IconSwitch>
                    }
                  />
                </ControlPanel>
                <ControlPanel row="row-span-1" col="col-span-4">
                  <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center justify-between gap-2">
                      <div className="rounded-md bg-red-500 p-2 text-white-text">
                        <MusicIcon className="h-4 w-4" />
                      </div>
                      <h5 className="text-sm text-black-text">Music.app</h5>
                    </div>
                    <div className="mr-2 flex flex-row items-center justify-between gap-2">
                      <button className="text-gray-500">
                        <PlayIcon className="h-6 w-6" />
                      </button>
                      <button className="text-gray-500">
                        <ForwardIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
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
