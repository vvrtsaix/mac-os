import { Popover, Transition } from '@headlessui/react'
import MenuDivider from 'components/menu-divider'
import MenuLabel from 'components/menu-label'
import WifiIcon from 'icons/wifi.svg'
import React, { FC, Fragment } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { settingsActions } from 'redux/slices/settings'
import RightMenuButton from '../../components/button'
import SwitchWifi from './switch'
import WifiList from './wifi-list'

interface Props {}

const WiFi: FC<Props> = () => {
  const dispatch = useAppDispatch()
  const enableWiFi = useAppSelector(({ settings }) => settings.enableWiFi)

  return (
    <Popover className="relative">
      {() => (
        <>
          <Popover.Button className="flex h-6 items-center justify-center rounded px-3 align-middle focus:bg-white/30 focus-visible:outline-none focus-visible:ring-0 active:bg-white/30">
            <WifiIcon className="h-5 w-5" />
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
                <SwitchWifi
                  enabled={enableWiFi}
                  onChange={(_value) => {
                    dispatch(settingsActions.setWiFi(_value))
                  }}
                />
                {enableWiFi && (
                  <>
                    <MenuDivider />
                    <MenuLabel htmlFor="wifi-list">Preferred Network</MenuLabel>
                    <WifiList id="wifi-list" />
                    <MenuDivider />
                    <RightMenuButton>
                      <MenuLabel padding="p-0">Other Networks</MenuLabel>
                    </RightMenuButton>
                  </>
                )}
                <MenuDivider />
                <RightMenuButton>Network Preferences...</RightMenuButton>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export default WiFi
