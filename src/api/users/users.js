import { request } from "../request";

export const getAllUsers = () => {
  return request({
    url: "/users.json",
    method: "get",
  });
};

export const addNewUser = (userData) => {
  return request({
    url: "/users.json",
    method: "post",
    data: userData,
  });
};
