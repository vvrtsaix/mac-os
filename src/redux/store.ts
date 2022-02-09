import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import dockReducer from './slices/dock'
import settingsReducer from './slices/settings'

const store = configureStore({
  reducer: {
    dock: dockReducer,
    settings: settingsReducer,
  },
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store
