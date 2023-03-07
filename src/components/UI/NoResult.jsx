import classes from "./NoResult.module.scss";

const NoResult = () => {
  return (
    <div className={classes["no-res"]}>
      <img
        src="https://www.svgrepo.com/show/219779/restaurant-plate.svg"
        alt="no-result"
      />
      <h4>No Results Found!</h4>
    </div>
  );
};

export default NoResult;
