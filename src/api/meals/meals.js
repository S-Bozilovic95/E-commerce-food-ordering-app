import { request } from "../request";

export const getAllMeals = () => {
  return request({
    url: "/meals.json",
    method: "get",
  });
};

export const addNewMeal = (mealData) => {
  return request({
    url: "/meals.json",
    method: "post",
    data: mealData,
  });
};
