// // import { Mutation } from '@apollo/client/react/components'
// import { gql, useMutation } from '@apollo/client'

// const LIKE_PHOTO = gql`
//     mutation likeAnonymousPhoto($input: LikePhoto!) {
//       likeAnonymousPhoto(input: $input) {
//         id,
//         liked,
//         likes
//       }
//     }
// `

// export const ToggleLikeMutation = ({ chilrend }) => {
//   const [likeAnonymousPhoto, { data, loading, error }] = useMutation(LIKE_PHOTO)

//   if (loading) return 'Submitting...'
//   if (error) return `Submission error! ${error.message}`

//   return { loading, error, data }
// }
import { useMutation, gql } from '@apollo/client'
const MUTATION_LIKE_PHOTO = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
      likeAnonymousPhoto(input: $input) {
        id,
        liked,
        likes
      }
    }
`
export const useMuationToogleLike = () => {
  const [mutation, { loading: mutationLoading, error: mutationError }] = useMutation(MUTATION_LIKE_PHOTO)
  return { mutation, mutationLoading, mutationError }
}
