import React, { useContext } from 'react'
import { UserForm } from '../components/userForm'
import { useRegisterMutation } from '../container/RegisterMutation'
import { AppContext } from '../context/AppContext'

export const NotRegisterUser = () => {
  const { activateAuth } = useContext(AppContext)
  const { mutation, mutationLoading, mutationError } = useRegisterMutation()
  return (
    <>
      <UserForm
        mutation={mutation}
        onSubmitForm={activateAuth}
        loading={mutationLoading}
        error={mutationError}
        title='Registrarse'
      />
    </>
  )
}
