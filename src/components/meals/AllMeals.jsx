import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filteredMeals, getMealsData, loading } from "../../store/mealSlice";
import classes from "./AllMeals.module.scss";
import MealItem from "./MealItem";
import Placeholder from "../UI/Placeholder";
import NoResult from "../UI/NoResult";

const AllMeals = () => {
  const isLoading = useSelector(loading);
  const mealsList = useSelector(filteredMeals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMealsData());
  }, [dispatch]);

  return (
    <div className={classes.meals}>
      {mealsList && !isLoading && (
        <ul>
          {mealsList.map((item) => {
            return <MealItem key={item.id} meal={item} />;
          })}
        </ul>
      )}
      {isLoading && <Placeholder num={16} type={"meals"} />}
      {mealsList.length === 0 && !isLoading && <NoResult />}
    </div>
  );
};

export default AllMeals;
