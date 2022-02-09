import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ApplicationRecord } from 'type'

export interface DockState {
  pinnedItems: ApplicationRecord[]
}

const initialState: DockState = {
  pinnedItems: [
    {
      key: 'siri',
      label: 'Siri',
      icon: '/images/siri.png',
    },
    {
      key: 'terminal',
      label: 'Terminal',
      icon: '/images/terminal.png',
    },
    {
      key: 'music',
      label: 'Music',
      icon: '/images/music.png',
    },
    {
      key: 'facetime',
      label: 'Facetime',
      icon: '/images/facetime.png',
    },
    {
      key: 'calculator',
      label: 'Calculator',
      icon: '/images/calculator.png',
    },
    {
      key: 'notes',
      label: 'Notes',
      icon: '/images/notes.png',
    },
    {
      key: 'mail',
      label: 'Mail',
      icon: '/images/mail.png',
    },
  ],
}

export const dockSlice = createSlice({
  name: 'dock',
  initialState,
  reducers: {
    pin: (state, action: PayloadAction<ApplicationRecord>) => {
      state.pinnedItems = [...state.pinnedItems, action.payload]
    },
    unpin: (state, action: PayloadAction<string>) => {
      state.pinnedItems = state.pinnedItems.filter(
        (item) => item.key !== action.payload
      )
    },
  },
})

export const dockActions = dockSlice.actions

export default dockSlice.reducer
