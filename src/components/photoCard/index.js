/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'

import { ImgWrapper, Img, Article } from './styles'

import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'

import { FavButton } from '../favButton'

// import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'
// import { gql, useMutation } from '@apollo/client'
// const LIKE_PHOTO = gql`
//     mutation LikeAnonymousPhoto($input: LikePhoto!) {
//       likeAnonymousPhoto(input: $input) {
//         id,
//         liked,
//         likes
//       }
//     }
// `
import { useMuationToogleLike } from '../../container/ToggleLikeMutation'

const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  // const [likeAnonymousPhoto, { data, loading, error }] = useMutation(LIKE_PHOTO)
  // if (loading) return 'Submitting...'
  // if (error) return `Submission error! ${error.message}`
  // console.log(data)

  const [show, element] = useNearScreen()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const { mutation, mutationLoading, mutationError } = useMuationToogleLike()

  const handleFavClick = () => {
    // !liked && likeAnonymousPhoto({ variables: { liked } }).then(() => {
    // })
    !liked && mutation({
      variables: {
        input: { id }
      }
    })
    setLiked(!liked)
  }

  return (
    <Article ref={element}>
      {
        show && <>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
        </>
      }
      <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
    </Article>
  )
}
