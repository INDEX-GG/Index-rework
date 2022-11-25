import styled from "styled-components";

const ContactsContainerSC = styled("div")`
  height: 100%;
  width: 100%;

  padding: 0 15px;
`;

const ContactsWrapperSC = styled("ul")`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormBlockContainerSC = styled("form")`
  max-width: 573px;

  margin-right: 210px;
`;

const ContactsBlockContainerSC = styled("form")`
  max-width: 390px;
  text-align: right;
`;

const ContactsTitleSC = styled("h3")`
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
  margin-bottom: 37px;
`;

export const useContactsStyles = () => ({
  ContactsContainerSC,
  ContactsWrapperSC,
  FormBlockContainerSC,
  ContactsBlockContainerSC,
  ContactsTitleSC,
});
