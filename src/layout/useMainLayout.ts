import { useState, WheelEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { mainRoutes } from "routes/mainRoutes";

type ChangePageStatType = {
  isLoading: boolean;
  page: number;
};

export const useMainLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation() || { pathname: "/" };
  const pathArr: string[] = mainRoutes.map((item) => item.path || "");
  const [currentIndexPage, setCurrentIndexPage] = useState<number>(
    pathArr.indexOf(pathname),
  );
  const [isChangePage, setChangePage] = useState<ChangePageStatType>({
    isLoading: false,
    page: currentIndexPage,
  });

  const handlePush = (nextIndexPage: number) => {
    setChangePage({ isLoading: true, page: nextIndexPage });

    //todo: переделать очищение setTimeout
    //Очищаем сеттаймауты, чтобы коректно перейти на последнюю страницу (не проходя все)
    for (let i = 1; i < 1000; i++) {
      clearTimeout(i);
    }

    setChangePage({
      isLoading: true,
      page: nextIndexPage,
    });

    setTimeout(() => {
      navigate(pathArr[nextIndexPage]);
      setChangePage((prevState) => ({
        ...prevState,
        isLoading: false,
      }));
    }, 2000);
  };

  const handleChangePage = (newPageIndex: number) => {
    if (
      currentIndexPage + newPageIndex < pathArr.length &&
      currentIndexPage + newPageIndex >= 0
    ) {
      setCurrentIndexPage((prevState) => prevState + newPageIndex);
      const nextIndexPage = currentIndexPage + newPageIndex;
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
    isChangePage,
    handleWhell,
  };
};
