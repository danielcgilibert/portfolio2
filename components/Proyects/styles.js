import styled from '@emotion/styled'
import { Swiper } from 'swiper/react'
import { bps } from 'theme/bps'

export const ProyectsStyled = styled.article`
  margin-top: 15px;
  text-align: center;
  grid-column-start: 1;
  grid-column-end: 3;
  height: 50px;
  padding-top: 15px;

  & h1 {
    margin: 0;
  }

  ${bps.desktop} {
    margin-top: 50px;

    text-align: left;

    grid-column-start: 1;
    grid-column-end: 3;
    height: 50px;
    padding-top: 15px;

    & h1 {
      margin: 0;
    }
  }
`

export const SwipperStyled = styled(Swiper)`
  width: 100%;
  cursor: grab;
  padding: 3px 3px;

  &:active {
    cursor: grabbing;
  }
`
