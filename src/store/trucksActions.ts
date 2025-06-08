import { createAsyncThunk } from '@reduxjs/toolkit'
import { trucksService } from '../api/api-call'
import type { AllTrucksDto } from '../common/types'
import type { RootState } from './store'

const fetchAllTrucks = createAsyncThunk<
  AllTrucksDto,
  void,
  { rejectValue: string; state: RootState }
>('trucks/fetchAllTrucks', async (_, thunkApi) => {
  try {
    const state = thunkApi.getState()
    const data = await trucksService.getAll(state.trucks.currentPage)
    return data
  } catch (e: unknown) {
    if (e instanceof Error) {
      return thunkApi.rejectWithValue(e.message)
    }
    return thunkApi.rejectWithValue('An unknown error occurred')
  }
})

export { fetchAllTrucks }
