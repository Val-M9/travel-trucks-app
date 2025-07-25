import { useEffect } from 'react'
import {
  selectError,
  selectIsLoading,
  selectHasMore,
  selectFilteredTrucks,
} from '../../store/selectors'
import { fetchAllTrucks } from '../../store/trucksActions'
import { useAppDispatch, useAppSelector } from '../../store/store'
import {
  Button,
  Container,
  FiltersForm,
  Loader,
  TrucksList,
} from '../../components'
import styles from './catalog.module.css'
import { incrementPage } from '../../store/trucksSlice'

const CatalogPage = () => {
  const trucks = useAppSelector(selectFilteredTrucks)
  const isLoading = useAppSelector(selectIsLoading)
  const error = useAppSelector(selectError)
  const hasMore = useAppSelector(selectHasMore)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (trucks.items.length === 0) {
      dispatch(fetchAllTrucks())
    }
  }, [dispatch, trucks.items.length])

  const handleLoadMore = () => {
    dispatch(incrementPage())
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
        <FiltersForm />
        <section className={styles.trucksList}>
          {trucks.items.length === 0 ? (
            <p>Sorry no trucks available for your filter params</p>
          ) : (
            <>
              <TrucksList trucks={trucks.items} />
              {hasMore && (
                <Button
                  variant="outlined"
                  className={styles.btn}
                  onClick={handleLoadMore}
                  disabled={isLoading}>
                  {isLoading ? 'Loading...' : 'Load more'}
                </Button>
              )}
            </>
          )}
        </section>
      </div>
    </Container>
  )
}

export default CatalogPage
