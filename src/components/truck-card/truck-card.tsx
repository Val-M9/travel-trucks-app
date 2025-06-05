import type React from 'react'
import type { TruckDto } from '../../common/types'
import { IconHeart, IconStar, IconMap } from '../icons'
import { Button, TruckFeatures } from '../'
import styles from './truck-card.module.css'

const TruckCard: React.FC<TruckDto> = ({
  name,
  price,
  gallery,
  rating,
  reviews,
  location,
  description,
  transmission,
  engine,
  AC,
  bathroom,
  kitchen,
  TV,
  radio,
  refrigerator,
  microwave,
  gas,
  water,
}) => {
  const featuresList = [
    {
      type: 'transmission' as const,
      value: transmission as 'manual' | 'automatic',
    },
    {
      type: 'engine' as const,
      value: engine as 'petrol' | 'diesel' | 'hybrid',
    },
    { type: 'AC' as const, value: AC },
    { type: 'bathroom' as const, value: bathroom },
    { type: 'kitchen' as const, value: kitchen },
    { type: 'TV' as const, value: TV },
    { type: 'radio' as const, value: radio },
    { type: 'refrigerator' as const, value: refrigerator },
    { type: 'microwave' as const, value: microwave },
    { type: 'gas' as const, value: gas },
    { type: 'water' as const, value: water },
  ]
    .filter((feature) => feature.value)
    .slice(0, 4)

  return (
    <div className={styles.card}>
      <img className={styles.image} src={gallery[1].original} />
      <div className={styles.content}>
        <div className={styles.heading}>
          <h2 className={styles.title}>{name}</h2>
          <p className={styles.price}>
            €{price.toFixed(2)}
            <IconHeart className={styles.heartIcon} />
          </p>
        </div>
        <div className={styles.overview}>
          <div>
            <IconStar className={styles.starIcon} />
            <span>{rating}</span>
            <span className={styles.reviews}>({reviews.length} Reviews)</span>
          </div>
          <div>
            <IconMap className={styles.mapIcon} />
            <span className={styles.location}>{location}</span>
          </div>
        </div>
        <div className={styles.description}>{description}</div>
        <div className={styles.features}>
          {featuresList.map((feature, index) => (
            <TruckFeatures key={index} feature={feature} />
          ))}
        </div>
        <Button className={styles.btn}>Show more</Button>
      </div>
    </div>
  )
}

export default TruckCard
