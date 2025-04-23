

import Mainlayout from "@/layouts";
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
