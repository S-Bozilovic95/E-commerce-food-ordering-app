import { request } from "../request";

export const getAllCategories = () => {
  return request({
    url: "/categories.json",
    method: "get",
  });
};

export const addNewMeal = (categoryData) => {
  return request({
    url: "/categories.json",
    method: "post",
    data: categoryData,
  });
};
