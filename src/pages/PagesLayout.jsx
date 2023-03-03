import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const PagesLayout = () => {
  return (
    <div>
      <MainNavigation />
      <Outlet />
    </div>
  );
};

export default PagesLayout;
