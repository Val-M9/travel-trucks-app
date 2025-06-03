import { NavLink } from 'react-router-dom'
import { routes } from '../../common/constants'
import { Logo } from '../icons'
import styles from './style.module.css'

const Header = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `${styles.navLink} ${isActive && styles.active}`

  return (
    <header className={styles.header}>
      <NavLink to={routes.HOME}>
        <Logo className={styles.logo} />
      </NavLink>
      <nav className={styles.nav}>
        <NavLink to={routes.HOME} className={linkClass}>
          Home
        </NavLink>
        <NavLink to={routes.CATALOG} className={linkClass}>
          Catalog
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
