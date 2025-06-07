import { useEffect } from 'react'
import {
  selectAllTrucks,
  selectError,
  selectIsLoading,
} from '../../store/trucksSlice'
import { fetchAllTrucks } from '../../store/trucksActions'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { Container, Filters, Loader, TrucksList } from '../../components'
import styles from './catalog.module.css'

const CatalogPage = () => {
  const trucks = useAppSelector(selectAllTrucks)
  const isLoading = useAppSelector(selectIsLoading)
  const error = useAppSelector(selectError)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllTrucks())
  }, [dispatch])

  if (isLoading) {
    return <Loader isLoading={isLoading} />
  }

  if (error) {
    return <Container>{error}</Container>
  }

  return (
    <Container>
      <div className={styles.catalog}>
        <Filters />
        <main>
          <TrucksList trucks={trucks} />
        </main>
      </div>
    </Container>
  )
}

export default CatalogPage
