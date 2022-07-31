import { Sun, Translate } from 'phosphor-react'
import { useState } from 'react'
import HamburgerMenu from 'react-hamburger-menu'
import { Menu, MenuMobile, OverlayMenu, Wrapper } from './styles'

const Navbar = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false)
  console.log(openMenu)
  return (
    <Wrapper>
      <span>Daniel Carmona Gilibert</span>
      <HamburgerMenu
        isOpen={openMenu}
        menuClicked={() => setOpenMenu(!openMenu)}
        width={15}
        height={12}
        strokeWidth={2}
        rotate={0}
        color="black"
        className="iconMobile "
        borderRadius={0}
        animationDuration={0.4}
      />
      {/* <List
        size={20}
        weight="bold"
        className="iconMobile "
        onClick={() => setOpenMenu(!openMenu)}
      /> */}

      <Menu open={openMenu}>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
        <Sun size={20} />
        <Translate size={20} />
      </Menu>

      <MenuMobile open={openMenu}>
        <OverlayMenu open={openMenu}>
          <li>
            <Sun size={20} />
            <Translate size={20} />
          </li>

          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </OverlayMenu>
      </MenuMobile>
    </Wrapper>
  )
}

export default Navbar
