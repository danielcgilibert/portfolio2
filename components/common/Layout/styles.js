import styled from '@emotion/styled'
import { bps } from 'theme/bps'

export const LayoutStyled = styled.main`
  width: 100%;
  height: 100%;
  margin: auto;
  padding: 40px;

  ${bps.tablet} {
    width: 60%;
    padding: 0px;
  }

  ${bps.desktop} {
    width: 50%;
    padding: 0px;
  }

  ${bps.desktop2k} {
    width: 50%;
    padding: 0px;
  }
`
