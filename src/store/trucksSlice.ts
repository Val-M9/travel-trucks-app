import { createSlice } from '@reduxjs/toolkit'
import type { AllTrucksDto } from '../common/types'
import { fetchAllTrucks } from './trucksActions'

interface TrucksState {
  trucks: AllTrucksDto
  isLoading: boolean
  error: null | string
  currentPage: number
  hasMore: boolean
}

const initialState: TrucksState = {
  trucks: { items: [], total: 0 },
  isLoading: false,
  error: null,
  currentPage: 1,
  hasMore: true,
}

const trucksSlice = createSlice({
  name: 'trucks',
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.currentPage += 1
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTrucks.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchAllTrucks.fulfilled, (state, { payload }) => {
        state.isLoading = false

        state.trucks.items = [...state.trucks.items, ...payload.items]
        state.trucks.total = payload.total

        state.hasMore = state.trucks.items.length < payload.total
      })
      .addCase(fetchAllTrucks.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error = payload || 'Failed to fetch trucks'
      })
  },
})

export const trucksReducer = trucksSlice.reducer
export const { incrementPage } = trucksSlice.actions
