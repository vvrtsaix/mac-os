import React, { FC } from 'react'
import LeftMenu from './left'
import RightMenu from './right'

interface Props {}

const MenuBar: FC<Props> = () => {
  return (
    <nav
      aria-label="menu-bar"
      className="flex flex-row items-center justify-between bg-primary/10 px-4 text-[#fcffff] backdrop-blur"
    >
      <LeftMenu />
      <RightMenu />
    </nav>
  )
}

export default MenuBar
