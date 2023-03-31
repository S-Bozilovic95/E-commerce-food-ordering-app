import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCartItemAmount } from "../../api/cart/cart";
import { getCartData } from "../../store/cartSlice";

const OrderItem = ({ singleMeal }) => {
  const dispatch = useDispatch();
  const [updatedItem, setUpdatedItem] = useState({
    id: singleMeal.id,
    name: singleMeal.name,
    description: singleMeal.description,
    amount: 1,
    price: singleMeal.price,
    image: singleMeal.image,
    category: singleMeal.category,
  });

  console.log(updatedItem);
  const amountIncreaseHandler = async () => {
    setUpdatedItem((prevUpdatedItem) => ({
      ...prevUpdatedItem,
      amount: prevUpdatedItem.amount + 1,
      price: prevUpdatedItem.price + singleMeal.price,
    }));
    try {
      await updateCartItemAmount(singleMeal.id, updatedItem);
      dispatch(getCartData());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <img src={singleMeal.image} alt="meal" />
        <p>{singleMeal.name}</p>
        <p>{singleMeal.price}</p>
        <span>-</span>
        <p>{singleMeal.amount}</p>
        <span onClick={amountIncreaseHandler}>+</span>
      </div>
    </div>
  );
};

export default OrderItem;
