import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const AuthLayout = () => {
  return (
    <div>
      <nav className="my-6 w-11/12 mx-auto">
        <Nav></Nav>
      </nav>
      <div className="">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AuthLayout;
