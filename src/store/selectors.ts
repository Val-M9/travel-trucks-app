import { createSelector } from '@reduxjs/toolkit'
import type { AllTrucksDto, TruckDto } from '../common/types'
import type { RootState } from './store'

export const selectFilters = (state: RootState) => state.filters

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

export const selectFavorites = (state: RootState): TruckDto[] | undefined => {
  return state.favorites.favorites
}
export const selectFilteredTrucks = createSelector(
  [selectAllTrucks, selectFilters],
  (trucks, filters) => {
    const transmissionTypes = ['automatic', 'manual']
    const engineTypes = ['petrol', 'diesel', 'hybrid']

    const selectedTransmissions = filters.equipment
      .filter((e) => transmissionTypes.includes(e))
      .map((e) => e.toLowerCase())

    const selectedEngines = filters.equipment
      .filter((e) => engineTypes.includes(e))
      .map((e) => e.toLowerCase())

    const selectedEquipment = filters.equipment.filter(
      (e) => !transmissionTypes.includes(e) && !engineTypes.includes(e)
    )

    const filtered = trucks.items.filter((truck) => {
      // Location filter
      if (
        filters.location &&
        !truck.location.toLowerCase().includes(filters.location.toLowerCase())
      ) {
        return false
      }

      // Transmission filter
      if (
        selectedTransmissions.length > 0 &&
        !selectedTransmissions.includes(truck.transmission)
      ) {
        return false
      }

      // Engine filter
      if (
        selectedEngines.length > 0 &&
        !selectedEngines.includes(truck.engine)
      ) {
        return false
      }

      // Equipment filter
      if (
        selectedEquipment.length > 0 &&
        !selectedEquipment.every((e) => truck[e as keyof TruckDto] === true)
      ) {
        return false
      }

      // Type filter
      if (filters.type && truck.form !== filters.type) {
        return false
      }

      return true
    })

    return {
      ...trucks,
      items: filtered,
    }
  }
)
