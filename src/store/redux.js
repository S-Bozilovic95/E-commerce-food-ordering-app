import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import categorySlice from "./categorySlice";
import mealsSlice from "./mealSlice";

const store = configureStore({
  reducer: {
    meals: mealsSlice.reducer,
    categories: categorySlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
