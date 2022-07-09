import styled from '@emotion/styled'
import { bps } from 'theme/bps'

export const LayoutStyled = styled.div`
  width: 50%;
  height: 100%;
  margin: auto;

  ${bps.mobile} {
    width: 100%;
  }
`
