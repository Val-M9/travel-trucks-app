import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { TruckDto } from '../common/types'

interface FavoritesState {
  favorites: TruckDto[]
}

const initialState: FavoritesState = {
  favorites: [],
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites(state, action: PayloadAction<TruckDto>) {
      state.favorites.push(action.payload)
    },
    removeFromFavorites(state, action: PayloadAction<string>) {
      state.favorites = state.favorites.filter(
        (favorite) => favorite.id !== action.payload
      )
    },
  },
})

export const favoritesReducer = favoritesSlice.reducer
export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions
