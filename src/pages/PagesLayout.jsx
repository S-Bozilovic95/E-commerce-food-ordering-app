import { Outlet } from "react-router-dom";
import Footer from "../components/global/Footer";
import MainNavigation from "../components/global/MainNavigation";

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
