import type { ReactNode } from 'react'
import { Header } from '../'

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default MainLayout
