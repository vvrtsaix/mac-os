import { createSlice } from '@reduxjs/toolkit'

export interface FinderState {
  visible: boolean
}

const initialState: FinderState = {
  visible: true,
}

export const finderSlice = createSlice({
  name: 'finder',
  initialState,
  reducers: {
    show: (state) => {
      state.visible = true
    },
    close: (state) => {
      state.visible = false
    },
  },
})

export const finderActions = finderSlice.actions

export default finderSlice.reducer
