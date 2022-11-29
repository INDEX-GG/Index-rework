import React from "react";
import FormElem from "./FormElem/FormElem";
import { useFormBlockStyles } from "./style";
import { useFormBlock } from "./useFormBlock";

const FormBlock = () => {
  const {
    name,
    email,
    message,
    form,
    submitHandler,
    nameHandler,
    emailHandler,
    messageHandler,
    blurHandler,
  } = useFormBlock();

  return (
    <FormBlockContainerSC onSubmit={submitHandler()}>
      <FormTitleSC>
        {(form.result && "Сообщение отправлено") ||
          (form.error && "Ошибка") ||
          "Напишите нам"}
      </FormTitleSC>
      <FormSubTextSC>
        {(form.result && "Мы скоро с Вами свяжемся!") ||
          (form.error && `${form.error}`) ||
          "Есть идея? Расскажите о своём проекте, укажите контакты, и мы свяжемся с вами, чтобы всё обсудить"}
      </FormSubTextSC>
      <FormHideBlockSC style={{ ...form.hideStyle }}>
        <FormListSC>
          <FormElem
            id="userName"
            name="name"
            maxLength={50}
            type="text"
            placeholder="Ваше имя"
            state={name}
            onBlur={blurHandler()}
            onChange={nameHandler()}
          />
          <FormElem
            id="userEmail"
            name="email"
            maxLength={20}
            type="email"
            placeholder="Почта"
            state={email}
            onBlur={blurHandler()}
            onChange={emailHandler()}
          />
          <FormElem
            id="userMessage"
            name="message"
            maxLength={200}
            type="text"
            placeholder="Сообщение"
            state={message}
            onBlur={blurHandler()}
            onChange={messageHandler()}
          />
        </FormListSC>
        <FormPolicyTextSC>
          Нажимая кнопку ниже, я соглашаюсь с Политикой конфиденциальности
        </FormPolicyTextSC>
        <FormButtonTextSC disabled={!form.isValid}>
          Связаться с нами
        </FormButtonTextSC>
      </FormHideBlockSC>
    </FormBlockContainerSC>
  );
};

const {
  FormBlockContainerSC,
  FormHideBlockSC,
  FormTitleSC,
  FormSubTextSC,
  FormListSC,
  FormPolicyTextSC,
  FormButtonTextSC,
} = useFormBlockStyles();

export default React.memo(FormBlock);
