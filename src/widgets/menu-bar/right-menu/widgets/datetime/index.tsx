import dayjs from 'dayjs'
import React, { FC, useEffect, useState } from 'react'
import Drawer from './drawer'

interface Props {
  showSeconds?: boolean
}

const Datetime: FC<Props> = ({ showSeconds = false }) => {
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState(dayjs())

  useEffect(() => {
    const timer = setInterval(() => setDate(dayjs()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <button
        className="h-6 w-[9.5rem] rounded px-3 align-middle text-sm focus:bg-white/30 focus-visible:outline-none focus-visible:ring-0 active:bg-white/30"
        onClick={() => {
          setOpen(true)
        }}
      >
        {date.format(showSeconds ? 'ddd D MMM HH:mm:ss' : 'ddd D MMM HH:mm')}
      </button>
      <Drawer
        isOpen={open}
        onClose={() => {
          setOpen(false)
        }}
      >
        <div className="flex flex-col">Coming soon</div>
      </Drawer>
    </>
  )
}

export default Datetime
