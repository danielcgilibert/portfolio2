import styled from '@emotion/styled'

export const CardStyled = styled.div`
  width: 200px;
  height: 210px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px -1px rgba(0, 0, 0, 0.39);
  text-align: center;

  & img {
    width: 100%;
    max-height: 100px;
    object-fit: cover;
    border-radius: 10px 10px 0px 0px;
  }

  & .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
