import { configureStore } from "@reduxjs/toolkit";
import mealsSlice from "./mealSlice";

const store = configureStore({
  reducer: {
    meals: mealsSlice.reducer,
  },
});

export default store;
