import SearchIcon from 'icons/search.svg'
import React, { FC, useState } from 'react'
import SearchModal from './modal'

interface Props {}

const Search: FC<Props> = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <button
        className="flex h-6 items-center justify-center rounded px-3 align-middle focus:bg-white/30 focus-visible:outline-none focus-visible:ring-0 active:bg-white/30"
        onClick={() => {
          setVisible(true)
        }}
      >
        <SearchIcon className="h-4 w-4" />
      </button>
      <SearchModal visible={visible} onClose={() => setVisible(false)} />
    </>
  )
}

export default Search
