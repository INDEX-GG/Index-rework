import AboutPage from "pages/AboutPage/AboutPage";
import CasesPage from "pages/CasesPage/CasesPage";
import ContactsPage from "pages/ContactsPage/ContactsPage";
import ErrorPage from "pages/ErrorPage/ErrorPage";
import IndexPage from "pages/IndexPage/IndexPage";
import PartnersPage from "pages/PartnersPage/PartnersPage";
import VacanciesPage from "pages/VacanciesPage/VacanciesPage";
import { RouteObject } from "react-router-dom";

export const pageNameRU = [
  "Главная",
  "Вакансии",
  "О нас",
  "Контакты",
  "Партнеры",
  "Кейсы",
];

export const mainRoutes: RouteObject[] = [
  {
    path: "/",
    element: <IndexPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/vacancies",
    element: <VacanciesPage />,
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
  {
    path: "/cases",
    element: <CasesPage />,
  },
];
