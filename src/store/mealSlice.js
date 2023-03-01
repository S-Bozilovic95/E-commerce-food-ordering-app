import { createSlice } from "@reduxjs/toolkit";
import { getAllMeals } from "../api/meals/meals";

const mealsSlice = createSlice({
  name: "meals",
  initialState: {
    initialMealsList: [],
    filteredMeals: [],
    isLoading: null,
  },

  reducers: {
    setInitialMeals(state, action) {
      state.initialMealsList = action.payload;
      state.filteredMeals = action.payload;
    },
    setFilteredMeals(state, action) {
      const category = action.payload;

      if (category === "Menu") {
        state.filteredMeals = state.initialMealsList;
        return;
      }

      state.filteredMeals = state.initialMealsList.filter(
        (item) => item.category === category
      );
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const getMealsData = () => {
  return async (dispatch) => {
    try {
      dispatch(setIsLoading(true));
      const response = await getAllMeals();
      let newArray = [];
      for (const key in response.data) {
        newArray.push({
          id: response.data[key].id,
          name: response.data[key].name,
          description: response.data[key].description,
          price: response.data[key].price,
          image: response.data[key].image,
          category: response.data[key].category,
        });
      }
      dispatch(setInitialMeals(newArray));
      dispatch(setIsLoading(false));
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const { setFilteredMeals, setInitialMeals, setIsLoading } =
  mealsSlice.actions;
export const filteredMeals = (state) => state.meals.filteredMeals;
export const initialMealsList = (state) => state.meals.initialMealsList;
export const isLoading = (state) => state.meals.isLoading;
export default mealsSlice;
