import React, { createContext, useState } from 'react'
import { useApolloClient } from '@apollo/client'

const AppContext = createContext(null)

const AppProvider = (props) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  })

  const client = useApolloClient()

  const activateAuth = (token) => {
    setIsAuth(true)
    window.sessionStorage.setItem('token', token)
  }

  const removeAuth = () => {
    setIsAuth(false)
    window.sessionStorage.removeItem('token')
    client.resetStore()
  }

  return (
    <AppContext.Provider value={{ isAuth, activateAuth, removeAuth }}>
      {props.children}
    </AppContext.Provider>
  )
}

export {
  AppContext, AppProvider
}
