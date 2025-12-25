import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";

const LoginWith = () => {
  const { googleSignIn, githubSignIn } = useContext(AuthContext);


  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        toast.success("google login done");
      })
      .catch(() => {
        toast.error("google login failed");
      });
  };

  const handleGithubSignIn = () => {
    githubSignIn()
      .then(() => {
        toast.success("github login done");
      })
      .catch(() => {
        toast.error("github login failed");
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
      <button
        onClick={handleGithubSignIn}
        className="btn btn-outline text-green-500"
      >
        <FaGithub></FaGithub>Login with github
      </button>
    </div>
  );
};

export default LoginWith;
