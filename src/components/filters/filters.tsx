import type React from 'react'
import LocationFilter from './location-filter/location-filter'
import EquipmentFilter from './equipment-filter/equipment-filter'
import TypeFilter from './type-filter/type-filter'
import { Button } from '../'
import styles from './filters.module.css'

const Filters: React.FC = () => {
  return (
    <div>
      <LocationFilter />
      <h2 className={styles.sectionTitle}>Filters</h2>
      <EquipmentFilter />
      <TypeFilter />
      <Button className={styles.btn}>Search</Button>
    </div>
  )
}

export default Filters
