import { useEffect, useState } from 'react'

export const useFetch = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    (async () => {
      await fetch('http://localhost:4000/categories')
        .then(response => response.json())
        .then(res => setData(res))
    })()
  }, [])
  return { data }
}
