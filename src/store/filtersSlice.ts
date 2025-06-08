import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface FiltersState {
  location: string
  equipment: string[]
  type: string
}

const initialState: FiltersState = {
  location: '',
  equipment: [],
  type: '',
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setLocationFilter: (state, action: PayloadAction<string>) => {
      state.location = action.payload
    },
    setEquipmentFilter: (state, action: PayloadAction<string[]>) => {
      state.equipment = action.payload
    },
    setTypeFilter: (state, action: PayloadAction<string>) => {
      state.type = action.payload
    },
    resetFilters: (state) => {
      state.location = ''
      state.equipment = []
      state.type = ''
    },
  },
})

export const {
  setLocationFilter,
  setEquipmentFilter,
  setTypeFilter,
  resetFilters,
} = filtersSlice.actions

export const filtersReducer = filtersSlice.reducer
