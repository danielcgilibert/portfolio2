import Presentation from '@components/Presentation'
import Proyects from '@components/Proyects'
import styled from '@emotion/styled'
import Head from 'next/head'

export const MainStyled = styled.main`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 65% 35%;
  grid-column-gap: 0px;
  grid-row-gap: 30px;
  margin-top: 40px;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Daniel Carmona Gilibert</title>
        <meta name="description" content="website of daniel carmona gilibert" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainStyled>
        <Presentation />
        <Proyects />
      </MainStyled>
    </>
  )
}
