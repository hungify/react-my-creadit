import { toNumber } from "./toNumber";
export const toCurrencyVND = (currency: string | number) => {
  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  return formatter.format(toNumber(currency));
};
