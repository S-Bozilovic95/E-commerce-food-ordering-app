import { useState } from "react";
import CategoryItem from "./CategoryItem";
import classes from "./AllCategories.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const categoriesDummy = [
  {
    id: 0,
    name: "Menu",
    image: "https://www.svgrepo.com/show/358135/restaurant.svg",
  },
  {
    id: 1,
    name: "Burgers",
    image: "https://www.svgrepo.com/show/376410/burger-line.svg",
  },
  {
    id: 2,
    name: "Sushi",
    image: "https://www.svgrepo.com/show/456118/sushi-roll.svg",
  },
  {
    id: 3,
    name: "Pizza",
    image: "https://www.svgrepo.com/show/489090/pizza.svg",
  },
  {
    id: 4,
    name: "Chicken",
    image: "https://www.svgrepo.com/show/500498/chicken.svg",
  },
  {
    id: 5,
    name: "Fish",
    image: "https://www.svgrepo.com/show/430395/fish-line.svg",
  },
];

const AllCategories = () => {
  const [currentCategoryId, setCurrentCategoryId] = useState(0);

  const currentCategoryHandler = (categoryId) => {
    setCurrentCategoryId(categoryId);
  };

  return (
    <div className={classes.categories}>
      {categoriesDummy && (
        <Swiper
          className={classes.swiperBox}
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2000,
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
          {categoriesDummy.map((item) => {
            return (
              <SwiperSlide>
                <CategoryItem
                  key={item.id}
                  category={item}
                  currentCategoryHandler={currentCategoryHandler}
                  currentCategoryId={currentCategoryId}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
};

export default AllCategories;
