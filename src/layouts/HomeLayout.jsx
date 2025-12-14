import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";
import LatestNews from "../components/LatestNews";

const HomeLayout = () => {
  return (
    <>
      <header className="mb-12">
        <Header></Header>
      </header>

      <article className="mb-12 w-11/12 mx-auto">
        <LatestNews></LatestNews>
      </article>

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
