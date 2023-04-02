import { useEffect, useState } from "react";
import { getCartData } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
import { deleteCartItem } from "../../api/cart/cart";
import classes from "./OrderItem.module.scss";
import { FaEuroSign } from "react-icons/fa";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { setTotalPrice, updateOrderMeals } from "../../store/orderSlice";

const OrderItem = ({ singleMeal }) => {
  const [updatedItem, setUpdatedItem] = useState({
    id: singleMeal.id,
    name: singleMeal.name,
    amount: singleMeal.amount,
    price: singleMeal.price,
    image: singleMeal.image,
    category: singleMeal.category,
  });
  const dispatch = useDispatch();

  const amountIncreaseHandler = () => {
    if (updatedItem.amount < 25) {
      setUpdatedItem((prevUpdatedItem) => ({
        ...prevUpdatedItem,
        amount: prevUpdatedItem.amount + 1,
        price: prevUpdatedItem.price + singleMeal.price,
      }));
    }
  };

  const amountDecreaseHandler = () => {
    if (updatedItem.amount > 1) {
      setUpdatedItem((prevUpdatedItem) => ({
        ...prevUpdatedItem,
        amount: prevUpdatedItem.amount - 1,
        price: prevUpdatedItem.price - singleMeal.price,
      }));
    }
    console.log(updatedItem.price);
  };

  const removeFromCartHandler = async (value) => {
    try {
      await deleteCartItem(singleMeal.key);
      dispatch(getCartData());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(updateOrderMeals(updatedItem));
    dispatch(setTotalPrice());
  }, [updatedItem, dispatch]);

  return (
    <div className={classes["order-item"]}>
      <div className={classes["info-box"]}>
        <h4 className={classes.title}>{updatedItem.name}</h4>
        <p>
          <i>
            <FaEuroSign />
          </i>
          {parseFloat(updatedItem.price).toFixed(2)}
        </p>
      </div>
      <div className={classes.options}>
        <img src={singleMeal.image} alt="meal" />
        <div className={classes["options-box"]}>
          <i onClick={amountDecreaseHandler}>
            <AiOutlineMinus />
          </i>
          <div className={classes["amount-box"]}>
            <p>{updatedItem.amount}</p>
          </div>
          <i onClick={amountIncreaseHandler}>
            <AiOutlinePlus />
          </i>
        </div>
      </div>
      <button onClick={removeFromCartHandler}>
        <i>
          <MdOutlineRemoveShoppingCart />
        </i>
      </button>
    </div>
  );
};

export default OrderItem;
