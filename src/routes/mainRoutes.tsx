import AboutPage from "pages/AboutPage/AboutPage";
import CasesPage from "pages/CasesPage/CasesPage";
import ContactsPage from "pages/ContactsPage/ContactsPage";
import ErrorPage from "pages/ErrorPage/ErrorPage";
import IndexPage from "pages/IndexPage/IndexPage";
import PartnersPage from "pages/PartnersPage/PartnersPage";
import ReviewsPage from "pages/ReviewsPage/ReviewsPage";
import VacanciesPage from "pages/VacanciesPage/VacanciesPage";
import { RouteObject } from "react-router-dom";

export const pageNameRU = [
  "Главная",
  "Контакты",
  "Вакансии",
  "Партнеры",
  "Кейсы",
  "О нас",
  "Отзывы",
];

export const mainRoutes: RouteObject[] = [
  {
    path: "/",
    element: <IndexPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contacts",
    element: <ContactsPage />,
  },
  {
    path: "/vacancies",
    element: <VacanciesPage />,
  },
  {
    path: "/partners",
    element: <PartnersPage />,
  },
  {
    path: "/cases",
    element: <CasesPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/reviews",
    element: <ReviewsPage />,
  },
];
