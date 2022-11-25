import React, { FC } from "react";
import { useContactsElemStyles } from "./style";

interface IContactBlockProps {
  text: string;
  Icon: FC;
}

const ContactElem: FC<IContactBlockProps> = ({ text, Icon }) => {
  return (
    <ContactElemSC>
      <ContactIconSC>
        <Icon />
      </ContactIconSC>
      <ContactTextSC>{text}</ContactTextSC>
    </ContactElemSC>
  );
};

const { ContactElemSC, ContactIconSC, ContactTextSC } = useContactsElemStyles();

export default React.memo(ContactElem);
