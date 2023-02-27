import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const PagesLayout = () => {
  return (
    <>
      <MainNavigation />
      <div className="page-layout">
        <Outlet />
      </div>
    </>
  );
};

export default PagesLayout;
