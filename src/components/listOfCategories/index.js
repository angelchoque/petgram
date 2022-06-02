import React, { useEffect, useState } from 'react'
import { Category } from '../category'
import { List, Item } from './styles'
import { useFetch } from '../../hooks/useFetch'

const ListOfCategoriesComponent = () => {
  const { data, isLoading } = useFetch()

  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = fixed => {
    return (
      <List fixed={fixed}>
        {
          isLoading
            ? <Item key='loading'> <Category /> </Item>
            : data.map((category) => <Item key={category.id}><Category {...category} path={`/pet/${category.id}`} /></Item>)
        }
      </List>
    )
  }

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)
