import styled from "styled-components";

const HeaderContainerSC = styled("header")`
  padding: 48px 0;
  margin-left: 248px;
  flex-direction: row;
`;

const NavContainerSC = styled("nav")``;

const NavWrapperSC = styled("ul")`
  display: flex;

  :hover li + li {
    display: block;
  }
`;

const NavBlockMainSC = styled("li")`
  font-weight: 700;
  font-size: 64px;
  line-height: 78px;
  position: relative;

  margin-right: 28px;
`;

const NavBlockAltSC = styled("li")`
  position: relative;
  display: none;
`;

const NavBlockAltListSC = styled("ul")`
  position: absolute;
  top: 50%;
  margin-top: -0.2em;
  display: flex;
  white-space: nowrap;
`;

const NavBlockAltElemSC = styled("li")`
  &:not(:last-child) {
    margin-right: 52px;
  }
`;

export const useHeaderStyles = () => ({
  HeaderContainerSC,
  NavContainerSC,
  NavWrapperSC,
  NavBlockMainSC,
  NavBlockAltSC,
  NavBlockAltListSC,
  NavBlockAltElemSC,
});
