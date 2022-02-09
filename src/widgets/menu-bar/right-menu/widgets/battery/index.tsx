import { Popover, Transition } from '@headlessui/react'
import MenuDivider from 'components/menu-divider'
import MenuLabel from 'components/menu-label'
import BatteryIcon from 'icons/battery.svg'
import React, { FC, Fragment } from 'react'
import RightMenuButton from '../../components/button'
import AppList from './app-list'

interface Props {}

const Battery: FC<Props> = () => {
  return (
    <Popover className="relative">
      {() => (
        <>
          <Popover.Button className="flex h-6 items-center justify-center rounded px-3 align-middle focus:bg-white/30 focus-visible:outline-none focus-visible:ring-0 active:bg-white/30">
            <BatteryIcon className="h-5 w-5" />
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
            <Popover.Panel className="absolute right-0 z-10 w-52 p-1">
              <div className="rounded bg-white/80 p-1 backdrop-blur-3xl focus:outline-none">
                <MenuLabel>Battery</MenuLabel>
                <span className="w-full whitespace-nowrap px-2 text-left text-xs text-black-text">
                  Power Source: Battery
                </span>
                <MenuDivider />
                <MenuLabel htmlFor="app-list">
                  Using Significant Energy
                </MenuLabel>
                <AppList id="app-list" />
                <MenuDivider />
                <RightMenuButton>Battery Preferences...</RightMenuButton>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export default Battery
