import React from 'react'
import { useParams } from 'react-router-dom'
import { ListContext } from '../listContext'

const SingleListItem = () => {
  const {id} = useParams()
  // console.log(id)
    const {list} = React.useContext(ListContext)
    // console.log(list)
    const listItem = list.find(item=>item.id === (id))
    const { name, image, info, glass } = listItem
    // console.log(listItem)
  return (
<section style={{margin:'10%', alignItems:'center'}}>
  <h2>{name}</h2>
  <img src={image} alt={name} style={{width:'50%', height:'50%'}}/>
</section>
  )
}

export default SingleListItem