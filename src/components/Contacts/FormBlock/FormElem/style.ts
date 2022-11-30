import styled from "styled-components";

const FormElemSC = styled("li")`
  border-bottom: 2px solid #ffffff;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const FormElemErrorTextSC = styled("p")`
  position: absolute;
  color: #c94f4f;
  font-size: 13px;
  text-indent: 20px;
  margin-top: 4px;
`;

const FormInputSC = styled("input")`
  color: white;
  text-indent: 20px;
  width: 100%;
  border: none;
  background-color: transparent;
  margin: 7px 0;
  &::placeholder {
    color: #bbbbbb;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    text-indent: 20px;
  }
  &:hover {
    cursor: none;
    &::placeholder {
      color: transparent;
    }
  }
  &:focus {
    outline: none;
  }
`;

export const useFormElemStyles = () => ({
  FormElemSC,
  FormElemErrorTextSC,
  FormInputSC,
});
