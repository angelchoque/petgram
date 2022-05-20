/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'

import { ListOfCategories } from './components/listOfCategories'
import { ListOfPhotoCards } from './components/listOfPhotoCards'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'

import { GlobalStyle } from './styles/globalStyles'

import { Logo } from './components/logo'

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  // console.log(detailId)
  return (
    <>
      <GlobalStyle />
      <Logo />
      {
        detailId
          ? <PhotoCardWithQuery id={detailId} />
          : <>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={1} />
          </>
      }
    </>
  )
}

export default App
