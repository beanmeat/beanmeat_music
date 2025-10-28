import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './modules/counter'

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})

type GetStateFnType = typeof store.getState
type DispatchFnType = typeof store.dispatch

export type DispatchType = DispatchFnType
export type IRootState = ReturnType<GetStateFnType>

export default store
