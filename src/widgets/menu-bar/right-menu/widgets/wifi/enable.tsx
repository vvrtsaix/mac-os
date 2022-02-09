import { Switch } from '@headlessui/react'
import classNames from 'classnames'
import React, { FC } from 'react'

interface Props {
  enabled: boolean
  onChange: (value: boolean) => void
}

const EnableWifi: FC<Props> = ({ enabled, onChange }) => {
  return (
    <div className="flex flex-row items-center justify-between whitespace-nowrap px-2 py-0.5 text-xs text-black-text">
      <span>Wi-Fi</span>
      <Switch
        checked={enabled}
        onChange={onChange}
        className={`${enabled ? 'bg-primary' : 'bg-gray-500'}
      relative inline-flex h-[1.1rem] w-7 flex-shrink-0 cursor-pointer rounded-full border border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use Wi-Fi</span>
        <span
          aria-hidden="true"
          className={classNames(
            enabled ? 'translate-x-2.5' : 'translate-x-0',
            'pointer-events-none inline-block h-[0.95rem] w-[0.95rem] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out'
          )}
        />
      </Switch>
    </div>
  )
}

export default EnableWifi
