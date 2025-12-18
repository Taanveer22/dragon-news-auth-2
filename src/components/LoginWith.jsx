import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";

const LoginWith = () => {
  const { googleSignIn, githubSignIn, setUser } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Login With</h1>
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-outline text-blue-500"
      >
        <FaGoogle></FaGoogle>Login with google
      </button>
      <button onClick={handleGithubSignIn} className="btn btn-outline text-green-500">
        <FaGithub></FaGithub>Login with github
      </button>
    </div>
  );
};

export default LoginWith;
