import { request } from "../request";

export const getAllCategories = () => {
  return request({
    url: "/categories.json",
    method: "get",
  });
};

export const addNewCategory = (categoryData) => {
  return request({
    url: "/categories.json",
    method: "post",
    data: categoryData,
  });
};
