import styled from '@emotion/styled'
import { bps } from 'theme/bps'

export const ButtonStyled = styled.button`
  cursor: pointer;
  margin-top: auto;
  transition: all 0.3s;
  font-size: 1.2rem;
  background-color: black;
  width: ${(props) => (props.width ? props.width : '180px')};
  height: ${(props) => (props.height ? props.height : '42px')};

  ${(props) =>
    props.background
      ? `background: ${props.background} ; color: white;`
      : `background: white; color: black;`}

  border: 1px solid rgba(179, 178, 178, 0.52);
  box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  &:hover {
    box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.24);
  }

  ${bps.desktop2k} {
    width: ${(props) => (props.width ? props.width : '43%')};
    height: ${(props) => (props.height ? props.height : '45px')};
  }
`
