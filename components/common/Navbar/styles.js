import styled from '@emotion/styled'
import { bps } from 'theme/bps'

export const NavbarStyled = styled.nav`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  margin-right: 15px;
  width: 90%;
  margin: auto;
  padding: 15px;

  & div {
    display: none;
  }

  & span {
    display: none;
  }

  ${bps.desktop} {
    padding: 0px;
    width: 50%;
    margin-top: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    font-weight: bolder;

    & div {
      display: block;
    }

    & span {
      display: block;
    }

    .iconMobile {
      display: none;
    }
    & ul {
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 21px;
      margin-right: 10px;
    }

    & li {
      cursor: pointer;
    }

    & li:hover {
      border-bottom: 1px solid black;
    }
  }
`
