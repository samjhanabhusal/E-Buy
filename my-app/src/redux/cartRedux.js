import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    //   add product  in cart and add quantity
    addProduct: (state, action) => {
      state.quantity += 1;
    //   payload--new product
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
  },
});

export const { addProduct } = cartSlice.actions;
// default-it gonna be used inside store
export default cartSlice.reducer;