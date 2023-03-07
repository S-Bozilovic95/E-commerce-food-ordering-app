import { useDispatch } from "react-redux";
import { setFilteredMeals } from "../../store/mealSlice";
import classes from "./CategoryItem.module.scss";

const CategoryItem = ({
  category,
  currentCategoryHandler,
  currentCategoryId,
}) => {
  const dispatch = useDispatch();
  const isActive = category.id === currentCategoryId;

  const filterHandler = () => {
    dispatch(setFilteredMeals(category.name));
    currentCategoryHandler(category.id);
  };

  return (
    <div
      onClick={filterHandler}
      className={`${classes["category-item"]} ${
        isActive && classes["category-item__active"]
      }`}
    >
      <span>
        <img src={category.image} alt="menu" />
      </span>
      <p>{category.name}</p>
    </div>
  );
};

export default CategoryItem;
