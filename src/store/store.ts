import { configureStore } from '@reduxjs/toolkit'
import { trucksReducer } from './trucksSlice'
import { useDispatch, useSelector } from 'react-redux'

const rootReducer = {
  trucks: trucksReducer,
}

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
