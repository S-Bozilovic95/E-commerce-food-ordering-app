import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.scss";
import logo from "../assets/logo-chef.png";
import { RiShoppingBasket2Fill } from "react-icons/ri";
import { MdAccountCircle } from "react-icons/md";

const MainNavigation = () => {
  return (
    <div className={classes.navigation}>
      <div className={`container ${classes.content}`}>
        <div className={classes["logo-box"]}>
          <img src={logo} alt="logo" />
          <h4>BestRest</h4>
        </div>

        <div className={classes["link-box"]}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <i>
            <RiShoppingBasket2Fill />
          </i>
        </div>
        <div className={classes["profile"]}>
          <i>
            <MdAccountCircle />
          </i>
        </div>

        <div className={classes["menu"]}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default MainNavigation;
