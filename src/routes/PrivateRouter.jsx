import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  if (loading) {
    return (
      <p className="text-center text-9xl font-bold text-yellow-600">
        loading...
      </p>
    );
  }

  if (user && user?.email) {
    return children;
  }
  return (
    <>
      <Navigate to="/auth/login" state={location.pathname}></Navigate>
    </>
  );
};

export default PrivateRouter;
