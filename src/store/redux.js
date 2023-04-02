import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import categorySlice from "./categorySlice";
import mealsSlice from "./mealSlice";
import orderSlice from "./orderSlice";

const store = configureStore({
  reducer: {
    meals: mealsSlice.reducer,
    categories: categorySlice.reducer,
    cart: cartSlice.reducer,
    order: orderSlice.reducer,
  },
});

export default store;
