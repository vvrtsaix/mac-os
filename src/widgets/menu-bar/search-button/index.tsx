import SearchIcon from 'icons/search.svg'
import React, { FC } from 'react'
import { toast } from 'react-toastify'

interface Props {}

const SearchButton: FC<Props> = () => {
  return (
    <button
      className="flex h-6 items-center justify-center rounded px-3 align-middle focus:bg-white/30 focus-visible:outline-none focus-visible:ring-0 active:bg-white/30"
      onClick={() => {
        toast('Hello search', {
          autoClose: 8000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        })
      }}
    >
      <SearchIcon className="h-4 w-4" />
    </button>
  )
}

export default SearchButton
