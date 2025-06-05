import type React from 'react'
import type { ContainerProps } from './types'
import styles from './container.module.css'

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}

export default Container
