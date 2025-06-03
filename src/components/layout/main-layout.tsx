import type { ReactNode } from 'react'
import Header from '../header/header'
import styles from './styles.module.css'

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className={styles.layout}>{children}</main>
    </>
  )
}

export default MainLayout
