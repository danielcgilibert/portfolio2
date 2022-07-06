import styled from '@emotion/styled'

export const NavbarStyled = styled.nav`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-weight: lighter;

  & ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 21px;
    margin-right: 24px;
  }

  & li {
    cursor: pointer;
  }

  & li:hover {
    border-bottom: 1px solid black;
  }
`
