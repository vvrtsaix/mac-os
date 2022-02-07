import Image from 'next/image'
import React, { FC, useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'

interface Props {
  size?: number
}

const SiriButton: FC<Props> = ({ size = 24 }) => {
  const video = useRef<HTMLVideoElement>(null)

  return (
    <button
      className="h-6 rounded px-3 align-middle focus:bg-white/30 active:bg-white/30"
      onClick={() => {
        video.current?.play()
        toast(
          <div className="flex flex-col items-center justify-center gap-2 p-1 text-sm text-white-text">
            <SiriText />
            <video
              loop
              autoPlay
              width={48}
              height={48}
              className="rounded-full"
              poster="images/siri-orb.png"
            >
              <source src="videos/siri-orb.mp4" type="video/mp4" />
            </video>
          </div>,
          {
            position: toast.POSITION.TOP_RIGHT,
            role: 'siri',
            className: 'top-8 right-2 bg-slate-700/80',
            autoClose: 8000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          }
        )
      }}
    >
      <Image
        width={size}
        height={size}
        src="/images/siri-orb.png"
        alt="siri-orb"
      />
    </button>
  )
}

const SiriText: FC = () => {
  const [text, setText] = useState('What can I help you with?')
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setText("Go ahead. I'm listening...")
    }, 2000)
    return () => clearTimeout(timeOut)
  }, [])
  return <span>{text}</span>
}

export default SiriButton
