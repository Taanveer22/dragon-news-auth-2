import Header from "../components/Header";
import Nav from "../components/Nav";
import LatestNews from "../components/LatestNews";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";
import { Outlet } from "react-router-dom";
import Privacy from "../components/Privacy";

const HomeLayout = () => {
  return (
    <>
      <header className="mb-6">
        <Header></Header>
      </header>

      <div className="mb-6">
        <Privacy></Privacy>
      </div>

      <article className="mb-6 w-11/12 mx-auto">
        <LatestNews></LatestNews>
      </article>

      <nav className="mb-6 w-11/12 mx-auto">
        <Nav></Nav>
      </nav>

      <main className="mb-6 w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-12 gap-6">
        <aside className="col-span-3">
          <LeftSide></LeftSide>
        </aside>
        <section className="col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightSide></RightSide>
        </aside>
      </main>
    </>
  );
};

export default HomeLayout;
