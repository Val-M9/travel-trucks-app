import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from './common/constants'
import { selectIsLoading } from './store/trucksSlice'
import { useAppSelector } from './store/store'
import { Loader, MainLayout } from './components'
import './styles/reset.css'
import './styles/global.css'

const HomePage = lazy(() => import('./pages/home/home'))
const CatalogPage = lazy(() => import('./pages/catalog/catalog'))
const DetailsPage = lazy(() => import('./pages/details/details'))
const TruckFeatures = lazy(
  () => import('./components/truck-features/truck-features')
)
const Reviews = lazy(() => import('./components/reviews/reviews'))

function App() {
  const isLoading = useAppSelector(selectIsLoading)

  return (
    <MainLayout>
      <Suspense fallback={<Loader isLoading={isLoading} />}>
        <Routes>
          <Route path={routes.HOME} element={<HomePage />} />
          <Route path={routes.CATALOG} element={<CatalogPage />} />
          <Route path={`${routes.CATALOG}/:id`} element={<DetailsPage />}>
            <Route path={routes.FEATURES} element={<TruckFeatures />} />
            <Route path={routes.REVIEWS} element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </MainLayout>
  )
}

export default App
