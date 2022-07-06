import styled from '@emotion/styled'

export const ButtonStyled = styled.button`
  cursor: pointer;
  margin-top: auto;
  transition: all 0.3s;
  font-size: 1.2rem;

  &:hover {
    box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.24);
  }

  &:nth-of-type(1) {
    background-color: black;
    color: white;
    width: ${(props) => (props.width ? props.width : '180px')};
    height: ${(props) => (props.height ? props.height : '42px')};
    background: #000000;

    box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.06);
    border-radius: 5px;
    margin-right: 31px;
  }

  &:nth-of-type(2) {
    color: black;
    width: ${(props) => (props.width ? props.width : '180px')};
    height: ${(props) => (props.height ? props.height : '42px')};
    border: 1px solid rgba(179, 178, 178, 0.52);
    background: white;
    box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.06);
    border-radius: 5px;
  }
`
