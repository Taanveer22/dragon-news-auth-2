import { Link, useNavigate } from "react-router-dom";

import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const { createNewUser, setUser, updateProfileForUser } =
    useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState({});
  const navigate = useNavigate();

  const handleRegisterForm = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photo, email, password);

    // ==== input field validation
    if (name.length < 4) {
      setErrorMessage({
        ...errorMessage,
        name: "name must be 4 characters long",
      });
      return;
    }

    if (password.length < 6) {
      setErrorMessage({
        ...errorMessage,
        password: "password should be more than 6 characters",
      });
    }

    // ==== firebase functions====
    createNewUser(email, password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        // ==== profile update====
        updateProfileForUser({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/");
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-4xl font-semibold text-center pt-5 opacity-70">
          Registration
        </h1>
        <form onSubmit={handleRegisterForm} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
            />
            {errorMessage.name && (
              <p className="text-red-500 text-sm">{errorMessage.name}</p>
            )}
            <label className="label">Photo</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo Url"
            />
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
            {errorMessage.password && (
              <p className="text-rose-500 text-sm">{errorMessage.password}</p>
            )}
            <label className="label">
              <input type="checkbox" className="checkbox" />
              Accept Terms and Conditions
            </label>
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
        </form>
        <div className="flex items-center gap-2 text-lg font-medium ml-5 mb-5">
          <p>Already have an account?</p>
          <p className="text-red-600">
            <Link to="/auth/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
