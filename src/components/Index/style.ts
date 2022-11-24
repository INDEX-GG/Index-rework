import styled from "styled-components";

const IndexContainerSC = styled("div")`
  height: 100%;
  width: 100%;
`;

const IndexWrapperSC = styled("ul")`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IndexBlockLoaderSC = styled("li")`
  height: 222px;
  width: 222px;
  margin-right: 50px;
`;

const IndexBlockTextSC = styled("li")`
  font-weight: 700;
  font-size: 250px;
  line-height: 260px;
  letter-spacing: 20px;
`;

export const useIndexStyles = () => ({
  IndexContainerSC,
  IndexBlockLoaderSC,
  IndexBlockTextSC,
  IndexWrapperSC,
});
