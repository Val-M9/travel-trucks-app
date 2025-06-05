import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from './common/constants'
import { Loader, MainLayout } from './components'
import './styles/reset.css'
import './styles/global.css'
import { useSelector } from 'react-redux'
import { selectIsLoading } from './store/trucksSlice'

const HomePage = lazy(() => import('./pages/home/home'))
const CatalogPage = lazy(() => import('./pages/catalog/catalog'))

function App() {
  const isLoading = useSelector(selectIsLoading)

  return (
    <MainLayout>
      <Suspense fallback={<Loader isLoading={isLoading} />}>
        <Routes>
          <Route path={routes.HOME} element={<HomePage />} />
          <Route path={routes.CATALOG} element={<CatalogPage />} />
        </Routes>
      </Suspense>
    </MainLayout>
  )
}

export default App
