import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const LoginWith = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Login With</h1>
      <button className="btn btn-outline text-blue-500">
        <FaGoogle></FaGoogle>Login with google
      </button>
      <button className="btn btn-outline text-green-500">
        <FaGithub></FaGithub>Login with github
      </button>
    </div>
  );
};

export default LoginWith;
