import classes from "./MealItem.module.scss";
import { FaCartPlus, FaEuroSign } from "react-icons/fa";
import { addNewCartItem } from "../../api/cart/cart";

const MealItem = ({ meal }) => {
  const addItemToCartHandler = async (value) => {
    try {
      const response = await addNewCartItem(value);
      console.log(response);
    } catch (error) {
      console.log(error);
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
