import { ErrorMessage } from "formik";
import { useEffect, useRef } from "react";
import { FormFeedback } from "reactstrap";
import styled from "styled-components";
import { FormMixin } from "../../../styles/MixinStyled";

type InputFieldProps = {
  field: {
    name: string;
  };
  form: {
    errors: Record<string, string>;
    touched: Record<string, string>;
  };
  type: "text";
  label: string;
};

function InputField(props: InputFieldProps) {
  const { field, type, label, form } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  const inputRef = useRef<HTMLInputElement>(null);

  const focusTextInput = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  useEffect(() => {
    focusTextInput();
  }, []);

  return (
    <FormFieldGroup>
      <FormInputField ref={inputRef} id={name} {...field} placeholder=" " type={type} />
      {label && (
        <LabelField className="is-invalid" htmlFor={name}>
          {label}
        </LabelField>
      )}
      {showError && <FormErrorFeedback name={name} component={FormFeedback} />}
    </FormFieldGroup>
  );
}
export default InputField;

const FormFieldGroup = styled.div`
  ${FormMixin.FormField}
`;

const FormInputField = styled.input`
  ${FormMixin.InputEffect}
`;

const LabelField = styled.label`
  ${FormMixin.LabelField}
  ${FormMixin.LabelEffect}
`;

const FormErrorFeedback = styled(ErrorMessage)`
  ${FormMixin.ErrorMessage}
`;
