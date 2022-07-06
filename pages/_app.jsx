import Layout from '@components/common/Layout'
import Navbar from '@components/common/Navbar'
import 'normalize.css'
import 'photoswipe/style.css'
import 'swiper/css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Navbar />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
