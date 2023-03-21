import { createSlice } from "@reduxjs/toolkit";
import { getAllCategories } from "../api/categories/categories";

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    categoryList: [],
    loading: null,
  },

  reducers: {
    setCategoryList(state, action) {
      state.categoryList = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const getCategoryData = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await getAllCategories();
      let newArray = [];
      for (const key in response.data) {
        newArray.push({
          id: key,
          name: response.data[key].name,
          image: response.data[key].image,
        });
      }
      dispatch(setCategoryList(newArray));
      dispatch(setLoading(false));
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const { setCategoryList, setLoading } = categorySlice.actions;
export const categoryList = (state) => state.categories.categoryList;
export const categoryLoading = (state) => state.categories.loading;
export default categorySlice;
