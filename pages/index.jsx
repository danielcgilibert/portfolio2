import Presentation from '@components/Presentation'
import Proyects from '@components/Proyects'
import styled from '@emotion/styled'
import Head from 'next/head'
import { bps } from 'theme/bps'

export const MainStyled = styled.main`
  /* display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100% 100%;
  grid-row-gap: 30px;
  ${bps.mobile} {
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  } */

  ${bps.mobile} {
    padding: 40px;
  }
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Daniel Carmona Gilibert</title>
        <meta name="description" content="website of daniel carmona gilibert" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://cdn.splitbee.io/sb.js"></script>
      </Head>

      <MainStyled>
        <Presentation />
        <Proyects />
      </MainStyled>
    </>
  )
}
