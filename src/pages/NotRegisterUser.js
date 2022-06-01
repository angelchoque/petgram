import React, { useContext } from 'react'
import { UserForm } from '../components/userForm'
import { useRegisterMutation } from '../container/RegisterMutation'
import { AppContext } from '../context/AppContext'

export const NotRegisterUser = () => {
  const { activateAuth } = useContext(AppContext)
  const { mutation, mutationLoading, mutationError } = useRegisterMutation()
  if (mutationLoading) return 'Submitting...'
  if (mutationError) return `Submission error! ${mutationError.message}`
  return (
    <>

      {/* <RegisterMutation>
        <UserForm aproveAuth={activateAuth} title='sign in' />
      </RegisterMutation> */}

      {/* <RegisterMutation>
        {
          (register) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              register({ variables }).then(activateAuth)
            }
            return <UserForm onSubmit={onSubmit} title='Registrarse' />
          }
        }
      </RegisterMutation> */}
      <UserForm onSubmit={activateAuth} title='Iniciar sesión' />
    </>
  )
}
