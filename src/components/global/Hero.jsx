import classes from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={classes.hero}>
      <div className={classes["text-box"]}>
        <div className={classes["delivery-box"]}>
          <p>bike delivery</p>
          <img
            src="https://www.pngmart.com/files/7/Delivery-PNG-Image.png"
            alt="bike"
          />
        </div>
        <h1>
          <span>Delicious Meals</span> from All over the world<span>!</span>
        </h1>
        <p>
          Enjoy the tasty food of the world's most famous cuisines. With the
          fastest delivery in the town, fresh and delicious order is guaranteed!
        </p>
      </div>
    </div>
  );
};

export default Hero;
