import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "tanvir",
    email: "tanvir22@mail.com",
  });

  const authInfo = {
    user,
    setUser,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export { AuthContext };
export default AuthProvider;
