import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const PagesLayout = () => {
  return (
    <>
      <MainNavigation />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default PagesLayout;
