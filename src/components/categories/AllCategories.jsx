import { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";
import classes from "./AllCategories.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import useGetRequestToArray from "../../hooks/useGetRequestToArray";
import { useDispatch, useSelector } from "react-redux";
import { categoryList, setCategoryList } from "../../store/categorySlice";

const AllCategories = () => {
  const [currentCategoryId, setCurrentCategoryId] = useState(0);
  const categoryData = useGetRequestToArray("categories");
  const isLoading = categoryData.isLoading;
  const allCategories = useSelector(categoryList);
  const dispatch = useDispatch();

  const currentCategoryHandler = (categoryId) => {
    setCurrentCategoryId(categoryId);
  };

  useEffect(() => {
    dispatch(setCategoryList(categoryData.itemsArray));
  }, [dispatch, categoryData.itemsArray]);

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
            320: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 5,
            },
          }}
        >
          {allCategories.map((item) => {
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
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default AllCategories;
