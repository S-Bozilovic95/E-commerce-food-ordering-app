import classes from "./Placeholder.module.scss";
import PlaceholderItem from "./PlaceholderItem";

const Placeholder = (props) => {
  return (
    <div
      className={
        props.type === "meals"
          ? classes["placeholder-meals"]
          : props.type === "category"
          ? classes["placeholder-category"]
          : classes["placeholder-best-seller"]
      }
    >
      {[...Array(props.num)].map((item, index) => {
        return <PlaceholderItem key={index} type={props.type} />;
      })}
    </div>
  );
};

export default Placeholder;
