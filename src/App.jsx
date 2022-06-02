/* eslint-disable react/jsx-closing-tag-location */
import React, { useContext } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { GlobalStyle } from './styles/globalStyles'
import { Logo } from './components/logo'
import { Detail } from './pages/Detail'
import { NavBar } from './components/navBar'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisterUser } from './pages/NotRegisterUser'
import { AppContext } from './context/AppContext'
import { Login } from './pages/Login'

const App = () => {
  // const [isLogged, setIsLogged] = useState(false)
  const { isAuth } = useContext(AppContext)

  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Logo />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pet/:id' element={<Home />} />
          <Route path='/detail/:detailId' element={<Detail />} />
          {/* <Route path='/favs' element={<Favs />} />
          <Route path='/user' element={<User />} /> */}
          {/* <Route path='/detail/:detailId' element={<Detail />} /> */}
          <Route path='/favs' element={isAuth ? <Favs /> : <NotRegisterUser />} />
          <Route path='/user' element={isAuth ? <User /> : <NotRegisterUser />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<NotRegisterUser />} />
        </Routes>
        <NavBar />
      </BrowserRouter>
    </>
  )
}

export default App
