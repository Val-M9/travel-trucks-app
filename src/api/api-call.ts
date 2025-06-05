import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { AllTrucksDto } from '../common/types'

class TrucksService {
  #api: AxiosInstance

  constructor() {
    this.#api = axios.create({
      baseURL: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/',
    })
  }

  async getAll(): Promise<AllTrucksDto> {
    const { data } = await this.#api.get<AllTrucksDto>('campers')
    return data
  }
}

export const trucksService = new TrucksService()
