import Layout from '@components/common/Layout'
import Navbar from '@components/common/Navbar'
import { ThemeProvider } from '@emotion/react'
import splitbee from '@splitbee/web'
import 'normalize.css'
import 'photoswipe/style.css'
import { useEffect } from 'react'
import 'swiper/css'
import { theme } from 'theme/theme'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    splitbee.init()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Navbar />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
