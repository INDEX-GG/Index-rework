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
  border: 2px solid;
  border-radius: 50%;
  margin-right: 50px;
  border-color: ${({ theme }) => theme.colors.white};
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
