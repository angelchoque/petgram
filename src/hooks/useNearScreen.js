import { useEffect, useState, useRef } from 'react'

export const useNearScreen = () => {
  // referencia del elemento DOM <- capturar el elemento del DOM
  const element = useRef(null)
  const [show, setshow] = useState(false)
  useEffect(() => {
    // devolver una promesa
    Promise.resolve(
      // hacer un import dinamico <- esto devuelve una promesa
      // Intersection Observer al ser un Pollyfil parcha el objeto window

      // ver si el navegador ya soporta
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    )
      .then(() => {
        const observer = new window.IntersectionObserver(entries => {
          const { isIntersecting } = entries[0]
          if (isIntersecting) {
            // console.log('si')
            setshow(true)
            // evitar que se vuelva a actualizar
            observer.disconnect()
          }
        })
        observer.observe(element.current)
      }) // una vez resuelta la promesa, ya estara disponible de forma global
  }, [element])
  return [show, element]
}
