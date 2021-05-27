import '../styles/tailwind.css'
import { useState, useEffect, useMemo, useLayoutEffect } from 'react'
import { useRouter } from 'next/router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import * as Fathom from 'fathom-client'

const usePreEffect = (fn) => {
  useMemo(fn, [])
}

function MyApp({ Component, pageProps }) {
  const [colors, setColor] = useState(['red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink', 'black'])
  const [selectedColor, setSelectedColor] = useState('black')
  const router = useRouter()

  useEffect(() => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    setSelectedColor(color)
  }, [])


  useEffect(() => {
    // Initialize Fathom when the app loads
    Fathom.load(process.env.NEXT_PUBLIC_FATHOM_SITE_ID, {
      includedDomains: ['caribbeanjs.org'],
    })

    function onRouteChangeComplete() {
      Fathom.trackPageview()
    }
    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete)

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [])

  return (
    <>
      <Component {...pageProps} colorSelection={selectedColor} />
      <ToastContainer />
    </>
  )
}

export default MyApp
