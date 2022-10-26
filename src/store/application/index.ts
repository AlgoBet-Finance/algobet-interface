import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import BigNumberJS from 'bignumber.js'

export interface ApplicationState {
  ethBalance: BigNumberJS.Instance | undefined
  trackingTokenBalances: {
    // Null means "Loading".
    // Undefined means "Not available | Can't fetch".
    [address: string]: BigNumberJS.Instance | null | undefined
  }
}

export const initialState: ApplicationState = {
  ethBalance: undefined,
  trackingTokenBalances: {},
}

const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    updateETHBalance: (state, action: PayloadAction<{ ethBalance: BigNumberJS.Instance }>) => {
      state.ethBalance = action.payload.ethBalance
    },
    updateTokenBalance: (state, action: PayloadAction<{ address: string; balance: BigNumberJS.Instance }>) => {
      const { address, balance } = action.payload
      state.trackingTokenBalances[address] = balance
    },
  },
})

export const { updateETHBalance, updateTokenBalance } = applicationSlice.actions

export default applicationSlice.reducer
