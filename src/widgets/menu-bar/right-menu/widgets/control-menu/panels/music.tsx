import ForwardIcon from 'icons/forward.svg'
import MusicIcon from 'icons/music.svg'
import PlayIcon from 'icons/play.svg'
import React, { FC } from 'react'
import ControlPanel from '../components/panel'

interface Props {}

const MusicPanel: FC<Props> = () => {
  return (
    <ControlPanel col="col-span-4">
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
  )
}

export default MusicPanel
