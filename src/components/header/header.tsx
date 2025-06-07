import type React from 'react'
import { NavLink } from 'react-router-dom'
import { routes } from '../../common/constants'
import { IconLogo } from '../'
import styles from './header.module.css'

const Header: React.FC = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `${styles.navLink} ${isActive && styles.active}`

  return (
    <header className={styles.header}>
      <NavLink to={routes.HOME}>
        <IconLogo className={styles.logo} />
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
