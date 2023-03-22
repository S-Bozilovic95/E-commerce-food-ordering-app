import PopUp from "../UI/PopUp";
import classes from "./OrderWindow.module.scss";

const OrderWindow = ({ showCartHandler }) => {
  return (
    <PopUp onClose={showCartHandler.bind(this, false)}>
      <div className={classes.orders}>
        <p>asdasdasd</p>
      </div>
    </PopUp>
  );
};

export default OrderWindow;
