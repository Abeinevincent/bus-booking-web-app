import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
  // {
  //   path: "contact",
  //   element: <Contact />
  // },
  // {
  //   path: "newsandupdates",
  //   element: <News />
  // },
  // {
  //   path: "gallery",
  //   element: <Gallery />
  // },
  // {
  //   path: "academia",
  //   element: <Academia />
  // },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
