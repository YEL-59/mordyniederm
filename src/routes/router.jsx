import Mainlayout from "@/layouts";
import SignIn from "@/pages/auth/signin";
import About from "@/pages/main/about";

import Contact from "@/pages/main/contact";
import Home from "@/pages/main/home";

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
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {},
    ],
  },
]);
