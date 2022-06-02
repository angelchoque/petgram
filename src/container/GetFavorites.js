import React from 'react'
import { ListOfFavs } from '../components/listOfFavs'
import { useQuery, gql } from '@apollo/client'

const GET_FAVORITES = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`

const FavsWithQuery = () => {
  const { loading, data, error } = useQuery(GET_FAVORITES, {
    fetchPolicy: 'cache-and-network'
  })
  return { loading, data, error }
}

export const RenderProp = () => {
  const { loading, data, error } = FavsWithQuery()
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>
  // console.log(data)
  const { favs } = data
  return <ListOfFavs favs={favs} />
}
