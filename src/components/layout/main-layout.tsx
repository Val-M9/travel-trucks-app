import type React from 'react'
import type { LayoutProps } from './types'
import { Header } from '../'

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default MainLayout
