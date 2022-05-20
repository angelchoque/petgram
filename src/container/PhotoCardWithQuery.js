import React from 'react'
import { PhotoCard } from '../components/photoCard'
import { useGetPhotoWithQuery } from '../hooks/useGetPhotoWithQuery'
import { Loading } from '../components/loading'

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useGetPhotoWithQuery(id)
  if (loading) return <Loading />
  if (error) return <div>error</div>

  return (
    <>
      <a href='/'>BACK</a>
      <PhotoCard {...data.photo} />
    </>
  )
}
