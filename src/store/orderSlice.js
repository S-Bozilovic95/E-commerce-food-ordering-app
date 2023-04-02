import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orderMeals: [],
    totalPrice: 0,
  },

  reducers: {
    setOrderMeals(state, action) {
      state.orderMeals = action.payload;
    },
    updateOrderMeals(state, action) {
      let existingItem = state.orderMeals.find((item) => {
        return item.id === action.payload.id;
      });

      if (!existingItem) {
        state.orderMeals = [...state.orderMeals, action.payload];
      } else {
        state.orderMeals[state.orderMeals.indexOf(existingItem)] = {
          id: action.payload.id,
          name: action.payload.name,
          amount: action.payload.amount,
          price: action.payload.price,
          image: action.payload.image,
          category: action.payload.category,
        };
      }
    },
    setTotalPrice(state) {
      state.totalPrice = parseFloat(
        state.orderMeals.reduce((sum, item) => sum + item.price, 0)
      ).toFixed(2);
    },
  },
});

export const { setOrderMeals, setTotalPrice, updateOrderMeals } =
  orderSlice.actions;
export const orderMeals = (state) => state.order.orderMeals;
export const totalPrice = (state) => state.order.totalPrice;
export default orderSlice;
