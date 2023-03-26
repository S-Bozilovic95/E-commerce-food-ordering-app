import { useEffect, useState } from "react";
import { getCartItems } from "../../api/cart/cart";
import PopUp from "../UI/PopUp";
import OrderItem from "./OrderItem";
import classes from "./OrderWindow.module.scss";

const OrderWindow = ({ showCartHandler }) => {
  const [cartItemsList, setCartItemsList] = useState([]);

  useEffect(() => {
    const getCartList = async () => {
      try {
        const response = await getCartItems();
        let newArray = [];
        for (const key in response.data) {
          newArray.push({
            id: key,
            name: response.data[key].name,
            description: response.data[key].description,
            price: response.data[key].price,
            amount: 1,
            image: response.data[key].image,
            category: response.data[key].category,
          });
        }
        setCartItemsList(newArray);
        console.log(response);
      } catch (err) {
        console.log(err.message);
      }
    };
    getCartList();
  }, []);

  return (
    <PopUp onClose={showCartHandler.bind(this, false)}>
      <div className={classes.orders}>
        {cartItemsList.map((item) => (
          <OrderItem key={item.id} singleMeal={item} />
        ))}
      </div>
    </PopUp>
  );
};

export default OrderWindow;
