import AboutPage from "../pages/AboutPage/AboutPage";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import IndexPage from "../pages/IndexPage/IndexPage";
import PartnersPage from "../pages/PartnersPage/PartnersPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/contacts",
    element: <ContactsPage />,
  },
  {
    path: "/partners",
    element: <PartnersPage />,
  },
]);
