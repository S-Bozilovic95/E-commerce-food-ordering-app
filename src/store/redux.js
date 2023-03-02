import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import mealsSlice from "./mealSlice";

const store = configureStore({
  reducer: {
    meals: mealsSlice.reducer,
    categories: categorySlice.reducer,
  },
});

export default store;
