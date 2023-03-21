import AllCategories from "../components/categories/AllCategories";
import Hero from "../components/global/Hero";
import AllMeals from "../components/meals/AllMeals";
import RecommendedMeals from "../components/meals/RecommendedMeals";

const HomePage = () => {
  return (
    <>
      <Hero />
      <RecommendedMeals />
      <h4 className="title">
        Our<span>Menu</span>
      </h4>
      <AllCategories />
      <AllMeals />
    </>
  );
};

export default HomePage;
