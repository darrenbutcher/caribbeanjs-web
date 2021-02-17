import '../styles/tailwind.css'
import { useState, useEffect, useMemo, useLayoutEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const usePreEffect = (fn) => {
  useMemo(fn, [])
}

function MyApp({ Component, pageProps }) {
  const [colors, setColor] = useState(['red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink', 'black'])
  const [selectedColor, setSelectedColor] = useState('red')

  useEffect(() => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    setSelectedColor(color)
  }, [])

  return (
    <>
      <Component {...pageProps} colorSelection={selectedColor} />
      <ToastContainer />
    </>
  )
}

export default MyApp
