import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
  // podemos pasar una funcion que retorne el valor
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialValue
    } catch (e) {
      return initialValue
    }
  })

  const setLocalStorage = value => {
    try {
      value
        ? window.localStorage.setItem(key, JSON.stringify(value))
        : window.localStorage.removeItem(key, JSON.stringify(value))
      setStoredValue(value)
    } catch (e) {
      console.error(e)
    }
  }

  return [storedValue, setLocalStorage]
}
