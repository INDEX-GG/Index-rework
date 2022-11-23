import About from "../pages/AboutPage/AboutPage";
import Contacts from "../pages/Contacts/Contacts";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Index from "../pages/Index/Index";
import Partners from "../pages/Partners/Partners";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/partners",
    element: <Partners />,
  },
]);
