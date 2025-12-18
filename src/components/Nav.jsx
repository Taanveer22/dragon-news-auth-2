import { Link, NavLink } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Nav = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        alert("log out successful");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="flex justify-between items-center">
      <div>{user?.email}</div>
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
      <div className="flex gap-3 items-center">
        <div>
          {user && user?.displayName ? (
            <p className="text-sm font-medium">{user.displayName}</p>
          ) : (
            <p className="text-sm font-medium">No User</p>
          )}
        </div>

        <div>
          {user && user?.displayName ? (
            <img src={user.photoURL} className="w-10 rounded-full" />
          ) : (
            <img src={userIcon} className="w-10" />
          )}
        </div>

        <div>
          {user && user?.displayName ? (
            <button
              onClick={handleLogOut}
              className="btn btn-neutral rounded-none"
            >
              Logout
            </button>
          ) : (
            <Link to={"/auth/login"} className="btn btn-neutral rounded-none">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
