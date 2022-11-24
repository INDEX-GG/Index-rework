import styled from "styled-components";

const HeaderContainerSC = styled("header")`
  padding: 48px 0;
  margin-left: 248px;
  flex-direction: row;
`;

const NavContainerSC = styled("nav")``;

const NavWrapperSC = styled("ul")`
  display: flex;
`;

const NavBlockMainSC = styled("li")`
  font-weight: 700;
  font-size: 64px;
  line-height: 78px;
  position: relative;
`;

export const useHeaderStyles = () => ({
  HeaderContainerSC,
  NavContainerSC,
  NavWrapperSC,
  NavBlockMainSC,
});
