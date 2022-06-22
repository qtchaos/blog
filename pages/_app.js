import '../styles/globals.css'
import '../styles/catturday.css'
import Layout from "../components/Layout";


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp