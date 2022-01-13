import * as Yup from "yup";
import { FastField, Form, Formik, FormikHelpers } from "formik";
import InputField from "./Fields/InputField";
import SelectField from "./Fields/SelectField";
import { Debt } from "../../models/IAppState";
import CurrencyField from "./Fields/CurrencyField";
import DateField from "./Fields/DateField";
import styled from "styled-components";
import { ButtonMixin } from "../../styles/MixinStyled";
import { INTEREST_RATE_OPTIONS } from "../../constants";

type FormProps = {
  initialValues: Debt;
  onSubmit: (values: Debt, { setSubmitting, resetForm }: FormikHelpers<Debt>) => void;
  isAddMode: boolean;
};

function FormDebt(props: FormProps) {
  const { initialValues, isAddMode, onSubmit } = props;

  const initialValuesUpdate = initialValues?.id !== "" ? initialValues : "";

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Bạn cần nhập tên người mượn"),
    interestRate: Yup.number().required("Bạn cần chọn lãi suất cho mượn"),
    oweMoney: Yup.string().required("Bạn cần nhập số tiền mượn"),
    startDate: Yup.date().required("Bạn cần chọn ngày mượn"),
    endDate: Yup.date().required("Bạn cần chọn ngày trả"),
  });

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ handleSubmit, isSubmitting, dirty }) => {
        return (
          <Form onSubmit={handleSubmit}>
            <FastField name="name" component={InputField} label="Người mượn" type="text" />

            <FastField
              name="interestRate"
              component={SelectField}
              label="Lãi suất"
              options={INTEREST_RATE_OPTIONS}
            />

            <FastField
              name="oweMoney"
              component={CurrencyField}
              label="Số tiền mượn"
              initialValuesUpdate={initialValuesUpdate}
            />

            <FastField
              component={DateField}
              name="startDate"
              label="Ngày mượn tiền"
              initialValuesUpdate={initialValuesUpdate}
            />

            <FastField
              name="endDate"
              component={DateField}
              label="Ngày trả tiền"
              initialValuesUpdate={initialValuesUpdate}
            />

            <div>
              <ButtonAdd disabled={!dirty || isSubmitting}>
                {isAddMode ? "Thêm vào danh sách" : "Cập nhật thông tin"}
              </ButtonAdd>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormDebt;

const ButtonAdd = styled.button.attrs((props) => ({
  type: "submit",
}))`
  ${ButtonMixin.EffectOne}
`;
