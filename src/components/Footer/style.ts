import styled from "styled-components";
// import { themeObj } from "theme/themeObj";

const FooterWrapperSC = styled("div")`
  padding: 21px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterBlockTextSC = styled("div")`
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
`;

const FooterBlockIconsSC = styled("div")`
  height: 26px;
  & > svg:not(:last-child) {
    margin-right: 28px;
  }
`;

export const useFooterStyles = () => ({
  FooterWrapperSC,
  FooterBlockTextSC,
  FooterBlockIconsSC,
});
