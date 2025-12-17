import { Link, NavLink } from "react-router-dom";
import userIcon from "../assets/user.png";
// import { useContext } from "react";
// import { AuthContext } from "../providers/AuthProvider";

const Nav = () => {
  // const { user } = useContext(AuthContext);
  return (
    <div className="flex justify-between items-center">
      <div className="">...</div>
      <div>
        <ul className="flex gap-3 opacity-70">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/career">Career</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex gap-3">
        <img src={userIcon} className="w-10" />
        <Link to={"/auth/login"} className="btn btn-neutral rounded-none">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Nav;
