import { useEffect, useState } from 'react'

export const useFetch = () => {
  const [data, setData] = useState([])
  const [isLoading, SetIsLoading] = useState(false)
  useEffect(() => {
    SetIsLoading(true);
    (async () => {
      await fetch('http://localhost:4000/categories')
        .then(response => response.json())
        .then(res => {
          setData(res)
          SetIsLoading(false)
        })
    })()
  }, [])
  return { data, isLoading }
}
