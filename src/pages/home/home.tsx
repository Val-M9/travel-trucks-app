import { Button } from '../../components'
import styles from './home.module.css'

const Home = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>Campers of your dreams</h1>
        <p className={styles.description}>
          You can find everything you want in our catalog
        </p>
        <Button style={styles.btn}>View Now</Button>
      </div>
    </section>
  )
}

export default Home
