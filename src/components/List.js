import React from 'react'
import CardItem from './CardItem'

const List = ({list}) => {
  console.log(list)
  return (
    <section>
      {
      list.map((item)=>{
        return <CardItem key={item.id} {...item} />
      })
    }
    </section>
  )
}

export default List