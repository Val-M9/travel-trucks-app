import type React from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../store/store'
import { formatTruckDetail, formatTruckForm } from '../../helpers'
import { selectTruckById } from '../../store/trucksSlice'
import { FeaturesList } from '../'
import styles from './truck-features.module.css'

const TruckDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const truck = useAppSelector((state) => id && selectTruckById(state, id))

  if (!truck) return null

  const featuresList = [
    {
      type: 'transmission' as const,
      value: truck.transmission as 'manual' | 'automatic',
    },
    {
      type: 'engine' as const,
      value: truck.engine as 'petrol' | 'diesel' | 'hybrid',
    },
    { type: 'AC' as const, value: truck.AC },
    { type: 'bathroom' as const, value: truck.bathroom },
    { type: 'kitchen' as const, value: truck.kitchen },
    { type: 'TV' as const, value: truck.TV },
    { type: 'radio' as const, value: truck.radio },
    { type: 'refrigerator' as const, value: truck.refrigerator },
    { type: 'microwave' as const, value: truck.microwave },
    { type: 'gas' as const, value: truck.gas },
    { type: 'water' as const, value: truck.water },
  ]

  const detailsList = [
    { title: 'Form', value: formatTruckForm(truck.form) },
    { title: 'Length', value: formatTruckDetail(truck.length) },
    { title: 'Width', value: formatTruckDetail(truck.width) },
    { title: 'Height', value: formatTruckDetail(truck.height) },
    { title: 'Tank', value: formatTruckDetail(truck.tank) },
    { title: 'Consumption', value: truck.consumption },
  ]

  return (
    <div className={styles.wrapper}>
      <ul className={styles.featuresList}>
        {featuresList.map((feature) => (
          <li key={feature.type}>
            <FeaturesList feature={feature} />
          </li>
        ))}
      </ul>
      <h2 className={styles.detailsTitle}>Vehicle details</h2>
      {detailsList.map((detail) => (
        <div key={detail.title} className={styles.detail}>
          <p>{detail.title}</p>
          <p>{detail.value}</p>
        </div>
      ))}
    </div>
  )
}

export default TruckDetails
