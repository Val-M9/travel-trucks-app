import type React from 'react'
import { IconMap } from '../../'
import styles from './location-filter.module.css'

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
