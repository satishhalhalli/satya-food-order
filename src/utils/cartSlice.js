// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//     name : 'cart',
//     initialState : {
//       cartItems: [],
     
//     },
//     reducers :{

//         addItem : (state, action) =>{

//         //      const cartItem_itemIdx = state.cartItems.findIndex(
//         //          (item) => item.id === action.payload.id,
                
//         //        );
//         //        console.log(state.cartItems);
//         //    console.log(cartItem_itemIdx)

//         //       if (cartItem_itemIdx != -1) {
//         //         state.cartItems[cartItem_itemIdx].itemCount += 1;
//         //       } 
//         //       else{
//         //         const newItem = { ...action.payload, itemCount: 1 };
//         //         state.cartItems.push(newItem);
//         //         console.log("new", newItem);
//         //       }
//            // state.cartItems.push(action.payload);
//            const cartItem_itemIdx = state.cartItems.findIndex(
//             (item) => item.card.info.id === action.payload.card.info.id
//           );
      
//           console.log(state.cartItems);
//           console.log(cartItem_itemIdx);
      
//           if (cartItem_itemIdx !== -1) {
//             state.cartItems[cartItem_itemIdx].itemCount += 1;
//           } else {
//             const newItem = { ...action.payload.card, itemCount: 1 };
//             state.cartItems.push(newItem);
//             console.log("new", newItem);
//           }
//         }
// ,
           
//         },
//         clearCart : (state)=>{
//             state.items = [];
//         }
//     }

// })

// export const{ addItem, clearCart}=cartSlice.actions;
// export default cartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    // addItem: (state, action) => {
    // //   const cartItem_itemIdx = state.cartItems.findIndex(
    // //     (item) => item.info.id === action.payload.info.id
    // //   );
    // console.log("payload",action.payload)
    // console.log("payloadid",action.payload.card.info.id)
    // const cartItem_itemIdx = state.cartItems.findIndex(
    //     (item) => item.info.id === action.payload.card.info.id
    //   );
    //   console.log("cart items",state.cartItems);
    //   console.log(cartItem_itemIdx);

    //   if (cartItem_itemIdx !== -1) {
    //     state.cartItems[cartItem_itemIdx].itemCount += 1;
    //   } else {
    //     const newItem = { ...action.payload.card, itemCount: 1 };
    //     state.cartItems.push(newItem);
    //     console.log("cartitems",state.cartItems);
    //     console.log("new", newItem.info.id);
    //   }
    // },
    addItem: (state, action) => {
      const newItem = { ...action.payload, itemCount: 1 };
      console.log("when add clicked",action.payload);
      console.log("new",newItem);
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === newItem.id
      );

      if (existingItemIndex !== -1) {
        // Item with the same ID already exists in the cart, update the count
        state.cartItems[existingItemIndex].itemCount += 1;
      } else {
        // Item with the same ID does not exist in the cart, add the new item
        state.cartItems.push(newItem);
        // console.log(newItem);
      }
    },

    removeItem:(state, action)=> {

      const newItem = { ...action.payload, itemCount: 1 };
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === newItem.id
      );

      if (existingItemIndex !== -1) {
        // Item with the same ID already exists in the cart, update the count
        state.cartItems[existingItemIndex].itemCount -= 1;
      } else {
        // Item with the same ID does not exist in the cart, add the new item
        state.cartItems.pop(newItem);
        // console.log(newItem);
      }
    },

    deletecartItems:(state,action)=>{
      const newCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = newCartItems;

      // if(state.cartItems.length == 0) state.restaurantInfo = []
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addItem, removeItem,clearCart,deletecartItems } = cartSlice.actions;
export default cartSlice.reducer;
