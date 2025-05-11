import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice(
{
name:'cart' ,
initialState:{ 
items:[],
total: 0,
quantity: 0,
},
reducers: {

add: (state,action)=>{
   state.items.push({...action.payload, quantity: action.payload.quantity})
   console.log(action.payload, " ", action.payload.quantity)
   console.log(state.items)
  state.quantity = state.items.length
   console.log(state.quantity)
  state.total+=action.payload.price
},
remove: (state,{payload})=>{
   state.items= state.items.filter((item) => item.id !== payload.id)
   state.quantity= state.items.length
   state.total -=payload.price

},

clear: ()=>{},
increase: ()=>{},
decrease: ()=>{},

}


})

export const{ add,remove,clear,increase,decrease, quantity}=cartSlice.actions
export default cartSlice.reducer