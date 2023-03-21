import { createSlice } from "@reduxjs/toolkit";
import { getAllMeals } from "../api/meals/meals";

const mealsSlice = createSlice({
  name: "meals",
  initialState: {
    initialMealsList: [],
    filteredMeals: [],
    recommendedMeals: [],
    loading: null,
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
    setRecommendedMeals(state, action) {
      const bestSellers = action.payload;
      const recommendedArr = [];

      for (const item of bestSellers) {
        const meal = state.initialMealsList.find((m) => m.id === item.id);
        if (meal) {
          recommendedArr.push(meal);
        }
      }

      state.recommendedMeals = recommendedArr;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const getMealsData = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await getAllMeals();
      let newArray = [];
      for (const key in response.data) {
        newArray.push({
          id: key,
          name: response.data[key].name,
          description: response.data[key].description,
          price: response.data[key].price,
          image: response.data[key].image,
          category: response.data[key].category,
        });
      }
      dispatch(setInitialMeals(newArray));
      dispatch(setLoading(false));
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const {
  setFilteredMeals,
  setInitialMeals,
  setRecommendedMeals,
  setLoading,
} = mealsSlice.actions;
export const filteredMeals = (state) => state.meals.filteredMeals;
export const initialMealsList = (state) => state.meals.initialMealsList;
export const recommendedMeals = (state) => state.meals.recommendedMeals;
export const loadingMeals = (state) => state.meals.loading;
export default mealsSlice;
