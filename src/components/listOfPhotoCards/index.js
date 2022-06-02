import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { PhotoCard } from '../photoCard'

const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`
// Componente de orden superior: una funcion que se le pasa como parametro un componente y devuelve otro componente con mejorar o props inyectadas

export const ListOfPhotoCards = ({ categoryId }) => {
  const { data, loading, error } = useQuery(GET_PHOTOS, { variables: { categoryId } }) // destructuras la data y el estado de loading y error
  if (loading) return 'Loading...' // manejas el estado para que no te saque error mientras hace el fetch
  if (error) return <pre>{error.message}</pre>
  console.log(data)
  return (
    <ul>
      {data.photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
      {/* {data.photos.map(photo => <PhotoCard key={photo.id} id={photo.id} src={photo.src} likes={photo.likes} liked={photo.liked} />)} */}
    </ul>
  )
}
