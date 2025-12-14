import { createBrowserRouter } from "react-router-dom";
import { Root } from "../layouts/Root";
import Home from "../components/Home";

const PublicRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
]);

export default PublicRouter;
