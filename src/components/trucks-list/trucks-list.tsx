import React from 'react'
import TruckCard from '../truck-card/truck-card'
import type { TruckDto } from '../../common/types'
import styles from './trucks-list.module.css'

interface TrucksListProps {
  trucks: TruckDto[]
}

const TrucksList: React.FC<TrucksListProps> = ({ trucks }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>
        {trucks.map((truck) => (
          <TruckCard key={truck.id} truck={truck} />
        ))}
      </div>
    </div>
  )
}

export default TrucksList
