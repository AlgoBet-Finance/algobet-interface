import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IMatch } from 'interfaces/components/IMatch'

export interface BetSlipState {
  count: number
  listBet: IMatch[]
}

export const initialState: BetSlipState = {
  count: 0,
  listBet: [],
}

const betSlice = createSlice({
  name: 'betSlip',
  initialState,
  reducers: {
    addBet: (state, action) => {
      const betItem = action.payload
      state.listBet = [...state.listBet, betItem]
      console.log(initialState, betItem)
    },
    updateBet: (state, action) => {
      const betItem = action.payload
      console.log(initialState, betItem)
    },
    clearBet: (state) => {
      console.log(state)
    },
  },
})

export const { addBet, updateBet, clearBet } = betSlice.actions

export default betSlice.reducer
