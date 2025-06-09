import type React from 'react'
import { DotLoader } from 'react-spinners'
import type { LoaderProps } from './types'
import { Container } from '../'
import styles from './loader.module.css'

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  return (
    <Container>
      <DotLoader
        className={styles.loader}
        color="#101828"
        loading={isLoading}
      />
    </Container>
  )
}

export default Loader
