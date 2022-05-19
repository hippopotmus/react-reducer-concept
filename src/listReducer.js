// import React from 'react'

export const initialState = {
    list:[]
}

const listReducer = (state, action) => {
    const{type, payload} = action
    switch(type){
      case "GETLIST":
        console.log("GETLIST", payload)
        return{
          ...state,
          list: payload.list.map((item)=>{
            const {idDrink:id, strDrink:name, strAlcoholic:info, strGlass:glass, strDrinkThumb:image } = item
            return { id,name,info,glass,image }
            })
        }   

        default:
            throw new Error(`No case for type ${type} found in shopReducer`)
    }
}

export default listReducer