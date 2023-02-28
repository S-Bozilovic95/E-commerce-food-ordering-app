import classes from "./MealItem.module.scss";
import { FaCartPlus, FaEuroSign } from "react-icons/fa";

const MealItem = ({ meal }) => {
  return (
    <li className={classes["meal-item"]}>
      <img src={meal.image} alt={meal.name} />
      <div className={classes["text-box"]}>
        <button className={classes.button}>
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
