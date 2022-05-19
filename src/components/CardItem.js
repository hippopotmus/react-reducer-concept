import React from 'react'
import {Link} from 'react-router-dom'

const CardItem = (item) => {
  const { id, name, image, info, glass } = item
  return (
    <section style={{margin:'20px'}}>
      <h3>{id}</h3>
      <h2>{name}</h2>
      <img src={image} alt={name} style={{ borderRadius:'5px', width:"10%", height:"10%" }}/>
      <h3>{info}</h3>
      <p>{glass}</p>
      <Link to={`list/${id}`}>Details</Link>
    </section>
  )
}

export default CardItem