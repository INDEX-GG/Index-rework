import React from "react";
import { useContactsStyles } from "./style";
import ContactsList from "./ContactsList/ContactsList";
import FormBlock from "./FormBlock/FormBlock";

const Contacts = () => {
  return (
    <ContactsContainerSC>
      <ContactsWrapperSC>
        <FormBlock />
        {/* <FormBlockContainerSC
          onSubmit={(e) => {
            e.preventDefault();
            console.log("отправка");
          }}>
          <h3>Напишите нам</h3>
          <p>
            Есть идея? Расскажите о своем проекте, укажите контакты, и мы
            свяжемся с Вами, чтобы все обсудить.
          </p>
          <ul>
            <li>
              <input placeholder="Ваше имя"></input>
            </li>
            <li>
              <input placeholder="Почта"></input>
            </li>
            <li>
              <input placeholder="Сообщение"></input>
            </li>
          </ul>
          <p>
            Нажимая кнопку ниже, я соглашаюсь с Политикой конфиденциальности
          </p>
          <button>Связаться с нами</button>
        </FormBlockContainerSC> */}
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
