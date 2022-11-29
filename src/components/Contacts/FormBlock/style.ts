import styled from "styled-components";

const FormBlockContainerSC = styled("form")`
  max-width: 573px;
  margin-right: 210px;
`;

const FormHideBlockSC = styled("div")``;

const FormTitleSC = styled("h3")`
  text-align: center;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  margin-bottom: 24px;
`;

const FormSubTextSC = styled("p")`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 12px;
`;

const FormListSC = styled("ul")`
  margin-bottom: 43px;
`;

const FormPolicyTextSC = styled("p")`
  text-align: center;
  margin-bottom: 21px;
`;

const FormButtonTextSC = styled("button")`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

  padding: 10px 62px;
  border-radius: 50px;
  display: block;
  margin-left: auto;
  margin-right: auto;

  cursor: none;
`;

export const useFormBlockStyles = () => ({
  FormBlockContainerSC,
  FormHideBlockSC,
  FormTitleSC,
  FormSubTextSC,
  FormListSC,
  FormPolicyTextSC,
  FormButtonTextSC,
});
