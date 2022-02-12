import WindowActions from 'components/window-actions'
import React, { FC, useState } from 'react'
import { Rnd, Position } from 'react-rnd'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { finderActions } from 'redux/slices/finder'

interface Props {}

type Size = {
  width: string | number
  height: string | number
}

const Finder: FC<Props> = () => {
  const dispatch = useAppDispatch()
  const visible = useAppSelector(({ finder }) => finder.visible)
  const [position, setPosition] = useState<Position>({ x: 100, y: 100 })
  const [size, setSize] = useState<Size>({ width: 1000, height: 500 })

  return visible ? (
    <Rnd
      size={size}
      position={position}
      minWidth={500}
      minHeight={300}
      enableUserSelectHack
      bounds="#main-content"
      onDragStop={(_, delta) => {
        setPosition({ x: delta.x, y: delta.y })
      }}
      onResizeStop={(_, __, ref, ___, position) => {
        setSize({
          width: parseFloat(ref.style.width),
          height: parseFloat(ref.style.height),
        })
        setPosition(position)
      }}
    >
      <div className="flex h-full w-full flex-row overflow-hidden rounded-md ring-1 ring-slate-600/30">
        <div className="flex w-48 items-start justify-start bg-orange-100/80 p-2 backdrop-blur-3xl">
          <div className="p-2">
            <WindowActions
              onClickClose={() => {
                dispatch(finderActions.close())
              }}
              onClickMinimize={() => {
                dispatch(finderActions.close())
              }}
              onClickFullscreen={() => {
                const mainContent = document.getElementById('main-content')!
                setSize({
                  width: mainContent.clientWidth,
                  height: mainContent.clientHeight,
                })
                setPosition({ x: 0, y: 0 })
              }}
            />
          </div>
        </div>
        <div className="grow bg-white p-2">Main</div>
      </div>
    </Rnd>
  ) : (
    <></>
  )
}

export default Finder
