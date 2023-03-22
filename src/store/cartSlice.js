import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItemsList: JSON.parse(localStorage.getItem("cart")) || [],
  },

  reducers: {
    addToCart(state, action) {
      const existingItem = state.cartItemsList.find(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (!existingItem) {
        state.cartItemsList = [...state.cartItemsList, action.payload];
      }

      localStorage.setItem("cart", JSON.stringify(state.cartItemsList));
    },
    removeFromCart(state, action) {
      const filteredCartList = state.cartItemsList.filter(
        (item) => item.id !== action.payload.id
      );

      state.cartItemsList = filteredCartList;
      localStorage.setItem("cart", JSON.stringify(state.cartItemsList));
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const cartItemsList = (state) => state.cart.cartItemsList;
export default cartSlice;
