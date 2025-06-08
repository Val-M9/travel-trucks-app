import type React from 'react'
import { IconMap } from '../../'
import type { LocationFilterProps } from './types'
import styles from './location-filter.module.css'

const LocationFilter: React.FC<LocationFilterProps> = ({ value, onChange }) => {
  return (
    <div>
      <p className={styles.filter}>Location</p>
      <div className={styles.inputWrapper}>
        <IconMap className={styles.icon} />
        <input
          className={styles.input}
          placeholder="City"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  )
}

export default LocationFilter
