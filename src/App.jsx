/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/globalStyles'
import { Logo } from './components/logo'

const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  // console.log(detailId)
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Logo />
        {
          detailId
            ? <PhotoCardWithQuery id={detailId} />
            : (
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/pet/:id' element={<Home />} />
              </Routes>
              )
        }
      </BrowserRouter>
    </>
  )
}

export default App
