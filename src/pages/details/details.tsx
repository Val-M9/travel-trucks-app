import type React from 'react'
import { useEffect } from 'react'
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom'
import { useAppSelector } from '../../store/store'
import { selectError, selectTruckById } from '../../store/trucksSlice'
import { routes } from '../../common/constants'
import { formatLocation, formatPrice } from '../../helpers'
import { IconMap, IconStar, Container, BookForm } from '../../components/'
import styles from './details.module.css'

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const truck = useAppSelector((state) => id && selectTruckById(state, id))
  const error = useAppSelector(selectError)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.pathname.match(/\/catalog\/\d+$/)) {
      navigate(`${location.pathname}/${routes.FEATURES}`, { replace: true })
    }
  }, [location.pathname, navigate])

  const linkClass = ({ isActive }: { isActive: boolean }) => {
    return `${styles.link} ${isActive ? styles.active : ''}`
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
              <img
                key={obj.thumb}
                className={styles.image}
                src={obj.thumb}
                alt={truck.name}
              />
            ))}
          </div>
          <div className={styles.description}>{truck.description}</div>
          <div>
            <div className={styles.links}>
              <NavLink className={linkClass} to={routes.FEATURES}>
                Features
              </NavLink>
              <NavLink className={linkClass} to={routes.REVIEWS}>
                Reviews
              </NavLink>
            </div>
            <div className={styles.additional}>
              <Outlet />
              <BookForm />
            </div>
          </div>
        </main>
      )}
    </Container>
  )
}

export default Details
