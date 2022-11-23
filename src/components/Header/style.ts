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

  &::before {
    width: 146px;
    content: "";
    height: 2px;
    position: absolute;
    top: 50%;
    left: -174px;
    background: ${({ theme }) => theme.colors.white};
  }
`;

export const useHeaderStyles = () => ({
  HeaderContainerSC,
  NavContainerSC,
  NavWrapperSC,
  NavBlockMainSC,
});
