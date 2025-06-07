import React from 'react'
import TruckCard from '../truck-card/truck-card'
import type { AllTrucksDto } from '../../common/types'
import { Button } from '../'
import styles from './trucks-list.module.css'

interface TrucksListProps {
  trucks: AllTrucksDto
}

const TrucksList: React.FC<TrucksListProps> = ({ trucks }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>
        {trucks.items.map((truck) => (
          <TruckCard key={truck.id} {...truck} />
        ))}
      </div>
      <Button variant="outlined" className={styles.btn}>
        Load more
      </Button>
    </div>
  )
}

export default TrucksList
