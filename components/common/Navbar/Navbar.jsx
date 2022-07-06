import { Sun, Translate } from 'phosphor-react'
import styles from './Navbar.module.css'

const Navbar = ({ children }) => {
  return (
    <nav className={styles.nav}>
      <span>Daniel Carmona Gilibert</span>

      <ul>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
        <Sun size={20} weight="light" />
        <Translate size={20} weight="light" />
      </ul>
    </nav>
  )
}

export default Navbar
