/* eslint-disable react/jsx-closing-tag-location */
import React, { useEffect, useRef, useState } from 'react'
import { ImgWrapper, Img, Button, Article } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

const useLocalStorage = (key, initialValue) => {
  // podemos pasar una funcion que retorne el valor
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue
    } catch (e) {
      return initialValue
    }
  })

  const setLocalStorage = value => {
    try {
      value
        ? window.localStorage.setItem(key, JSON.stringify(value))
        : window.localStorage.removeItem(key, JSON.stringify(value))
      setStoredValue(value)
    } catch (e) {
      console.error(e)
    }
  }

  return [storedValue, setLocalStorage]
}
export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  // referencia del elemento DOM <- capturar el elemento del DOM
  const element = useRef(null)
  const [show, setshow] = useState(false)
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)

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

  // Primera letra mayuscula para que React lo pueda renderizar como componente
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={element}>
      {
        show && <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <Button onClick={() => setLiked(!liked)}>
            <Icon size='32px' /> {likes} likes!
          </Button>
        </>
      }

    </Article>
  )
}
