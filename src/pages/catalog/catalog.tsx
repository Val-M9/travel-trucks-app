import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import {
  selectAllTrucks,
  selectError,
  selectIsLoading,
} from '../../store/trucksSlice'
import { fetchAllTrucks } from '../../store/trucksActions'
import { useAppDispatch } from '../../store/store'
import { Container, Filters, Loader, TrucksList } from '../../components'
import styles from './catalog.module.css'

const CatalogPage = () => {
  const trucks = useSelector(selectAllTrucks)
  const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectError)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllTrucks())
  }, [dispatch])

  if (isLoading) {
    return (
      <Container>
        <Loader isLoading={isLoading} />
      </Container>
    )
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
