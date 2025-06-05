import { DotLoader } from 'react-spinners'
import styles from './Loader.module.css'

const Loader = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <DotLoader className={styles.loader} color="#101828" loading={isLoading} />
  )
}

export default Loader
