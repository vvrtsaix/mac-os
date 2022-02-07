import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import counterReducer from './slices/counter'

const store = configureStore({
  reducer: {
    counter: counterReducer,
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
