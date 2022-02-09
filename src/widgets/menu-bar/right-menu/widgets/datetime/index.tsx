import dayjs from 'dayjs'
import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { settingsActions } from 'redux/slices/settings'

const Datetime: FC = () => {
  const [date, setDate] = useState(dayjs())

  const dispatch = useAppDispatch()
  const { showSeconds } = useAppSelector(({ settings }) => ({
    showSeconds: settings.showSeconds,
  }))

  useEffect(() => {
    const timer = setInterval(() => setDate(dayjs()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <button
      className="h-6 w-[9.5rem] rounded px-3 align-middle text-sm focus:bg-white/30 focus-visible:outline-none focus-visible:ring-0 active:bg-white/30"
      onClick={() => {
        dispatch(settingsActions.setShowSeconds(!showSeconds))
      }}
    >
      {date.format(showSeconds ? 'ddd D MMM HH:mm:ss' : 'ddd D MMM HH:mm')}
    </button>
  )
}

export default Datetime
