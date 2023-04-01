import { useState } from "react";
import { getCartData } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
import { deleteCartItem } from "../../api/cart/cart";

const OrderItem = ({ singleMeal }) => {
  const [updatedItem, setUpdatedItem] = useState({
    name: singleMeal.name,
    description: singleMeal.description,
    amount: 1,
    price: singleMeal.price,
    image: singleMeal.image,
    category: singleMeal.category,
  });
  const dispatch = useDispatch();

  const amountIncreaseHandler = () => {
    setUpdatedItem((prevUpdatedItem) => ({
      ...prevUpdatedItem,
      amount: prevUpdatedItem.amount + 1,
      price: prevUpdatedItem.price + singleMeal.price,
    }));
  };

  const amountDecreaseHandler = () => {
    if (updatedItem.amount > 1) {
      setUpdatedItem((prevUpdatedItem) => ({
        ...prevUpdatedItem,
        amount: prevUpdatedItem.amount - 1,
        price: prevUpdatedItem.price - singleMeal.price,
      }));
    }
  };

  const removeFromCartHandler = async (value) => {
    try {
      await deleteCartItem(singleMeal.key);
      dispatch(getCartData());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <img src={singleMeal.image} alt="meal" />
        <p>{updatedItem.name}</p>
        <p>{parseFloat(updatedItem.price).toFixed(2)}</p>
        <span onClick={amountDecreaseHandler}>-</span>
        <p>{updatedItem.amount}</p>
        <span onClick={amountIncreaseHandler}>+</span>
        <button onClick={removeFromCartHandler}>delete</button>
      </div>
    </div>
  );
};

export default OrderItem;
