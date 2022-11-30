import styled from "styled-components";
//ok

const PartnersContainerSC = styled("div")`
  height: 100%;
  max-width: 1250px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const PartnersListSC = styled("ul")`
  display: flex;
  justify-content: space-between;

  align-items: top;
  padding: 0 15px;
`;

const PartnersElemSC = styled("li")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 202px;
  align-items: stretch;
`;

const PartnersTextSC = styled("li")`
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  text-align: center;
`;

export const usePartnersStyle = () => ({
  PartnersContainerSC,
  PartnersListSC,
  PartnersElemSC,
  PartnersTextSC,
});
