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
interface IUpdateDebt {
  type: "debt/update";
  payload: Debt[];
}

interface IDeleteDebt {
  type: "debt/delete";
  payload: Debt[];
}

interface ICompleteDebt {
  type: "debt/complete";
  payload: Debt[];
}

export type IAppActionCreator =
  | ILoadDataSuccess
  | IAddDebt
  | IUpdateDebt
  | IDeleteDebt
  | ICompleteDebt;

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
