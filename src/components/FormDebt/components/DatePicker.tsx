import { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import vi from "date-fns/locale/vi";
import styled from "styled-components";
import { FormMixin } from "../../../styles/MixinStyled";
registerLocale("vi-VN", vi);

type DatePickerProps = {
  name: string;
  onDateChange: (newDate: Date) => void;
  onPickDateBlur: () => void;
  initialValuesUpdate: {
    startDate: string;
    endDate: string;
  };
};

function DatePickerField(props: DatePickerProps) {
  const { name, onDateChange, onPickDateBlur, initialValuesUpdate } = props;
  const { startDate, endDate } = initialValuesUpdate;

  const [date, setDate] = useState(
    startDate !== undefined && endDate !== undefined
      ? name === "startDate"
        ? new Date(initialValuesUpdate.startDate)
        : new Date(initialValuesUpdate.endDate)
      : new Date()
  );

  const handleOnChange = (date: Date) => {
    if (onDateChange) {
      setDate(date);
      onDateChange(date);
    }
  };

  return (
    <DatePickerStyle
      locale="vi-VN"
      selected={date}
      dateFormat="dd/MM/yyyy"
      name={name}
      placeholderText=" "
      onChange={handleOnChange}
      onBlur={onPickDateBlur}
    />
  );
}

export default DatePickerField;

const DatePickerStyle = styled(DatePicker)`
  ${FormMixin.InputEffect}
`;
