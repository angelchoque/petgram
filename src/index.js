import React from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { setContext } from '@apollo/client/link/context'
import App from './App.jsx'
import { AppProvider } from './context/AppContext.js'

const httpLink = createHttpLink({
  uri: 'http://127.0.0.1:4000/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token = window.sessionStorage.getItem('token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    )
  }
  // if (networkError) console.log(`[Network error]: ${networkError}`)
  if (networkError && networkError.result.code === 'invalid_token') {
    window.sessionStorage.removeItem('token')
    window.location.href = '/'
  }
})

const client = new ApolloClient({
  link: errorLink.concat(authLink.concat(httpLink)),
  cache: new InMemoryCache()
})

const container = document.querySelector('#root')
const root = createRoot(container)

root.render(<ApolloProvider client={client}><AppProvider><App /></AppProvider></ApolloProvider>)

// https://www.apollographql.com/docs/react/networking/authentication/
// https://www.apollographql.com/docs/react/networking/advanced-http-networking/#customizing-request-logic
