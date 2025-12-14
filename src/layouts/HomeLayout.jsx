
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";

const HomeLayout = () => {
  return (
    <>
      <header>
        <Header></Header>
      </header>

      <nav>
        <Nav></Nav>
      </nav>

      <main>
        <Outlet></Outlet>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default HomeLayout;
