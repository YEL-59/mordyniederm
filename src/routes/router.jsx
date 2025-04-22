import Mainlayout from "@/layouts";
import About from "@/pages/main/about";

import Home from "@/pages/main/Home";

import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
