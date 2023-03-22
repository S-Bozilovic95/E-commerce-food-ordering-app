import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.scss";
import logo from "../../assets/fried.svg";
import { RiShoppingBasket2Fill } from "react-icons/ri";
import { MdAccountCircle } from "react-icons/md";
import { useState } from "react";
import { useSelector } from "react-redux";
import { cartItemsList } from "../../store/cartSlice";

const MainNavigation = ({ showCartHandler }) => {
  const [drop, setDrop] = useState(false);
  const cartItemsNumber = useSelector(cartItemsList).length;

  const dropHandler = () => {
    setDrop((prevDrop) => !prevDrop);
  };

  const cartShow = () => {
    showCartHandler(true);
    setDrop(false);
  };

  return (
    <>
      <div
        className={`${classes.navigation} ${drop && classes["active-menu"]}`}
      >
        <div className={classes["logo-box"]}>
          <div className={classes.menu} onClick={dropHandler}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={classes.logo}>
            <img src={logo} alt="logo" />
            <h4>
              <span>Crispy</span>Land
            </h4>
          </div>

          <div
            className={classes["profile-mobile"]}
            onClick={() => setDrop(false)}
          >
            <i>
              <MdAccountCircle />
            </i>
          </div>
        </div>

        <div className={classes["link-box"]}>
          <NavLink to="/" onClick={dropHandler}>
            Home
          </NavLink>
          <NavLink to="/menu" onClick={dropHandler}>
            Menu
          </NavLink>
          <NavLink to="/about" onClick={dropHandler}>
            About Us
          </NavLink>
          <i onClick={cartShow}>
            <RiShoppingBasket2Fill />
            {cartItemsNumber > 0 && <span>{cartItemsNumber}</span>}
          </i>
        </div>
        <div className={classes["profile"]}>
          <i>
            <MdAccountCircle />
          </i>
        </div>
      </div>
      <div
        className={classes.overlay}
        style={{ display: drop ? "block" : "none" }}
        onClick={dropHandler}
      ></div>
    </>
  );
};

export default MainNavigation;
