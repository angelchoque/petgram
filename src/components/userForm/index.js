/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaRegUserCircle } from 'react-icons/fa'

import { Form, Input, Button, Title, Text } from './styles'
export const UserForm = ({ aproveAuth, title }) => {
  const form = useRef(null)
  let location = useLocation()

  const handleSubmit = (e) => {
    const formData = new FormData(form.current)
    const formEntries = Object.fromEntries(formData)
    console.log(formEntries)
    aproveAuth()
    e.preventDefault()
  }

  const ButtonText = () => (
    location.pathname === '/register'
      ? <Text>¿Ya tienes cuenta? <Link to='/login'>Inicia Sesión.</Link></Text>
      : <Text>¿Aún no tienes cuenta? <Link to='/register'>Crea una cuenta.</Link></Text>
  )

  return (
    <>
      <Title><FaRegUserCircle /></Title>
      <Form ref={form}>
        <Input type='text' name='email' placeholder='Email' />
        <Input type='password' name='password' placeholder='Password' />
        <Button onClick={handleSubmit} type='submit'>{title}</Button>
        <ButtonText />
      </Form>
    </>
  )
}
