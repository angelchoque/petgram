import React, { useContext } from 'react'
import { UserForm } from '../components/userForm'
import { useLoginMutation } from '../container/LoginMutation'
import { AppContext } from '../context/AppContext'

export const Login = () => {
  const { mutation, mutationLoading, mutationError } = useLoginMutation()
  const { activateAuth } = useContext(AppContext)
  return (
    <>
      <UserForm
        title='Sign In'
        mutation={mutation}
        error={mutationError}
        loading={mutationLoading}
        onSubmitForm={activateAuth}
      />
    </>
  )
}
