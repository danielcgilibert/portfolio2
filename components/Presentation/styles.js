import styled from '@emotion/styled'

export const PresentationStyled = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & h1 {
    font-size: 1.9rem;
    margin: 0;
    font-weight: bold;
  }

  & p {
    font-size: 1.03rem;
  }

  & button {
    margin: 0px 20px 0px 0px;
  }
`

export const ImageProfileStyled = styled.img`
  box-shadow: 0px 4px 8px -1px rgba(0, 0, 0, 0.39);
  border-radius: 18px;
  max-width: 100%;
  max-height: 100%;
  margin-left: auto;
`
