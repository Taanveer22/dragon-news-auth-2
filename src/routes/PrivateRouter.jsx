import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

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
      <Navigate to="/auth/login"></Navigate>
    </>
  );
};

export default PrivateRouter;
