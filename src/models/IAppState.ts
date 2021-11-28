export type Debt = {
  id: string;
  name: string;
  interestRate: number;
  startDate: Date;
  endDate: Date;
  oweMoney: string | number;
  liabilities?: number;
  isComplete: boolean;
};

interface ILoadDataSuccess {
  type: "data/load";
}

interface IAddDebt {
  type: "debt/add";
  payload: Debt;
}

// export type IAppActionCreator =
//   | { type: "LOAD_DATA_SUCCESS" }
//   | { type: "LOAD_DATA_FAIL" }
//   | { type: "SORT_DEBTS" }
//   | { type: "ADD_DEBT"; payload: string }
//   | { type: "UPDATE_DEBT" }
//   | { type: "REMOVE_DEBT" }
//   | { type: "COMPLETE_DEBT" }
//   | { type: "FILTER_BY_SEARCH_DEBT" }
//   | { type: "REMOVE_BY_CHECKBOX_DEBT" }
//   | { type: "ON_DEBT_CHANGE" };

export type IAppActionCreator = ILoadDataSuccess | IAddDebt;

export const INTEREST_RATE_OPTIONS = [
  { value: 2.4, label: "2,4%" },
  { value: 5, label: "5%" },
  { value: 8, label: "8%" },
  { value: 15, label: "15%" },
  { value: 20, label: "20%" },
];
