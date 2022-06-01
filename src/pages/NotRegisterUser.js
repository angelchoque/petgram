import React, { useContext } from 'react'
import { UserForm } from '../components/userForm'
import { AppContext } from '../context/AppContext'

export const NotRegisterUser = () => {
  const { activateAuth } = useContext(AppContext)
  return (
    <>
      <UserForm aproveAuth={activateAuth} title='sign in' />
    </>
  )
}
