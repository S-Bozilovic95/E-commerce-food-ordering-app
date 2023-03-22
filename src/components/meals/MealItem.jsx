import classes from "./MealItem.module.scss";
import { FaCartPlus, FaEuroSign } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../store/cartSlice";

const MealItem = ({ meal }) => {
  const dispatch = useDispatch();

  const addMealToCartHandler = (value) => {
    dispatch(addToCart(value));
  };

  const removeMealFromCartHandler = (value) => {
    dispatch(removeFromCart(value));
  };

  return (
    <li className={classes["meal-item"]}>
      <img src={meal.image} alt={meal.name} />
      <div className={classes["text-box"]}>
        <button
          className={classes.button}
          onClick={addMealToCartHandler.bind(this, meal)}
        >
          <i>
            <FaCartPlus />
          </i>
        </button>
        <h3 onClick={removeMealFromCartHandler.bind(this, meal)}>
          {meal.name}
        </h3>
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
