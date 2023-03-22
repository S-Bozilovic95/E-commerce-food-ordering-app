import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/global/Footer";
import MainNavigation from "../components/global/MainNavigation";
import OrderWindow from "../components/orders/OrderWindow";

const PagesLayout = () => {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = (value) => {
    setShowCart(value);
  };

  return (
    <div>
      <MainNavigation showCartHandler={showCartHandler} />
      <div className="container">
        <Outlet />
        <Footer />
      </div>
      {showCart && <OrderWindow showCartHandler={showCartHandler} />}
    </div>
  );
};

export default PagesLayout;
