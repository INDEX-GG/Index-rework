import React from "react";
import { useContactsStyles } from "./style";
import ContactsList from "./ContactsList/ContactsList";
import FormBlock from "./FormBlock/FormBlock";

const Contacts = () => {
  return (
    <ContactsContainerSC>
      <ContactsWrapperSC>
        <FormBlock />
        <ContactsBlockContainerSC>
          <ContactsTitleSC>Студия цифрового опыта INDEX </ContactsTitleSC>
          <ContactsList />
        </ContactsBlockContainerSC>
      </ContactsWrapperSC>
    </ContactsContainerSC>
  );
};

const {
  ContactsContainerSC,
  ContactsWrapperSC,
  FormBlockContainerSC,
  ContactsBlockContainerSC,
  ContactsTitleSC,
} = useContactsStyles();

export default React.memo(Contacts);
