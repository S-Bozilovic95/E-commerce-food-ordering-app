import { request } from "../request";

export const getAllOrders = () => {
  return request({
    url: "/orders.json",
    method: "get",
  });
};

export const addNewOrder = (orderData) => {
  return request({
    url: "/orders.json",
    method: "post",
    data: orderData,
  });
};
