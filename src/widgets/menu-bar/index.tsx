import React, { FC } from 'react'
import LeftMenu from './left-menu'
import RightMenu from './right-menu'

interface Props {}

const MenuBar: FC<Props> = () => {
  return (
    <nav
      aria-label="menu-bar"
      className="flex flex-row items-center justify-between bg-primary/10 px-4 text-[#fcffff] backdrop-blur-3xl"
    >
      <LeftMenu />
      <RightMenu />
    </nav>
  )
}

export default MenuBar
