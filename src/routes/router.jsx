import Mainlayout from "@/layouts";
import About from "@/pages/main/about";

import Contact from "@/pages/main/contact";
import Home from "@/pages/main/home";
import Properties from "@/pages/main/properties";

import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "properties",
        element: <Properties/>
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
