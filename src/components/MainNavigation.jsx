import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.scss";
import logo from "../assets/fried.svg";
import { RiShoppingBasket2Fill } from "react-icons/ri";
import { MdAccountCircle } from "react-icons/md";
import { useState } from "react";

const MainNavigation = () => {
  const [drop, setDrop] = useState(false);

  const dropHandler = () => {
    setDrop((prevDrop) => !prevDrop);
  };

  return (
    <div className={`${classes.navigation} ${drop && classes["active-menu"]}`}>
      <div className={`container ${classes.content} `}>
        <div className={classes["logo-box"]}>
          <div className={classes.menu} onClick={dropHandler}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={classes.logo}>
            <img src={logo} alt="logo" />
            <h4>
              <span>Crisspy</span>Food
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
          <i onClick={dropHandler}>
            <RiShoppingBasket2Fill />
          </i>
        </div>
        <div className={classes["profile"]}>
          <i>
            <MdAccountCircle />
          </i>
        </div>
      </div>
      <div className={classes.overlay} onClick={dropHandler}></div>
    </div>
  );
};

export default MainNavigation;
