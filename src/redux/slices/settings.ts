import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { wifiList } from 'data-sources'

export interface SettingsState {
  enableWiFi: boolean
  enableBluetooth: boolean
  enableAirdrop: boolean
  enableFocus: boolean
  showSeconds: boolean
  brightness: number
  volume: number
  batteryPercent: number
  selectedWiFi?: string
}

const initialState: SettingsState = {
  enableWiFi: true,
  enableBluetooth: false,
  enableAirdrop: false,
  enableFocus: false,
  showSeconds: true,
  brightness: 100,
  volume: 75,
  batteryPercent: 100,
}

export const setWiFi = createAsyncThunk(
  'settings/setWiFi',
  async (_value: boolean) =>
    new Promise<string | undefined>((resolve) => {
      setTimeout(
        () => {
          resolve(_value ? wifiList[0].value : undefined)
        },
        _value ? 625 : 0
      )
    })
)

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setBluetooth: (state, action: PayloadAction<boolean>) => {
      state.enableBluetooth = action.payload
    },
    setAirdrop: (state, action: PayloadAction<boolean>) => {
      state.enableAirdrop = action.payload
    },
    setFocus: (state, action: PayloadAction<boolean>) => {
      state.enableFocus = action.payload
    },
    setShowSeconds: (state, action: PayloadAction<boolean>) => {
      state.showSeconds = action.payload
    },
    setBrightness: (state, action: PayloadAction<number>) => {
      state.brightness = action.payload
      document.body.style.filter = `brightness(${action.payload}%)`
    },
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload
    },
    setBatteryPercent: (state, action: PayloadAction<number>) => {
      state.batteryPercent = action.payload
    },
    selectWiFi: (state, action: PayloadAction<string | undefined>) => {
      state.selectedWiFi = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setWiFi.pending, (state, action) => {
        state.enableWiFi = action.meta.arg
      })
      .addCase(setWiFi.fulfilled, (state, action) => {
        state.selectedWiFi = action.payload
      })
  },
})

export const settingsActions = { ...settingsSlice.actions, setWiFi }

export default settingsSlice.reducer
