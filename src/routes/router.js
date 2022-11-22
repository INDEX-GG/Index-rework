import About from "../pages/About/About";
import Contacts from "../pages/Contacts/Contacts";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Main from "../pages/Main/Main";
import Partners from "../pages/Partners/Partners";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
