import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from './common/constants'
import { MainLayout } from './components'
import './styles/reset.css'
import './styles/global.css'

const Home = lazy(() => import('./pages/home/home'))

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
      </Routes>
    </MainLayout>
  )
}

export default App
