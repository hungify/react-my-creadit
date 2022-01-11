import { ErrorMessage } from "formik";
import { ActionMeta, SingleValue } from "react-select";
import { FormFeedback } from "reactstrap";
import styled from "styled-components";
import { ColorConstants } from "../../../styles/ConstantsStyled";
import { FormMixin } from "../../../styles/MixinStyled";
import AsyncSelect from "react-select/async";
import { useMemo } from "react";

type InterestRate = {
  value: string;
  label: string;
};

type SelectFieldProps = {
  field: {
    name: string;
    value: string;
    onChange: (event: {}) => void;
  };
  form: {
    errors: Record<string, string>;
    touched: Record<string, string>;
  };
  options: InterestRate[];
  label: string;
};

function SelectField(props: SelectFieldProps) {
  const { field, form, options, label } = props;
  const { name, value } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  const selected = options.find((option: InterestRate) => option.value === value);

  const handleSelectOptionChange = (
    newValue: SingleValue<InterestRate>,
    actionMeta: ActionMeta<InterestRate>
  ) => {
    const changeEvent = {
      target: {
        name: name,
        value: newValue?.value,
      },
    };
    field.onChange(changeEvent);
  };

  const customStyles = useMemo(
    () => ({
      option: (provided: {}) => ({
        ...provided,
        borderBottom: "1px dotted pink",
        color: "#191A19",
        fontSize: 16,
        opacity: 0.9,
        padding: 15,
      }),
      singleValue: (provided: {}) => ({
        ...provided,
        fontSize: 16,
        color: "#c6b4ce",
      }),
      control: (provided: {}) => ({
        ...provided,
        height: 50,
        width: "100%",
        backgroundColor: "#1f2739",
      }),
      valueContainer: (provided: {}) => ({
        ...provided,
        height: "100%",
        backgroundColor: "#1f2739",
      }),
      indicatorsContainer: (provided: {}) => ({
        ...provided,
        height: "100%",
        borderRadius: 50,
      }),
    }),
    []
  );

  const filterColors = (inputValue: string) => {
    return options.filter((option) =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const promiseOptions = (inputValue: string) =>
    new Promise<InterestRate[]>((resolve) => {
      setTimeout(() => {
        resolve(filterColors(inputValue));
      }, 1000);
    });

  return (
    <FormFieldContainer>
      {label && (
        <LabelField className="is-invalid" htmlFor={name}>
          {label}
        </LabelField>
      )}
      <AsyncSelect
        cacheOptions
        defaultOptions
        loadOptions={promiseOptions}
        placeholder="Select..."
        id={name}
        {...field}
        value={selected}
        styles={customStyles}
        onChange={handleSelectOptionChange}
      />

      {showError && <FormErrorFeedback name={name} component={FormFeedback} />}
    </FormFieldContainer>
  );
}
export default SelectField;

const FormFieldContainer = styled.div`
  ${FormMixin.FormField}
`;

const LabelField = styled.label`
  ${FormMixin.LabelField}

  color: ${ColorConstants.BORDER_COLOR};
  z-index: 1;
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
