import { createSlice } from '@reduxjs/toolkit'
import type { AllTrucksDto, TruckDto } from '../common/types'
import { fetchAllTrucks } from './trucksActions'
import type { RootState } from './store'

interface TrucksState {
  trucks: AllTrucksDto
  isLoading: boolean
  error: null | string
}

const initialState: TrucksState = {
  trucks: { items: [], total: 0 },
  isLoading: false,
  error: null,
}

const trucksSlice = createSlice({
  name: 'trucks',
  initialState,
  reducers: {
    // Need empty reducers for types to work properly
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTrucks.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchAllTrucks.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.trucks = payload
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

export const selectTruckById = (
  state: RootState,
  truckId: TruckDto['id']
): TruckDto | undefined => {
  return state.trucks.trucks.items.find((truck) => truck.id === truckId)
}
