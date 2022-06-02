import React from 'react'
import { useParams } from 'react-router-dom'
import { ListOfCategories } from '../components/listOfCategories'
import { ListOfPhotoCards } from '../components/listOfPhotoCards'

const HomePage = () => {
  const params = useParams()
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={params.id} />
    </>
  )
}

// export const Home = React.memo(HomePage, (prevProps, props) => {
//   return prevProps.id === props.id
// })
export const Home = React.memo(HomePage)
