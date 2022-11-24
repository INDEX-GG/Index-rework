import { WheelEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { mainRoutes } from "routes/mainRoutes";

export const useMainLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation() || { pathname: "/" };
  const pathArr: string[] = mainRoutes.map((item) => item.path || "");
  const currentIndexPage = pathArr.indexOf(pathname);

  const handleWhell = (e: WheelEvent<HTMLDivElement>) => {
    const scrollValue = e.deltaY;
    if (scrollValue > 0) {
      const nextPath = pathArr[currentIndexPage + 1];
      if (nextPath) {
        navigate(nextPath);
      }
    } else {
      const prevPath = pathArr[currentIndexPage - 1];
      if (prevPath) {
        navigate(prevPath);
      }
    }
  };
  return {
    handleWhell,
  };
};
