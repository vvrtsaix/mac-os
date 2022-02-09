import { Dialog, Transition } from '@headlessui/react'
import SearchIcon from 'icons/search.svg'
import React, { FC, Fragment } from 'react'

type Props = {
  visible: boolean
  onClose: () => void
}

const SearchModal: FC<Props> = ({ visible, onClose }) => {
  return (
    <Transition appear show={visible} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={onClose}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-2xl transform overflow-hidden rounded-xl bg-gray-200/80 align-[25vh] shadow-2xl backdrop-blur-3xl transition-all">
              <SearchIcon className="pointer-events-none absolute top-1/2 left-4 h-6 w-6 -translate-y-1/2 select-none text-gray-500" />
              <input
                type="text"
                placeholder="Spotlight Search"
                className="w-full border-none bg-transparent py-3 pl-16 pr-4 align-middle text-3xl text-black-text outline-none ring-0 placeholder:text-slate-500/40 focus:border-none focus:outline-none focus:ring-0"
              />
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

export default SearchModal
