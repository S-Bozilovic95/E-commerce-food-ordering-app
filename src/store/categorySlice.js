import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    categoryList: [],
  },

  reducers: {
    setCategoryList(state, action) {
      state.categoryList = action.payload;
    },
  },
});

export const { setCategoryList } = categorySlice.actions;
export const categoryList = (state) => state.categories.categoryList;
export default categorySlice;
