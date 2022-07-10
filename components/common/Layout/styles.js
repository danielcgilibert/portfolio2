import styled from '@emotion/styled'
import { bps } from 'theme/bps'

export const LayoutStyled = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;

  ${bps.desktop} {
    width: 50%;
  }

  ${bps.tablet} {
    width: 60%;
  }
`
