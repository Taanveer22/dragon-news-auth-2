import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex justify-center items-center mt-6 ">
      <div className="space-y-2">
        <img src={logo} className="max-w-96" alt="" />
        <p className="text-lg text-center opacity-70">
          Journalism Without Fear or Favour
        </p>
        <p className="text-xl text-center">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
    </div>
  );
};

export default Header;
