import React, { FC } from 'react'

interface Props {
  id: string
  label?: string
  max?: number
  min?: number
  step?: number
  prefix?: React.ReactNode
  suffix?: React.ReactNode
}

const ControlRangeInput: FC<Props> = ({
  id,
  label,
  prefix,
  suffix,
  min = 0,
  max = 100,
  step = 1,
}) => {
  return (
    <div className="relative flex flex-col">
      <label htmlFor={id} className="mb-1 text-sm font-semibold text-gray-600">
        {label}
      </label>
      {prefix && (
        <span className="pointer-events-none absolute bottom-0.5 left-1.5 select-none text-sm text-gray-400">
          {prefix}
        </span>
      )}
      <div className="flex flex-row items-center justify-between gap-2">
        <input
          type="range"
          id={id}
          min={min}
          max={max}
          step={step}
          className="h-6 w-full appearance-none overflow-hidden rounded-full border border-gray-300 bg-gray-200"
        />
        {suffix}
      </div>
    </div>
  )
}

export default ControlRangeInput
