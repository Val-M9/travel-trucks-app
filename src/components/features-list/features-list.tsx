import React from 'react'
import type { FeaturesListProps } from './types'
import {
  IconAir,
  IconCup,
  IconDiagram,
  IconFridge,
  IconMicrowave,
  IconPetrol,
  IconRadio,
  IconShower,
  IconStove,
  IconTV,
  IconWater,
} from '../icons'
import styles from './features-list.module.css'

const FeaturesList: React.FC<FeaturesListProps> = ({ feature }) => {
  if (!feature.value) return null

  switch (feature.type) {
    case 'transmission':
      return (
        <div className={styles.feature}>
          <IconDiagram className={styles.icon} />
          <span>
            {feature.value.charAt(0).toUpperCase() + feature.value.slice(1)}
          </span>
        </div>
      )
    case 'engine':
      return (
        <div className={styles.feature}>
          <IconPetrol className={styles.icon} />
          <span>
            {feature.value.charAt(0).toUpperCase() + feature.value.slice(1)}
          </span>
        </div>
      )
    case 'AC':
      return (
        <div className={styles.feature}>
          <IconAir className={styles.icon} />
          <span>AC</span>
        </div>
      )
    case 'bathroom':
      return (
        <div className={styles.feature}>
          <IconShower className={styles.icon} />
          <span>Bathroom</span>
        </div>
      )
    case 'kitchen':
      return (
        <div className={styles.feature}>
          <IconCup className={styles.icon} />
          <span>Kitchen</span>
        </div>
      )
    case 'TV':
      return (
        <div className={styles.feature}>
          <IconTV className={styles.icon} />
          <span>TV</span>
        </div>
      )
    case 'radio':
      return (
        <div className={styles.feature}>
          <IconRadio className={styles.icon} />
          <span>Radio</span>
        </div>
      )
    case 'refrigerator':
      return (
        <div className={styles.feature}>
          <IconFridge className={styles.icon} />
          <span>Refrigerator</span>
        </div>
      )
    case 'microwave':
      return (
        <div className={styles.feature}>
          <IconMicrowave className={styles.icon} />
          <span>Microwave</span>
        </div>
      )
    case 'gas':
      return (
        <div className={styles.feature}>
          <IconStove className={styles.icon} />
          <span>Gas</span>
        </div>
      )
    case 'water':
      return (
        <div className={styles.feature}>
          <IconWater className={styles.icon} />
          <span>Water</span>
        </div>
      )
    default:
      return null
  }
}

export default FeaturesList
