import AllCategories from "../components/categories/AllCategories";
import AllMeals from "../components/meals/AllMeals";

const MenuPage = () => {
  return (
    <>
      <h4 className="title">
        Our<span>Menu</span>
      </h4>
      <AllCategories />
      <AllMeals />
    </>
  );
};

export default MenuPage;
