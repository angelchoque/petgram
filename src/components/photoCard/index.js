/* eslint-disable react/jsx-closing-tag-location */
import React, { useEffect, useRef, useState } from 'react'
import { ImgWrapper, Img, Button, Article } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  // referencia del elemento DOM <- capturar el elemento del DOM
  const element = useRef(null)
  const key = `like-${id}`
  const [show, setshow] = useState(false)
  // podemos pasar una funcion que retorne el valor
  const [liked, setLiked] = useState(() => {
    try {
      const like = window.localStorage.getItem(key)
      return like
    } catch (e) {
      return false
    }
  })

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

  const setLocalStorage = value => {
    try {
      value
        ? window.localStorage.setItem(key, value)
        : window.localStorage.removeItem(key, value)
      setLiked(value)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Article ref={element}>
      {
        show && <>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <Button onClick={() => setLocalStorage(!liked)}>
            <Icon size='32px' /> {likes} likes!
          </Button>
        </>
      }

    </Article>
  )
}
