import CloseIcon from 'icons/close.svg'
import FullScreenIcon from 'icons/fullscreen.svg'
import MinimizeIcon from 'icons/minimize.svg'
import React, { FC } from 'react'
import SystemActionButton from './item'

interface Props {
  onClickClose?: () => void
  onClickMinimize?: () => void
  onClickFullscreen?: () => void
}

const WindowActions: FC<Props> = ({
  onClickClose,
  onClickMinimize,
  onClickFullscreen,
}) => {
  return (
    <div className="group flex flex-row items-center justify-start gap-2">
      {onClickClose && (
        <SystemActionButton className="bg-red-500" onClick={onClickClose}>
          <CloseIcon className="h-3 w-3" />
        </SystemActionButton>
      )}
      {onClickMinimize && (
        <SystemActionButton className="bg-yellow-500" onClick={onClickMinimize}>
          <MinimizeIcon className="h-3 w-3" />
        </SystemActionButton>
      )}
      {onClickFullscreen && (
        <SystemActionButton
          className="bg-green-500"
          onClick={onClickFullscreen}
        >
          <FullScreenIcon className="h-3 w-3" />
        </SystemActionButton>
      )}
    </div>
  )
}

export default WindowActions
