import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/layout/header/Navbar";
import { Home } from "./pages/home/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "contact",
    element: (
      <div>
        <Navbar />
        <p>Contact Page here</p>
      </div>
    ),
  },
  {
    path: "bookings",
    element: (
      <div>
        <Navbar />
        <p>Bookings Page here</p>
      </div>
    ),
  },
  {
    path: "login",
    element: (
      <div>
        <Navbar />
        <p>Login page here</p>
      </div>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
