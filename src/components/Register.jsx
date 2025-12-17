import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const { createNewUser, setUser } = useContext(AuthContext);

  const handleRegisterForm = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photo, email, password);

    // ==== firebase functions====
    createNewUser(email, password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
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
