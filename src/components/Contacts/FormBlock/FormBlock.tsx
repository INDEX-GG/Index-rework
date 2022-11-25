import React from "react";
import { useFormBlockStyles } from "./styles";

const FormBlock = () => {
  return (
    <FormBlockContainerSC
      onSubmit={(e) => {
        e.preventDefault();
        console.log("отправка");
      }}>
      <FormTitleSC>Напишите нам</FormTitleSC>
      <FormSubTextSC>
        Есть идея? Расскажите о своем проекте, укажите контакты, и мы свяжемся с
        Вами, чтобы все обсудить.
      </FormSubTextSC>
      <FormListSC>
        <FormElemSC>
          <FormInputSC placeholder="Ваше имя"></FormInputSC>
        </FormElemSC>
        <FormElemSC>
          <FormInputSC placeholder="Почта"></FormInputSC>
        </FormElemSC>
        <FormElemSC>
          <FormInputSC placeholder="Сообщение"></FormInputSC>
        </FormElemSC>
      </FormListSC>
      <FormPolicyTextSC>
        Нажимая кнопку ниже, я соглашаюсь с Политикой конфиденциальности
      </FormPolicyTextSC>
      <FormButtonTextSC>Связаться с нами</FormButtonTextSC>
    </FormBlockContainerSC>
  );
};

const {
  FormBlockContainerSC,
  FormTitleSC,
  FormSubTextSC,
  FormListSC,
  FormElemSC,
  FormInputSC,
  FormPolicyTextSC,
  FormButtonTextSC,
} = useFormBlockStyles();

export default React.memo(FormBlock);
