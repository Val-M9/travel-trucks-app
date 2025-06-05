import type React from 'react'
import { DotLoader } from 'react-spinners'
import type { LoaderProps } from './types'
import styles from './Loader.module.css'

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  return (
    <DotLoader className={styles.loader} color="#101828" loading={isLoading} />
  )
}

export default Loader
