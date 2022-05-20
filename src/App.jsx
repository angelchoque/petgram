import React from 'react'
import { ListOfCategories } from './components/listOfCategories'
import { ListOfPhotoCards } from './components/listOfPhotoCards'
import { GlobalStyle } from './styles/globalStyles'
import { Logo } from './components/logo'
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCards categoryId={1} />
    </>
  )
}

export default App
