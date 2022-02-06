import React, { FC } from 'react'
import LeftMenu from './left'
import RightMenu from './right'

interface Props {}

const MenuBar: FC<Props> = () => {
  return (
    <nav
      aria-label="menu-bar"
      className="flex flex-row items-center justify-between bg-[#5a78b495] px-4 py-1 text-[#fcffff]"
    >
      <LeftMenu />
      <RightMenu />
    </nav>
  )
}

export default MenuBar
