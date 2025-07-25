import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { useDispatch, useSelector } from 'react-redux'
import { trucksReducer } from './trucksSlice'
import { filtersReducer } from './filtersSlice'
import { favoritesReducer } from './favoritesSlice'

const persistTrucksConfig = {
  key: 'trucks',
  storage,
}

const persistFavoritesConfig = {
  key: 'favorites',
  storage,
}

const persistedTrucksReducer = persistReducer(
  persistTrucksConfig,
  trucksReducer
)

const persistedFavoritesReducer = persistReducer(
  persistFavoritesConfig,
  favoritesReducer
)

const rootReducer = {
  trucks: persistedTrucksReducer,
  filters: filtersReducer,
  favorites: persistedFavoritesReducer,
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
