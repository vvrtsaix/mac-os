import dayjs from 'dayjs'
import React, { FC, useEffect, useState } from 'react'

interface Props {
  showSeconds?: boolean
}

const Datetime: FC<Props> = ({ showSeconds = false }) => {
  const [date, setDate] = useState(dayjs())
  useEffect(() => {
    const timer = setInterval(() => setDate(dayjs()), 1000)
    return () => clearInterval(timer)
  }, [])
  return (
    <button
      className="h-6 w-36 rounded px-3 align-middle text-sm focus:bg-white/30 active:bg-white/30"
      onClick={() => {
        alert('not implemented')
      }}
    >
      {date.format(showSeconds ? 'ddd D MMM HH:mm:ss' : 'ddd D MMM HH:mm')}
    </button>
  )
}

export default Datetime
