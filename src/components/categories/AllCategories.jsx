import { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";
import classes from "./AllCategories.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useDispatch, useSelector } from "react-redux";
import {
  categoryList,
  categoryLoading,
  getCategoryData,
} from "../../store/categorySlice";
import Placeholder from "../UI/Placeholder";

const AllCategories = () => {
  const [currentCategoryId, setCurrentCategoryId] = useState(
    "-NPUaI2VZkeTABnwlTkb"
  );
  const isLoading = useSelector(categoryLoading);
  const allCategories = useSelector(categoryList);
  const dispatch = useDispatch();

  const currentCategoryHandler = (categoryId) => {
    setCurrentCategoryId(categoryId);
  };

  useEffect(() => {
    dispatch(getCategoryData());
  }, [dispatch]);

  return (
    <div className={classes.categories}>
      {allCategories && !isLoading && (
        <Swiper
          className={classes.swiperBox}
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
          }}
          breakpoints={{
            280: {
              slidesPerView: 2.1,
            },
            320: {
              slidesPerView: 2.5,
            },
            500: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 5,
            },
          }}
        >
          {allCategories?.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <CategoryItem
                  category={item}
                  currentCategoryHandler={currentCategoryHandler}
                  currentCategoryId={currentCategoryId}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
      {isLoading && <Placeholder num={5} type={"category"} />}
    </div>
  );
};

export default AllCategories;
