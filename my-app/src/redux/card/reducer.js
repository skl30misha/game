import {createSlice} from "@reduxjs/toolkit";

const initialState={
    itemsInCart:[]
}

 export const cartSlice = createSlice({
    name:"cart",
     initialState,
     reducers:{
                setItemInCart:(state,action)=>{
                 state.itemsInCart.push(action.payload)
                },
                deleteItemFromCart:(state , action)=>{
                state.itemsInCart = state.itemsInCart.filter(game=>game.id !== action.payload)
}


     }
})

export const {setItemInCart,deleteItemFromCart} = cartSlice.actions
    export default cartSlice.reducer