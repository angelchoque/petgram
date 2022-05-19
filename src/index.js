import React from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import App from './App.jsx'

const client = new ApolloClient({
  uri: 'http://127.0.0.1:4000/graphql',
  cache: new InMemoryCache()
})

const container = document.querySelector('#root')
const root = createRoot(container)

root.render(<ApolloProvider client={client}> <App /> </ApolloProvider>)
