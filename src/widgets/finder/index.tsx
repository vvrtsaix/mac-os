import classNames from 'classnames'
import WindowActions from 'components/window-actions'
import React, { FC, useState } from 'react'
import { Rnd, Position } from 'react-rnd'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { finderActions } from 'redux/slices/finder'
import ArrowForwardIcon from 'icons/arrow-forward.svg'

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
      dragHandleClassName="dragHandler"
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
        <div className="flex w-48 items-start justify-start border-r border-slate-400/20 bg-stone-200/80 shadow backdrop-blur-3xl">
          <DraggableHeader>
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
          </DraggableHeader>
        </div>
        <div className="grow bg-white">
          <DraggableHeader className="hover:border-b hover:border-neutral-500/20 hover:shadow">
            <div className="flex flex-row items-center gap-2">
              <button className="rounded p-2 hover:bg-gray-200">
                <ArrowForwardIcon className="h-5 w-5 rotate-180 text-black-text" />
              </button>
              <button>
                <ArrowForwardIcon className="h-5 w-5 text-gray-400" />
              </button>
              <button className="font-bold text-black-text">Uurtsaikh</button>
            </div>
          </DraggableHeader>
          Main
        </div>
      </div>
    </Rnd>
  ) : (
    <></>
  )
}

const DraggableHeader: FC<{ className?: string }> = ({
  className,
  children,
}) => {
  return (
    <div
      className={classNames(
        'dragHandler flex h-12 w-full flex-row items-center p-4',
        className
      )}
    >
      {children}
    </div>
  )
}

export default Finder
