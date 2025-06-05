import { createAsyncThunk } from '@reduxjs/toolkit'
import { trucksService } from '../api/api-call'
import type { AllTrucksDto } from '../common/types'

const fetchAllTrucks = createAsyncThunk<
  AllTrucksDto,
  undefined,
  { rejectValue: string }
>('trucks/fetchAllTrucks', async (_, thunkApi) => {
  try {
    const data = await trucksService.getAll()
    return data
  } catch (e: unknown) {
    if (e instanceof Error) {
      return thunkApi.rejectWithValue(e.message)
    }
    return thunkApi.rejectWithValue('An unknown error occurred')
  }
})

export { fetchAllTrucks }
