import React from "react";
import { InputStateType } from "../types";
import { useFormElemStyles } from "./style";

interface IFormElemProps {
  id: string;
  name: string;
  maxLength: number;
  type: string;
  placeholder: string;
  state: InputStateType;
  onBlur: React.FocusEventHandler<HTMLInputElement> | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const FormElem: React.FC<IFormElemProps> = ({
  id,
  name,
  maxLength,
  type,
  placeholder,
  state,
  onBlur,
  onChange,
}) => {
  return (
    <FormElemSC>
      <FormInputSC
        placeholder={placeholder}
        onBlur={onBlur}
        value={state.text}
        onChange={onChange}
        id={id}
        type={type}
        maxLength={maxLength}
        name={name}></FormInputSC>
      {state.isDirty && state.error && (
        <FormElemErrorTextSC>{state.error}</FormElemErrorTextSC>
      )}
    </FormElemSC>
  );
};

const { FormElemSC, FormElemErrorTextSC, FormInputSC } = useFormElemStyles();

export default React.memo(FormElem);
