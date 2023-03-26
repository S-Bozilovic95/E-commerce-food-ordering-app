import { request } from "../request";

export const getCartItems = () => {
  return request({
    url: "/cart.json",
    method: "get",
  });
};

export const addNewCartItem = (cartData) => {
  return request({
    url: "/cart.json",
    method: "post",
    data: cartData,
  });
};

export const updateCartItemAmount = (id, cartData) => {
  return request({
    url: `/cart/${id}.json`,
    method: "patch",
    data: cartData,
  });
};

export const deleteCartItem = (id) => {
  return request({
    url: `/cart/${id}.json`,
    method: "delete",
  });
};
