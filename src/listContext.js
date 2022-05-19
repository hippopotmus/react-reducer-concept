import React from 'react'
import listReducer, { initialState } from './listReducer'
import axios from 'axios'

export const ListContext = React.createContext(initialState)

const ListProvider =({children}) =>{
    const [state, dispatch] = React.useReducer(listReducer, initialState)
    // console.log(state)

    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s'

    React.useEffect(()=>{
        async function getData(){
        const response = await axios(url)
        const data = response.data
        const {drinks} = data
        if (drinks){
            getList(data)
            console.log(data.drinks)
        }
        else getList(initialState)
        }
        getData()
    },[])

    const getList = (data) =>{
        dispatch({
            type: "GETLIST",
            payload: {list:data.drinks}
        })
    }

    return (
        <ListContext.Provider value={{list: state.list}}>{children}</ListContext.Provider>
      )
}

export default ListProvider