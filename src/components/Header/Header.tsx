import React from "react";
import { useHeaderStyles } from "./style";
import { IHeaderProps } from "./types";
import { useHeader } from "./useHeader";

const Header = ({ statePage, setStatePage }: IHeaderProps) => {
  const { headerTitle, handlerAltNav, sliderNavAlt } = useHeader(
    statePage,
    setStatePage,
  );

  return (
    <HeaderContainerSC>
      <NavContainerSC>
        <NavWrapperSC>
          <NavBlockMainSC>
            <a onClick={() => handlerAltNav(statePage.page)}>{headerTitle}</a>
          </NavBlockMainSC>
          <NavBlockAltSC>
            <NavBlockAltListSC>
              {sliderNavAlt.map((elem, index) => {
                return (
                  <NavBlockAltElemSC key={index}>
                    <a onClick={() => handlerAltNav(elem.id)}>{elem.pathRu}</a>
                  </NavBlockAltElemSC>
                );
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
