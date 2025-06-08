import { useEffect } from 'react'
import {
  selectAllTrucks,
  selectError,
  selectIsLoading,
  selectHasMore,
} from '../../store/trucksSlice'
import { fetchAllTrucks } from '../../store/trucksActions'
import { useAppDispatch, useAppSelector } from '../../store/store'
import {
  Button,
  Container,
  Filters,
  Loader,
  TrucksList,
} from '../../components'
import styles from './catalog.module.css'

const CatalogPage = () => {
  const trucks = useAppSelector(selectAllTrucks)
  const isLoading = useAppSelector(selectIsLoading)
  const error = useAppSelector(selectError)
  const hasMore = useAppSelector(selectHasMore)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllTrucks())
  }, [dispatch])

  const handleLoadMore = () => {
    dispatch(fetchAllTrucks())
  }

  if (isLoading && trucks.items.length === 0) {
    return <Loader isLoading={isLoading} />
  }

  if (error) {
    return <Container>{error}</Container>
  }

  return (
    <Container>
      <div className={styles.catalog}>
        <Filters />
        <section className={styles.trucksList}>
          <TrucksList trucks={trucks} />
          {hasMore && (
            <Button
              variant="outlined"
              className={styles.btn}
              onClick={handleLoadMore}
              disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Load more'}
            </Button>
          )}
        </section>
      </div>
    </Container>
  )
}

export default CatalogPage
