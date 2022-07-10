import { List, Sun, Translate } from 'phosphor-react'
import { NavbarStyled } from './styles'

const Navbar = ({ children }) => {
  return (
    <NavbarStyled>
      <span>Daniel Carmona Gilibert</span>

      <List size={20} weight="bold" className="iconMobile" />
      <div>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
          <Sun size={20} />
          <Translate size={20} />
        </ul>
      </div>
    </NavbarStyled>
  )
}

export default Navbar
