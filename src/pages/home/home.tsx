import { Link } from 'react-router-dom'
import { Button } from '../../components'
import styles from './home.module.css'
import { routes } from '../../common/constants'

const HomePage = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Campers of your dreams</h1>
        <p className={styles.description}>
          You can find everything you want in our catalog
        </p>
        <Link to={routes.CATALOG}>
          <Button className={styles.btn}>View Now</Button>
        </Link>
      </div>
    </section>
  )
}

export default HomePage
