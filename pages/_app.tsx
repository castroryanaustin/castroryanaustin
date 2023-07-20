import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from './components/navbar'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps, }: AppProps) {

    const router = useRouter()
    const pageKey = router.asPath

  return (
    <AnimatePresence initial={false} mode="popLayout">
      <Component key={pageKey} {...pageProps} />
    </AnimatePresence>
  )

}
