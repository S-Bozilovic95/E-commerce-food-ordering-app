import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import MainNavigation from "../components/MainNavigation";

const PagesLayout = () => {
  return (
    <div>
      <MainNavigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PagesLayout;
