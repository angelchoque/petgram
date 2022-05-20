/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { GlobalStyle } from './styles/globalStyles'
import { Logo } from './components/logo'
import { Detail } from './pages/Detail'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Logo />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pet/:id' element={<Home />} />
          <Route path='/detail/:detailId' element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
