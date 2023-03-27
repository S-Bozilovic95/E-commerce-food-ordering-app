import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartItemsList, getCartData } from "../../store/cartSlice";
import PopUp from "../UI/PopUp";
import OrderItem from "./OrderItem";
import classes from "./OrderWindow.module.scss";

const OrderWindow = ({ showCartHandler }) => {
  const cartList = useSelector(cartItemsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch]);

  return (
    <PopUp onClose={showCartHandler.bind(this, false)}>
      <div className={classes.orders}>
        {cartList?.map((item) => (
          <OrderItem key={item.id} singleMeal={item} />
        ))}
      </div>
    </PopUp>
  );
};

export default OrderWindow;
