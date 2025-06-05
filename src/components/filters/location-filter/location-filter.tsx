import type React from 'react'
import styles from './location-filter.module.css'
import { IconMap } from '../../icons'

const SearchLocation: React.FC = () => {
  return (
    <div>
      <p className={styles.filter}>Location</p>
      <div className={styles.inputWrapper}>
        <IconMap className={styles.icon} />
        <input className={styles.input} placeholder="City" />
      </div>
    </div>
  )
}

export default SearchLocation
