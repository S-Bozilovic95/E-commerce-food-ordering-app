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

  return (
    <div>
      {props.type === "meals" && mealItemSkeleton}
      {props.type === "category" && categoryItemSkeleton}
    </div>
  );
};

export default PlaceholderItem;
