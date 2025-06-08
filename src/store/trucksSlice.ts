import { createSlice } from '@reduxjs/toolkit'
import type { AllTrucksDto, TruckDto } from '../common/types'
import { fetchAllTrucks } from './trucksActions'
import type { RootState } from './store'

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
    resetTrucks: (state) => {
      state.trucks = { items: [], total: 0 }
      state.currentPage = 1
      state.hasMore = true
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
        state.currentPage = state.currentPage + 1

        state.hasMore = state.trucks.items.length < payload.total
      })
      .addCase(fetchAllTrucks.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error = payload || 'Failed to fetch trucks'
      })
  },
})

export const trucksReducer = trucksSlice.reducer

export const selectAllTrucks = (state: RootState): AllTrucksDto => {
  return state.trucks.trucks
}

export const selectIsLoading = (state: RootState): boolean => {
  return state.trucks.isLoading
}

export const selectError = (state: RootState): string | null => {
  return state.trucks.error
}

export const selectCurrentPage = (state: RootState): number => {
  return state.trucks.currentPage
}

export const selectHasMore = (state: RootState): boolean => {
  return state.trucks.hasMore
}

export const selectTruckById = (
  state: RootState,
  truckId: TruckDto['id']
): TruckDto | undefined => {
  return state.trucks.trucks.items.find((truck) => truck.id === truckId)
}
