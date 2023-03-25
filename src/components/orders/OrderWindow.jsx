import { useSelector } from "react-redux";
import { cartItemsList } from "../../store/cartSlice";
import PopUp from "../UI/PopUp";
import classes from "./OrderWindow.module.scss";

const OrderWindow = ({ showCartHandler }) => {
  const cartItems = useSelector(cartItemsList);

  return (
    <PopUp onClose={showCartHandler.bind(this, false)}>
      <div className={classes.orders}>
        {cartItems.map((item) => (
          <div>
            <img src={item.image} alt="meal" />
            <p>{item.name}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </PopUp>
  );
};

export default OrderWindow;
