import { Sun, Translate } from 'phosphor-react'
import { NavbarStyled } from './styles'

const Navbar = ({ children }) => {
  return (
    <NavbarStyled>
      <span>Daniel Carmona Gilibert</span>

      <ul>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
        <Sun size={20} weight="light" />
        <Translate size={20} weight="light" />
      </ul>
    </NavbarStyled>
  )
}

export default Navbar
