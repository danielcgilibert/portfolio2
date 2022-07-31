import styled from '@emotion/styled'
import { bps } from 'theme/bps'

export const Wrapper = styled.nav`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-right: 2.1875rem;
  padding-top: 10px;
  & span {
    display: none;
  }

  & svg {
    cursor: pointer;
  }

  .iconMobile {
    cursor: pointer;
  }

  ${bps.desktop} {
    width: 50%;
    justify-content: space-between;
    margin: auto;

    & span {
      display: block;
    }

    .iconMobile {
      display: none;
    }
  }
`
export const MenuMobile = styled.div`
  position: absolute;
  height: ${(props) => (props.open ? '180px' : 0)};
  width: 50%;
  background: gray;
  background-image: url('./images/bg3.png');
  transition: height 0.4s ease-in-out;
  border-radius: 15px;
  left: 42%;
  top: 10%;

  ${bps.desktop} {
    display: none;
  }
`

export const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 42%;
  top: 40%;
  transform: translate(-50%, -50%);
  color: black;
  transition: all 0.3s ease;
  opacity: ${(props) => (props.open ? 1 : 0)};
  text-align: center;

  li {
    font-size: 20px;
    transition: opacity 0.4s ease-in-out;
    margin: 10px;
  }

  li:nth-child(1) {
    display: flex;
    justify-content: space-around;
  }
`

export const Menu = styled.ul`
  max-width: 100%;
  list-style: none;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 21px;
  display: none;

  ${bps.desktop} {
    padding: 0px;
    margin-top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: bolder;
    margin-right: 5px;

    & li {
      cursor: pointer;
    }

    & li:hover {
      border-bottom: 1px solid black;
    }
  }
`
