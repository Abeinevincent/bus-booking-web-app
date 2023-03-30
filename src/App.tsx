import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/layout/header/Navbar";
import Booking from "./pages/booking/Booking";
import Bookings from "./pages/booking/Bookings";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Booking />,
  },
  {
    path: "/book",
    element: <Booking />,
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
        <Bookings/>
      </div>
    ),
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
