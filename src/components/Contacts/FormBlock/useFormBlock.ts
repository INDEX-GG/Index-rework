import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { useState } from "react";
import { useEffect } from "react";
import { FormStateType, InputStateType } from "./types";

export const useFormBlock = () => {
  const [name, setName] = useState<InputStateType>({
    text: "",
    isDirty: false,
    error: "Введите имя",
  });

  const [email, setEmail] = useState<InputStateType>({
    text: "",
    isDirty: false,
    error: "Введите почту",
  });

  const [message, setMessage] = useState<InputStateType>({
    text: "",
    isDirty: false,
    error: "Введите почту",
  });

  const [form, setForm] = useState<FormStateType>({
    isValid: false,
    result: "",
    error: "",
    hideStyle: { visibility: "visible", opacity: "1" },
  });

  useEffect(() => {
    if (name.error || email.error || message.error) {
      setForm((prevState) => ({
        ...prevState,
        isValid: false,
      }));
    } else {
      setForm((prevState) => ({
        ...prevState,
        isValid: true,
      }));
    }
  }, [name.error, email.error, message.error]);

  const submitHandler = () => {
    return (e: any) => {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_tnpq3rl",
          "template_2o1lunz",
          e.target,
          "user_gA4mJT01dIZlfSXzraUHT",
        )
        .then(
          (result: EmailJSResponseStatus) => {
            setForm((prevState) => ({
              ...prevState,
              result: result.text,
              hideStyle: { visibility: "hidden", opacity: "0" },
            }));
          },
          (error: EmailJSResponseStatus) => {
            setForm((prevState) => ({
              ...prevState,
              error: error.text,
            }));
          },
        );
    };
  };

  const nameHandler = () => {
    return (e: any) => {
      setName((prevState) => ({
        ...prevState,
        text: e.target.value,
      }));

      if (!e.target.value.trim()) {
        setName((prevState) => ({
          ...prevState,
          error: "Введите имя",
        }));
      } else {
        setName((prevState) => ({
          ...prevState,
          error: "",
        }));
      }
    };
  };

  const emailHandler = () => {
    return (e: any) => {
      const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
      };

      setEmail((prevState) => ({
        ...prevState,
        text: e.target.value,
      }));
      if (!validateEmail(e.target.value)) {
        setEmail((prevState) => ({
          ...prevState,
          error: "Введите почту",
        }));
      } else {
        setEmail((prevState) => ({
          ...prevState,
          error: "",
        }));
      }
    };
  };

  const messageHandler = () => {
    return (e: any) => {
      setMessage((prevState) => ({
        ...prevState,
        text: e.target.value,
      }));
      if (e.target.value.length < 10) {
        setMessage((prevState) => ({
          ...prevState,
          error: "Сообщение должно быть не короче 10 символов",
        }));
      } else {
        setMessage((prevState) => ({
          ...prevState,
          error: "",
        }));
      }
    };
  };

  const blurHandler = () => {
    return (e: any) => {
      switch (e.target.name) {
        case "name":
          setName((prevState) => ({
            ...prevState,
            isDirty: true,
          }));
          break;
        case "email":
          setEmail((prevState) => ({
            ...prevState,
            isDirty: true,
          }));
          break;
        case "message":
          setMessage((prevState) => ({
            ...prevState,
            isDirty: true,
          }));
          break;
      }
    };
  };

  return {
    name,
    email,
    message,
    form,
    submitHandler,
    nameHandler,
    emailHandler,
    messageHandler,
    blurHandler,
  };
};
