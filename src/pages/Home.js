import React from 'react'
import { useParams } from 'react-router-dom'
import { ListOfCategories } from '../components/listOfCategories'
import { ListOfPhotoCards } from '../components/listOfPhotoCards'

export const Home = () => {
  const params = useParams()
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={params.id} />
    </>
  )
}
