import Presentation from '@components/Presentation'
import Proyects from '@components/Proyects'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Daniel Carmona Gilibert</title>
        <meta name="description" content="website of daniel carmona gilibert" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <Presentation />
        <Proyects />
      </main>
    </>
  )
}
