import { pageNameRU, mainRoutes } from "routes/mainRoutes";
import { useLocation, useNavigate } from "react-router-dom";
import { SliderObjType } from "./types";
import { StatePageType } from "layout/types";

export const useHeader = (
  statePage: StatePageType,
  setStatePage: React.Dispatch<React.SetStateAction<StatePageType>>,
) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathArr: string[] = mainRoutes.map((item) => item.path || "");

  const pathCurrentIndex = pathArr.indexOf(location.pathname);

  const headerTitle = pageNameRU[statePage.page];

  const sliderPathArr = (index: number, arr: string[]) => {
    const sliderObj: SliderObjType[] = [];
    for (let i = index + 1; i < arr.length; i++) {
      sliderObj.push({ id: i, pathRu: arr[i].toUpperCase() });
    }
    for (let i = index - 1; i >= 0; i--) {
      sliderObj.push({ id: i, pathRu: arr[i].toUpperCase() });
    }
    return sliderObj;
  };

  const handlerAltNav = (id: number) => {
    //todo: переделать очищение setTimeout
    //Очищаем сеттаймауты, чтобы коректно перейти на последнюю страницу (не проходя все)
    for (let i = 1; i < 1000; i++) {
      clearTimeout(i);
    }
    if (id === pathCurrentIndex) {
      setStatePage((prevState) => ({
        ...prevState,
        isLoading: false,
      }));
      setStatePage((prevState) => ({
        ...prevState,
        page: pathCurrentIndex,
      }));
    } else {
      navigate(pathArr[id]);
    }
  };

  const sliderNavAlt = sliderPathArr(statePage.page, pageNameRU);

  return {
    headerTitle,
    handlerAltNav,
    sliderNavAlt,
  };
};
