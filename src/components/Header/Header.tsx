import React from "react";
import { useHeaderStyles } from "./style";

const Header = () => {
  return (
    <HeaderContainerSC>
      <NavContainerSC>
        <NavWrapperSC>
          <NavBlockMainSC>ГЛАВНАЯ</NavBlockMainSC>
        </NavWrapperSC>
      </NavContainerSC>
    </HeaderContainerSC>
  );
};

const { HeaderContainerSC, NavBlockMainSC, NavContainerSC, NavWrapperSC } =
  useHeaderStyles();

export default React.memo(Header);
