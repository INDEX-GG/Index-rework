import { useState, WheelEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { mainRoutes } from "routes/mainRoutes";
import { StatePageType } from "./types";

export const useMainLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation() || { pathname: "/" };
  const pathArr: string[] = mainRoutes.map((item) => item.path || "");
  const [statePage, setStatePage] = useState<StatePageType>({
    isLoading: false,
    page: pathArr.indexOf(pathname),
  });

  const handlePush = (nextIndexPage: number) => {
    setStatePage((prevState) => ({
      ...prevState,
      isLoading: true,
      page: nextIndexPage,
    }));
    //todo: переделать очищение setTimeout
    //Очищаем сеттаймауты, чтобы коректно перейти на последнюю страницу (не проходя все)
    for (let i = 1; i < 1000; i++) {
      clearTimeout(i);
    }
    setStatePage({
      isLoading: true,
      page: nextIndexPage,
    });
    setTimeout(() => {
      navigate(pathArr[nextIndexPage]);
      setStatePage((prevState) => ({
        ...prevState,
        isLoading: false,
      }));
    }, 2000);
  };

  const handleChangePage = (newPageIndex: number) => {
    if (
      statePage.page + newPageIndex < pathArr.length &&
      statePage.page + newPageIndex >= 0
    ) {
      setStatePage((prevState) => ({
        ...prevState,
        page: prevState.page + newPageIndex,
      }));
      const nextIndexPage = statePage.page + newPageIndex;
      handlePush(nextIndexPage);
    }
  };

  const handleWhell = (e: WheelEvent<HTMLDivElement>) => {
    const scrollValue = e.deltaY;
    if (scrollValue > 0) {
      handleChangePage(1);
    } else {
      handleChangePage(-1);
    }
  };
  return {
    statePage,
    setStatePage,
    handleWhell,
  };
};
