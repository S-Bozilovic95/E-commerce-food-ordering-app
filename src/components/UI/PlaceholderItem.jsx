import classes from "./Placeholder.module.scss";

const PlaceholderItem = (props) => {
  const mealItemSkeleton = (
    <div className={classes["meal-skeleton"]}>
      <span></span>
      <div className={classes["meal-skeleton__span-box"]}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );

  const categoryItemSkeleton = (
    <div className={classes["category-skeleton"]}>
      <span></span>
      <span></span>
    </div>
  );

  const bestSellerSkeleton = (
    <div className={classes["best-seller-skeleton"]}>
      <span></span>
      <div className={classes["best-seller-skeleton__span-box"]}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );

  return (
    <div>
      {props.type === "meals" && mealItemSkeleton}
      {props.type === "category" && categoryItemSkeleton}
      {props.type === "best-seller" && bestSellerSkeleton}
    </div>
  );
};

export default PlaceholderItem;
