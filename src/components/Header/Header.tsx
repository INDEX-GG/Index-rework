import React from "react";
import { pageNameRU } from "routes/mainRoutes";
import { useHeaderStyles } from "./style";

interface IHeaderProps {
  titleId: number;
}

const Header = ({ titleId }: IHeaderProps) => {
  const headerTitle = pageNameRU[titleId];

  const sliderPathArr = (index: number, arr: string[]) => {
    const sliderArr: string[] = [];
    for (let i = index + 1; i < arr.length; i++) {
      sliderArr.push(arr[i].toUpperCase());
    }
    for (let i = index - 1; i >= 0; i--) {
      sliderArr.push(arr[i].toUpperCase());
    }
    return sliderArr;
  };

  const sliderNavAlt = sliderPathArr(titleId, pageNameRU);

  return (
    <HeaderContainerSC>
      <NavContainerSC>
        <NavWrapperSC>
          <NavBlockMainSC>{headerTitle}</NavBlockMainSC>
          <NavBlockAltSC>
            <NavBlockAltListSC>
              {sliderNavAlt.map((e, index) => {
                return <NavBlockAltElemSC key={index}>{e}</NavBlockAltElemSC>;
              })}
            </NavBlockAltListSC>
          </NavBlockAltSC>
        </NavWrapperSC>
      </NavContainerSC>
    </HeaderContainerSC>
  );
};

const {
  HeaderContainerSC,
  NavBlockMainSC,
  NavContainerSC,
  NavWrapperSC,
  NavBlockAltSC,
  NavBlockAltListSC,
  NavBlockAltElemSC,
} = useHeaderStyles();

export default React.memo(Header);
