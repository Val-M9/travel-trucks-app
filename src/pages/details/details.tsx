import type React from 'react'
import { Link, Outlet, useLocation, useParams } from 'react-router-dom'
import { useAppSelector } from '../../store/store'
import {
  selectError,
  selectIsLoading,
  selectTruckById,
} from '../../store/trucksSlice'
import { formatLocation, formatPrice } from '../../helpers'
import { Container, Loader } from '../../components'
import { IconMap, IconStar } from '../../components/icons'
import styles from './details.module.css'
import { routes } from '../../common/constants'

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const location = useLocation()
  const truck = useAppSelector((state) => id && selectTruckById(state, id))
  const isLoading = useAppSelector(selectIsLoading)
  const error = useAppSelector(selectError)

  if (isLoading) {
    return <Loader isLoading={isLoading} />
  }

  if (error) {
    return <Container>{error}</Container>
  }
  return (
    <Container>
      {truck && (
        <main>
          <h2 className={styles.title}>{truck.name}</h2>
          <div className={styles.overview}>
            <div className={styles.rating}>
              <IconStar className={styles.starIcon} />
              <span>{truck.rating}</span>
              <span className={styles.reviews}>
                ({truck.reviews.length} Reviews)
              </span>
            </div>
            <div>
              <IconMap className={styles.mapIcon} />
              <span className={styles.location}>
                {formatLocation(truck.location)}
              </span>
            </div>
          </div>
          <div className={styles.price}>€{formatPrice(truck.price)}</div>
          <div className={styles.imagesBlock}>
            {truck.gallery.map((obj) => (
              <img className={styles.image} src={obj.thumb} alt={truck.name} />
            ))}
          </div>
          <div className={styles.description}>{truck.description}</div>
          <div>
            <div className={styles.links}>
              <Link
                className={`${styles.link} ${location.pathname.includes(routes.FEATURES) ? styles.active : ''}`}
                to={routes.FEATURES}>
                Features
              </Link>
              <Link
                className={`${styles.link} ${location.pathname.includes(routes.REVIEWS) ? styles.active : ''}`}
                to={routes.REVIEWS}>
                Reviews
              </Link>
            </div>
            <Outlet />
            <form></form>
          </div>
        </main>
      )}
    </Container>
  )
}

export default Details
