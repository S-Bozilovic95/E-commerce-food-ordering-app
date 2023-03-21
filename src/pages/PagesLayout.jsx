import { Outlet } from "react-router-dom";
import Footer from "../components/global/Footer";
import MainNavigation from "../components/global/MainNavigation";

const PagesLayout = () => {
  return (
    <div>
      <MainNavigation />
      <div className="container">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default PagesLayout;
