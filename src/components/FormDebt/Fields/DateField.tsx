import { ErrorMessage } from "formik";
import { FormFeedback } from "reactstrap";
import styled from "styled-components";
import { ColorConstants } from "../../../styles/ConstantsStyled";
import { FormMixin } from "../../../styles/MixinStyled";
import DatePickerField from "../components/DatePicker";

type DateFieldProps = {
  field: { name: string; onBlur: () => void };
  form: {
    setFieldValue: (name: string, date: Date) => void;
    errors: Record<string, string>;
    touched: Record<string, string>;
  };
  label: string;
  initialValuesUpdate: {
    startDate: string;
    endDate: string;
  };
};

function DateField(props: DateFieldProps) {
  const { field, form, label, initialValuesUpdate } = props;
  const { name, onBlur } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  const handleOnDateChange = (date: Date) => {
    form.setFieldValue(name, date);
  };

  return (
    <FormFieldContainer>
      <DatePickerField
        name={name}
        onPickDateBlur={onBlur}
        onDateChange={handleOnDateChange}
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

export default DateField;

const FormFieldContainer = styled.div`
  ${FormMixin.FormField}
`;

const LabelField = styled.label`
  ${FormMixin.LabelField}
  color: ${ColorConstants.BORDER_COLOR};
  background-color: ${ColorConstants.BG_COLOR};
  top: -50%;
  transform: translateY(50%);
  display: inline-block;
  padding: 0 10px;
  &::after {
    content: " *";
    color: #51c4d3;
  }
`;

const FormErrorFeedback = styled(ErrorMessage)`
  ${FormMixin.ErrorMessage}
`;
