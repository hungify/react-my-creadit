import { toNumber } from "./toNumber";

export const getDiffDays = (startDate: Date, endDate: Date): number => {
  if (startDate && endDate) {
    startDate = new Date(startDate);
    endDate = new Date(endDate);
    let diffInTime = endDate.getTime() - startDate.getTime();
    return diffInTime / (1000 * 3600 * 24);
  } else return -1;
};

export const getLiabilities = (
  oweMoney: number | string,
  interestPercent: number,
  startDate: Date,
  endDate: Date
) => {
  if (oweMoney && interestPercent && startDate && endDate) {
    oweMoney = toNumber(oweMoney);
    interestPercent = interestPercent / 100;
    const diffDays = getDiffDays(startDate, endDate);
    if (diffDays > -1) return oweMoney + oweMoney * diffDays * interestPercent;
  }
};
