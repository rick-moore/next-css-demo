import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.pathname}/>
      </AnimatePresence>
    </>
  )
}

export default MyApp
