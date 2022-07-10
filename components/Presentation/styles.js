import styled from '@emotion/styled'
import { bps } from 'theme/bps'

export const PresentationStyled = styled.div`
  text-align: center;
  flex-direction: column;
  justify-content: flex-start;

  & h1 {
    font-size: 1.9rem;
    margin: 0;
    font-weight: bold;
    line-height: 1.22;
  }

  & p {
    font-size: 1.03rem;
  }

  & button {
    margin: 15px 10px 10px 10px;

    ${bps.desktop} {
      margin: 0px 20px 0px 0px;
    }
  }

  ${bps.desktop} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
  }

  ${bps.desktop2k} {
    & h1 {
      font-size: 3rem;
      margin: 0;
      font-weight: bold;
      line-height: 1.22;
    }

    & p {
      font-size: 1.4rem;
    }
  }
`
export const ContainerPr = styled.article`
  grid-template-columns: 1fr;
  grid-template-rows: 90% 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  .img-desktop {
    display: none;
  }

  ${bps.desktop} {
    margin-top: 40px;
    display: grid;
    grid-template-columns: 65% 1fr;
    grid-template-rows: 100%;
    grid-column-gap: 30px;

    .img-desktop {
      display: block;
    }

    .img-mobile {
      display: none;
    }
  }

  ${bps.desktop2k} {
    margin-top: 5rem;
  }
`

export const ImageProfileStyled = styled.img`
  grid-template-rows: 1fr 2fr;
  box-shadow: 0px 4px 8px -1px rgba(0, 0, 0, 0.39);
  border-radius: 18px;
  width: 50%;

  ${bps.desktop} {
    width: 100%;
    height: 100%;
  }
`
