import { Link, NavLink } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";

const Nav = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        toast.success("log out successful");
      })
      .catch(() => {
        toast.error("log out failed");
      });
  };
  return (
    <div className="flex flex-col sm:flex-row gap-6 justify-between items-center">
      <div>{user ? user.displayName : "No User"}</div>
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
      <div className="flex gap-2 items-center">
        <div>
          {user && user?.photoURL ? (
            <img src={user.photoURL} className="w-10 rounded-full" />
          ) : (
            <img src={userIcon} className="w-10" />
          )}
        </div>

        <div>
          {user && user?.displayName ? (
            <button
              onClick={handleLogOut}
              className="btn btn-sm btn-error rounded-none"
            >
              Logout
            </button>
          ) : (
            <Link
              to={"/auth/login"}
              className="btn btn-sm btn-success rounded-none"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
