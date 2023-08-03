import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState : {
      cartItems: [],
      
    },
    reducers :{

        addItem : (state, action) =>{

            const cartItem_itemIdx = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
              );

              if (cartItem_itemIdx != -1) {
                state.cartItems[cartItem_itemIdx].itemCount += 1;
              } 
              else{
                const newItem = { ...action.payload, itemCount: 1 };
                state.cartItems.push(newItem);
              }
           
        },
        clearCart : (state)=>{
            state.items = [];
        }
    }

})

export const{ addItem, clearCart}=cartSlice.actions;
export default cartSlice.reducer;
