import styled from '@emotion/styled'
import { bps } from 'theme/bps'

export const PresentationStyled = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${bps.mobile} {
    text-align: center;
    flex-direction: column;
    justify-content: flex-start;
  }

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

    ${bps.mobile} {
      margin: 15px 0px 10px 0px;
    }
  }
`
export const ContainerPr = styled.div`
  display: grid;
  grid-template-columns: 65% 1fr;
  grid-template-rows: 100%;
  grid-column-gap: 30px;

  ${bps.mobile} {
    grid-template-columns: 1fr;
    grid-template-rows: 90% 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
`

export const ImageProfileStyled = styled.img`
  box-shadow: 0px 4px 8px -1px rgba(0, 0, 0, 0.39);
  border-radius: 18px;
  width: 100%;
  max-height: 100%;
  margin-left: auto;

  ${bps.mobile} {
    grid-template-rows: 1fr 2fr;
  }
`
