import type React from 'react'
import { Link } from 'react-router-dom'
import type { TruckDto } from '../../common/types'
import { routes } from '../../common/constants'
import { formatLocation, formatPrice } from '../../helpers'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { selectFavorites } from '../../store/selectors'
import { addToFavorites, removeFromFavorites } from '../../store/favoritesSlice'
import { IconHeart, IconStar, IconMap, Button, FeaturesList } from '../'
import styles from './truck-card.module.css'
interface TruckCardProps {
  truck: TruckDto
}

const TruckCard: React.FC<TruckCardProps> = ({ truck }) => {
  const {
    id,
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
  } = truck

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

  const favorites = useAppSelector(selectFavorites)
  const dispatch = useAppDispatch()
  const isInFavorites = favorites?.some((favorite) => favorite.id === id)

  const toggleFavorite = () => {
    if (isInFavorites) {
      dispatch(removeFromFavorites(id))
    } else {
      dispatch(addToFavorites(truck))
    }
  }

  return (
    <div className={styles.card}>
      <img className={styles.image} src={gallery[0].thumb} alt={name} />
      <div className={styles.content}>
        <div className={styles.heading}>
          <h2 className={styles.title}>{name}</h2>
          <p className={styles.price}>
            €{formatPrice(price)}
            <button onClick={toggleFavorite}>
              <IconHeart
                className={`${styles.heartIcon} ${isInFavorites && styles.heartIconRed}`}
              />
            </button>
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
            <span className={styles.location}>{formatLocation(location)}</span>
          </div>
        </div>
        <div className={styles.description}>{description}</div>
        <div className={styles.features}>
          {featuresList.map((feature) => (
            <FeaturesList key={feature.type} feature={feature} />
          ))}
        </div>
        <Link
          to={`${routes.CATALOG}/${id}`}
          target="_blank"
          rel="noopener noreferrer">
          <Button className={styles.btn}>Show more</Button>
        </Link>
      </div>
    </div>
  )
}

export default TruckCard
