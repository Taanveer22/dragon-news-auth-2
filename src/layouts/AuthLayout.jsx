import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Privacy from "../components/Privacy";

const AuthLayout = () => {
  return (
    <div>
      <nav className="my-6 w-11/12 mx-auto">
        <Nav></Nav>
      </nav>
      <div className="">
        <Privacy></Privacy>
      </div>
      <div className="">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AuthLayout;
