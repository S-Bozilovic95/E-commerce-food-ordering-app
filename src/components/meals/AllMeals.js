import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filteredMeals, getMealsData, isLoading } from "../../store/mealSlice";
import classes from "./AllMeals.module.scss";
import MealItem from "./MealItem";

const AllMeals = () => {
  const loading = useSelector(isLoading);
  const mealsList = useSelector(filteredMeals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMealsData());
  }, [dispatch]);

  return (
    <div className={classes.meals}>
      {mealsList && !loading && (
        <ul>
          {mealsList.map((item) => {
            return <MealItem key={item.id} meal={item} />;
          })}
        </ul>
      )}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default AllMeals;
