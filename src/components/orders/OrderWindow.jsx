import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartItemsList, getCartData } from "../../store/cartSlice";
import PopUp from "../UI/PopUp";
import OrderItem from "./OrderItem";
import classes from "./OrderWindow.module.scss";
import {
  setOrderMeals,
  setTotalPrice,
  totalPrice,
} from "../../store/orderSlice";

const OrderWindow = ({ showCartHandler }) => {
  const cartList = useSelector(cartItemsList);
  const totalSum = useSelector(totalPrice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setOrderMeals(cartList));
    dispatch(setTotalPrice());
  }, [dispatch, cartList]);

  return (
    <PopUp onClose={showCartHandler.bind(this, false)}>
      <div className={classes.orders}>
        <div className={classes["cart-list"]}>
          {cartList?.map((item) => (
            <OrderItem key={item.id} singleMeal={item} />
          ))}
        </div>
        <div>{totalSum}</div>
      </div>
    </PopUp>
  );
};

export default OrderWindow;
