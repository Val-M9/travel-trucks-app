import type React from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../store/store'
import { selectError, selectTruckById } from '../../store/trucksSlice'
import { Container } from '../'
import styles from './reviews.module.css'

const Reviews: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const truck = useAppSelector((state) => id && selectTruckById(state, id))
  const error = useAppSelector(selectError)

  const linkClass = ({ isActive }: { isActive: boolean }) => {
    return `${styles.link} ${isActive ? styles.active : ''}`
  }

  if (error) {
    return <Container>{error}</Container>
  }
  return <div>Reviews</div>
}

export default Reviews
