import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import {
  loadingMeals,
  recommendedMeals,
  setRecommendedMeals,
} from "../../store/mealSlice";
import MealItem from "./MealItem";
import classes from "./RecommendedMeals.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import Placeholder from "../UI/Placeholder";

const dummyRecommended = [
  { id: "-NPAG6DNWblBM4PGleCU" },
  { id: "-NPK3My0BvrTxVNOlb7q" },
  { id: "-NPK3o4VfsxuW0StpKNl" },
  { id: "-NPK4Q7cZJtFDvQS1L8g" },
  { id: "-NPocIa9CBshxVY3GEQH" },
];

const RecommendedMeals = () => {
  const dispatch = useDispatch();
  const recommended = useSelector(recommendedMeals);
  // ovde is loading za recommended meals a ne za meals
  // kad se bude dobijalo iz baze (orders pa top 5)
  const isLoading = useSelector(loadingMeals);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setRecommendedMeals(dummyRecommended));
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [dispatch]);

  return (
    <div className={classes.recommended}>
      <h4 className="title">
        Best<span>Sellers</span>
      </h4>
      {!isLoading && recommended.length > 0 && (
        <Swiper
          className={classes.swiperBox}
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
          }}
          breakpoints={{
            250: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            500: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
            },
            1120: {
              slidesPerView: 3,
            },
            1550: {
              slidesPerView: 4,
            },
          }}
        >
          {recommended?.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <MealItem key={item.id} meal={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
      {(isLoading || recommended.length <= 0) && (
        <Placeholder num={4} type="best-seller" />
      )}
    </div>
  );
};

export default RecommendedMeals;
