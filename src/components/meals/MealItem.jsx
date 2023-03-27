import classes from "./MealItem.module.scss";
import { FaCartPlus, FaEuroSign } from "react-icons/fa";
import { addNewCartItem } from "../../api/cart/cart";
import { useDispatch, useSelector } from "react-redux";
import { cartItemsList, getCartData } from "../../store/cartSlice";

const MealItem = ({ meal }) => {
  const cartList = useSelector(cartItemsList);
  const dispatch = useDispatch();

  const addItemToCartHandler = async (value) => {
    const existingItem = cartList.find((cartItem) => {
      return cartItem.id === value.id;
    });

    if (!existingItem) {
      try {
        await addNewCartItem(value);
        dispatch(getCartData());
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <li className={classes["meal-item"]}>
      <img src={meal.image} alt={meal.name} />
      <div className={classes["text-box"]}>
        <button
          className={classes.button}
          onClick={addItemToCartHandler.bind(this, meal)}
        >
          <i>
            <FaCartPlus />
          </i>
        </button>
        <h3>{meal.name}</h3>
        <p>{meal.description}</p>
        <p className={classes.price}>
          <i>
            <FaEuroSign />
          </i>
          {meal.price}
        </p>
      </div>
    </li>
  );
};

export default MealItem;
