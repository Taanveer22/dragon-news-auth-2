import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";

const HomeLayout = () => {
  return (
    <>
      <header className="mb-12">
        <Header></Header>
      </header>

      <nav>
        <Nav></Nav>
      </nav>

      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default HomeLayout;
