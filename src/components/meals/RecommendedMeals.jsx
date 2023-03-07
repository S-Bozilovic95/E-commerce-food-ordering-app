import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { recommendedMeals, setRecommendedMeals } from "../../store/mealSlice";
import MealItem from "./MealItem";
import classes from "./RecommendedMeals.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import useGetRequestToArray from "../../hooks/useGetRequestToArray";
import Placeholder from "../UI/Placeholder";

const dummyRecommended = [
  { id: "5f84ad33-97f5-7bbd-903e-58fedbaf7454" },
  { id: "df86d952-f592-ea29-85a0-f73579800d51" },
  { id: "64dbf9fb-eb03-2cb9-587d-b16919312276" },
  { id: "5787b9b2-0d8f-c885-57a9-e896986d64bd" },
  { id: "e9a7a8c3-ea65-4255-d2ee-429e5f1e598a" },
];

const RecommendedMeals = () => {
  const dispatch = useDispatch();
  const recommended = useSelector(recommendedMeals);
  const mealsData = useGetRequestToArray("meals");
  const isLoading = mealsData.isLoading;

  useEffect(() => {
    if (recommended.length !== 0) {
      dispatch(setRecommendedMeals(dummyRecommended));
    } else {
      const timer = setTimeout(() => {
        dispatch(setRecommendedMeals(dummyRecommended));
      }, [500]);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [dispatch, recommended.length]);

  return (
    <div className={classes.recommended}>
      <h4>
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
          {recommended.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <MealItem key={item.id} meal={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
      {isLoading && <Placeholder num={4} type="best-seller" />}
    </div>
  );
};

export default RecommendedMeals;
