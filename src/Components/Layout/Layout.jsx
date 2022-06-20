import { SideBar } from "../SideBar";
import { Outlet } from "react-router-dom";
import "./style.scss";
const Layout = () => {
  return (
    <div className="App">
      <SideBar />
      <div className="page">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
