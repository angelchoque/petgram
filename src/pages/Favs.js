import React from 'react'
import { Layout } from '../components/layout'
import { RenderProp } from '../container/GetFavorites'

export const Favs = () => {
  return (
    <Layout title='Favoritos' subtitle=':S'>
      <h1>Favs</h1>
      <RenderProp />
    </Layout>
  )
}
