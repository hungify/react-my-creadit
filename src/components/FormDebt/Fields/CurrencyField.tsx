import { ErrorMessage } from "formik";
import { FormFeedback } from "reactstrap";
import styled from "styled-components";

import { FormMixin } from "../../../styles/MixinStyled";
import Currency from "../components/Currency";

type CurrencyFieldProps = {
  field: { name: string; onBlur: () => void };
  form: {
    setFieldValue: (name: string, currency: string) => void;
    errors: Record<string, string>;
    touched: Record<string, string>;
  };
  label: string;
  initialValuesUpdate: { oweMoney: string };
};

function CurrencyField(props: CurrencyFieldProps) {
  const { field, form, label, initialValuesUpdate } = props;
  const { name, onBlur } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  const handleCurrencyChange = (currency: string) => {
    form.setFieldValue(name, currency);
  };

  return (
    <FormFieldContainer>
      <Currency
        name={name}
        onCurrencyChange={handleCurrencyChange}
        onCurrencyBlur={onBlur}
        initialValuesUpdate={initialValuesUpdate}
      />

      {label && (
        <LabelField className="is-invalid" htmlFor={name}>
          {label}
        </LabelField>
      )}
      {showError && <FormErrorFeedback name={name} component={FormFeedback} />}
    </FormFieldContainer>
  );
}

export default CurrencyField;

const FormFieldContainer = styled.div`
  ${FormMixin.FormField}
`;

const LabelField = styled.label`
  ${FormMixin.LabelField}
  ${FormMixin.LabelEffect}
`;

const FormErrorFeedback = styled(ErrorMessage)`
  ${FormMixin.ErrorMessage}
`;
