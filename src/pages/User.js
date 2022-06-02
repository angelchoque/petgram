import React, { useContext } from 'react'
import { SubmitButton } from '../components/submitbutton'
import { AppContext } from '../context/AppContext'

export const User = () => {
  const { removeAuth } = useContext(AppContext)
  return (
    <>
      <div>User</div>
      <SubmitButton onClick={removeAuth}>Cerrar</SubmitButton>
    </>
  )
}
