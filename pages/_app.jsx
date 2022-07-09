import Layout from '@components/common/Layout'
import Navbar from '@components/common/Navbar'
import { ThemeProvider } from '@emotion/react'
import 'normalize.css'
import 'photoswipe/style.css'
import 'swiper/css'
import { theme } from 'theme/theme'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
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
