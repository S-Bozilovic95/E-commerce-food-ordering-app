import { useEffect, useState } from "react";
import uuid from "react-uuid";
import { addNewMeal, getAllMeals } from "./api/meals/meals";

const newMeal = {
  id: uuid(),
  name: "Pizza",
  price: 10.22,
  description: "An italian pizza!",
  category: "Pizza",
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScsK6z4F-hDZjOU71zr8qcZZ7QYCrkNi2lN9FrNvxhLn5XIWFL&s",
};

function App() {
  const [mealsList, setmMealsList] = useState();

  const getMeals = async () => {
    const response = await getAllMeals();

    try {
      let mealsArr = [];
      for (const key in response.data) {
        mealsArr.push({
          id: response.data[key].id,
          name: response.data[key].name,
          description: response.data[key].description,
          price: response.data[key].price,
          image: response.data[key].image,
          category: response.data[key].category,
        });
      }
      setmMealsList(mealsArr);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getMeals();
    // addNewMeal(newMeal);
  }, []);

  return (
    <div className="App">
      <h1>Food order app</h1>
      {mealsList && (
        <ul>
          {mealsList.map((item) => {
            return (
              <li key={item.id}>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.description}</p>
                <img
                  src={item.image}
                  style={{ width: "100px" }}
                  alt={item.name}
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default App;
