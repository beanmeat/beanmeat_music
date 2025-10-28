import { createSlice } from '@reduxjs/toolkit'
import { useAppSelector } from '@/store/hook'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 1000
  },
  reducers: {
    changeCountAction(state, { payload }) {
      state.count = payload
    }
  }
})

export const { changeCountAction } = counterSlice.actions
export default counterSlice.reducer
