import React from "react";
import { useContactsListStyles } from "./styles";
import VacanciesIcon from "assets/icon/vacancies/VacanciesIcon";
import GeoIcon from "assets/icon/geo/GeoIcon";
import MailIcon from "assets/icon/mail/MailIcon";
import PhoneIcon from "assets/icon/phone/PhoneIcon";
import ContactElem from "../ContactElem/ContactElem";

const ContactsList = () => {
  return (
    <ContactsListSC>
      <ContactElem
        text={"8 (919) 123-23-95, 8 (351) 223-23-95"}
        Icon={PhoneIcon}
      />
      <ContactElem text={"guru-grupp.mail.ru"} Icon={MailIcon} />
      <ContactElem
        text={`Молодогвардейцев 60в, офис 505${"\n"} Челябинск, Россия, 454021`}
        Icon={GeoIcon}
      />
      <ContactElem text={"Наши вакансии"} Icon={VacanciesIcon} />
    </ContactsListSC>
  );
};

const { ContactsListSC } = useContactsListStyles();

export default React.memo(ContactsList);
