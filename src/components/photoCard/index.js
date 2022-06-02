/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { Link } from 'react-router-dom'

import { ImgWrapper, Img, Article } from './styles'

import { useNearScreen } from '../../hooks/useNearScreen'

import { FavButton } from '../favButton'

import { useMuationToogleLike } from '../../container/ToggleLikeMutation'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()

  const { mutation, mutationLoading, mutationError } = useMuationToogleLike()
  if (mutationLoading) return 'Submitting...'
  if (mutationError) return `Submission error! ${mutationError.message}`

  const handleFavClick = () => {
    mutation({ variables: { input: { id } } })
  }

  return (
    <Article ref={element}>
      {
        show && <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
        </>
      }
      <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
    </Article>
  )
}
