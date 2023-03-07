import AllCategories from "../components/categories/AllCategories";
import Hero from "../components/Hero";
import AllMeals from "../components/meals/AllMeals";
import RecommendedMeals from "../components/meals/RecommendedMeals";

const HomePage = () => {
  return (
    <>
      <Hero />
      <RecommendedMeals />
      <AllCategories />
      <AllMeals />
    </>
  );
};

export default HomePage;
