import React from 'react'
import { Logo } from '../components/logo'
import { NavBar } from '../components/navBar'
import { GlobalStyle } from '../styles/globalStyles'

export const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Logo />
    {children}
    <NavBar />
  </>
)
