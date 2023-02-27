import { useEffect, useState } from "react";
import { getAllMeals } from "../api/meals/meals";
import { getAllOrders } from "../api/orders/orders";
import { getAllUsers } from "../api/users/users";
import { getAllCategories } from "../api/categories/categories";

const useGetRequestToArray = (getType) => {
  const [itemsArray, setItemsArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getItems = async () => {
      if (getType === "meals") {
        try {
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
          setItemsArray(newArray);
          setIsLoading(false);
        } catch (err) {
          console.log(err.message);
        }
      } else if (getType === "orders") {
        try {
          const response = await getAllOrders();
          let newArray = [];
          for (const key in response.data) {
            newArray.push({
              id: response.data[key].id,
              mealName: response.data[key].mealName,
              price: response.data[key].price,
              amount: response.data[key].amount,
            });
          }
          setItemsArray(newArray);
          setIsLoading(false);
        } catch (err) {
          console.log(err.message);
        }
      } else if (getType === "users") {
        try {
          const response = await getAllUsers();
          let newArray = [];
          for (const key in response.data) {
            newArray.push({
              id: response.data[key].id,
              email: response.data[key].email,
              password: response.data[key].password,
            });
          }
          setItemsArray(newArray);
          setIsLoading(false);
        } catch (err) {
          console.log(err.message);
        }
      } else if (getType === "categories") {
        try {
          const response = await getAllCategories();
          let newArray = [];
          for (const key in response.data) {
            newArray.push({
              id: response.data[key].id,
              name: response.data[key].name,
            });
          }
          setItemsArray(newArray);
          setIsLoading(false);
        } catch (err) {
          console.log(err.message);
        }
      }
    };
    getItems();
  }, [getType]);

  return { itemsArray: itemsArray, isLoading };
};

export default useGetRequestToArray;
