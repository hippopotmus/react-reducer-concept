import React from 'react'
import List from '../components/List'
import { ListContext } from '../listContext'

const Home = () => {
  const {list} = React.useContext(ListContext)
  console.log(list)
  return (
    <section>
    <List list={list}/>
</section>
  )
}

export default Home