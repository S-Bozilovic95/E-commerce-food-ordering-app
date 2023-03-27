import { createSlice } from "@reduxjs/toolkit";
import { getCartItems } from "../api/cart/cart";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItemsList: [],
    loading: null,
  },

  reducers: {
    setCartList(state, action) {
      state.cartItemsList = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },

    // privremeno
    removeFromCart(state, action) {
      const filteredCartList = state.cartItemsList.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItemsList = filteredCartList;
    },
    addToCart(state, action) {
      const existingItem = state.cartItemsList.find(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (!existingItem) {
        state.cartItemsList = [...state.cartItemsList, action.payload];
      }

      // else {
      //   existingItem.amount = existingItem.amount + 1;
      //   existingItem.price = parseFloat(
      //     action.payload.price * existingItem.amount
      //   ).toFixed(2);
      // }
    },
  },
});

export const getCartData = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await getCartItems();
      let newArray = [];
      for (const key in response.data) {
        newArray.push({
          id: response.data[key].id,
          name: response.data[key].name,
          description: response.data[key].description,
          price: response.data[key].price,
          amount: 1,
          image: response.data[key].image,
          category: response.data[key].category,
        });
      }
      dispatch(setCartList(newArray));
      dispatch(setLoading(false));
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const { setCartList, setLoading } = cartSlice.actions;
export const cartItemsList = (state) => state.cart.cartItemsList;
export default cartSlice;
