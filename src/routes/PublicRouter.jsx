import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CenterContent from "../components/CenterContent";

const PublicRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Navigate to={"category/01"}></Navigate>,
      },
      {
        path: "category/:id",
        element: <CenterContent></CenterContent>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
]);

export default PublicRouter;
