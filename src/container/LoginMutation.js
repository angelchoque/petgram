import { useMutation, gql } from '@apollo/client'

const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login (input: $input)
  }
`

export const useLoginMutation = () => {
  const [mutation, { loading: mutationLoading, error: mutationError }] = useMutation(LOGIN)
  return { mutation, mutationLoading, mutationError }
}
