import styled from "styled-components";

const ContactElemSC = styled("li")`
  display: flex;
  justify-content: end;
`;

const ContactIconSC = styled("div")`
  margin-right: 15px;
  margin-bottom: 37px;
`;

const ContactTextSC = styled("p")`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  white-space: pre-line;
`;

export const useContactsElemStyles = () => ({
  ContactElemSC,
  ContactIconSC,
  ContactTextSC,
});
