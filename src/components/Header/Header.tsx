import React from "react";
import { useHeaderStyles } from "./style";

interface IHeaderProps {
  headerTitle: string;
}

const Header = ({ headerTitle }: IHeaderProps) => {
  return (
    <HeaderContainerSC>
      <NavContainerSC>
        <NavWrapperSC>
          <NavBlockMainSC>{headerTitle}</NavBlockMainSC>
        </NavWrapperSC>
      </NavContainerSC>
    </HeaderContainerSC>
  );
};

const { HeaderContainerSC, NavBlockMainSC, NavContainerSC, NavWrapperSC } =
  useHeaderStyles();

export default React.memo(Header);
