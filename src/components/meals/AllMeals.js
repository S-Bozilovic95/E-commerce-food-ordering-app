import { useEffect } from "react";
import uuid from "react-uuid";
import { addNewMeal } from "../../api/meals/meals";
import useGetRequestToArray from "../../hooks/use-getRequestToArray";
import classes from "./AllMeals.module.scss";
import MealItem from "./MealItem";

const newMeal = {
  id: uuid(),
  name: "Chicken Wings",
  description: "Crispy Grilled Wings!",
  price: 12.1,
  image:
    "https://www.pngmart.com/files/8/Grilled-Food-PNG-Clipart-Background.png",
  category: "Chicken",
};

const AllMeals = () => {
  const data = useGetRequestToArray("meals");
  const mealsList = data.itemsArray;
  const isLoading = data.isLoading;

  // useEffect(() => {
  //   addNewMeal(newMeal);
  // }, []);

  return (
    <div className={classes.meals}>
      {mealsList && !isLoading && (
        <ul>
          {mealsList.map((item) => {
            return <MealItem key={item.id} meal={item} />;
          })}
        </ul>
      )}
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default AllMeals;
