/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaRegUserCircle } from 'react-icons/fa'

import { Form, Input, Button, Title, Text } from './styles'

export const UserForm = ({ mutation, onSubmitForm, title, loading, error }) => {
  const form = useRef(null)
  let location = useLocation()

  const handleSubmit = (e) => {
    const formData = new FormData(form.current)
    const formEntries = Object.fromEntries(formData)
    mutation({ variables: { input: { ...formEntries } } }).then(res => {
      res.data.signup ? onSubmitForm(res.data.signup) : onSubmitForm(res.data.login)
    })
    e.preventDefault()
  }

  const ButtonText = () => (
    location.pathname === '/register'
      ? <Text>¿Ya tienes cuenta? <Link to='/login'>Inicia Sesión.</Link></Text>
      : <Text>¿Aún no tienes cuenta? <Link to='/register'>Crea una cuenta.</Link></Text>
  )

  return (
    <>
      <Title><FaRegUserCircle size='32px' /></Title>
      <Form disabled={loading} ref={form} onSubmit={handleSubmit}>
        <Input disabled={loading} type='text' name='email' placeholder='Email' />
        <Input disabled={loading} type='password' name='password' placeholder='Password' />
        <Button disabled={loading} type='submit'>{title}</Button>
        <ButtonText />
      </Form>
      {error && 'error'}
    </>
  )
}
