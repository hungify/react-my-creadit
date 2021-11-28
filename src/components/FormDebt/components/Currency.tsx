import { useState } from "react";
import NumberFormat, { NumberFormatValues } from "react-number-format";
import styled from "styled-components";
import { FormMixin } from "../../../styles/MixinStyled";

type CurrencyProps = {
  name: string;
  initialValuesUpdate: {
    oweMoney: string;
  };
  onCurrencyChange: (value: string) => void;
  onCurrencyBlur: () => void;
};

function Currency(props: CurrencyProps) {
  const { initialValuesUpdate, name, onCurrencyChange, onCurrencyBlur } = props;

  const [currency, setCurrency] = useState(initialValuesUpdate.oweMoney);

  const handleOnChange = (value: NumberFormatValues) => {
    if (onCurrencyChange) {
      setCurrency(value.formattedValue);
      onCurrencyChange(value.formattedValue);
    }
  };

  return (
    <NumberFormatStyle
      name={name}
      placeholder=" "
      onValueChange={handleOnChange}
      onBlur={onCurrencyBlur}
      value={currency || undefined}
      thousandSeparator=" "
      suffix="  VNĐ"
      allowNegative={false}
    />
  );
}

export default Currency;

const NumberFormatStyle = styled(NumberFormat)`
  ${FormMixin.InputEffect}
`;
