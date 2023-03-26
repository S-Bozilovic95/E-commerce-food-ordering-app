const OrderItem = ({ singleMeal }) => {
  const changeAmount = () => {
    // singleMeal.amount = singleMeal.amount + 1;
  };

  return (
    <div>
      <div onClick={changeAmount}>
        <img src={singleMeal.image} alt="meal" />
        <p>{singleMeal.name}</p>
        <p>{singleMeal.price}</p>
        <span>-</span>
        <p>{singleMeal.amount}</p>
        <span>+</span>
      </div>
    </div>
  );
};

export default OrderItem;
