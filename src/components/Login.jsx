import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const { logInUser, setUser } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  console.log(navigate);

  const handleLoginForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    // ====== firebase function =====
    logInUser(email, password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-4xl font-semibold text-center pt-5 opacity-70">
          Login your account
        </h1>
        <form onSubmit={handleLoginForm} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
        <div className="flex items-center gap-2 text-lg font-medium ml-5 mb-5">
          <p>Don't have an account?</p>
          <p className="text-red-600">
            <Link to="/auth/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
