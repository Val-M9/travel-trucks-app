import type React from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../store/store'
import { selectError, selectTruckById } from '../../store/selectors'
import { Container, IconStar } from '../'
import styles from './reviews.module.css'

const Reviews: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const truck = useAppSelector((state) => id && selectTruckById(state, id))
  const error = useAppSelector(selectError)

  if (error) {
    return <Container>{error}</Container>
  }
  return (
    <ul className={styles.wrapper}>
      {truck &&
        truck.reviews.map((review) => (
          <li key={review.reviewer_name} className={styles.review}>
            <div className={styles.overview}>
              <div className={styles.avatar}>
                {review.reviewer_name.charAt(0).toLocaleUpperCase()}
              </div>
              <div>
                <h3 className={styles.name}>{review.reviewer_name}</h3>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, index) => (
                    <IconStar
                      key={index}
                      className={`${styles.star} ${
                        index < review.reviewer_rating && styles.active
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className={styles.comment}>{review.comment}</p>
          </li>
        ))}
    </ul>
  )
}

export default Reviews
