import React, { createContext, useContext, useReducer } from "react";
import { getLiabilities } from "../helpers/common";
import { Debt, IAppActionCreator } from "../models/IAppState";

type IProps = {
  children: React.ReactNode;
};

export type IDebtState = {
  data: {
    dataDebts: Debt[];
  };
};

type Dispatch = (action: IAppActionCreator) => void;

export type IContext = {
  state: IDebtState;
  addDebt: (values: Debt) => void;
  updateDebt: (values: Debt) => void;
  deleteDebt: (idRemove: string) => void;
  completeDebt: (idComplete: string) => void;
  dispatch?: Dispatch;
};

const initialState = {
  data: {
    dataDebts: [
      {
        id: "1",
        name: "Bill Gates",
        interestRate: 20,
        startDate: new Date("Wed Jun 30 2021 00:00:00 GMT+0700 (Indochina Time)"),
        endDate: new Date("Sat Jul 17 2021 00:00:00 GMT+0700 (Indochina Time)"),
        oweMoney: "12 312 321",
        liabilities: 1311241,
        isComplete: false,
      },
      {
        id: "2",
        name: "fjphjophl",
        interestRate: 20,
        startDate: new Date("Wed Jun 30 2021 00:00:00 GMT+0700 (Indochina Time)"),
        endDate: new Date("Sat Jul 17 2021 00:00:00 GMT+0700 (Indochina Time)"),
        oweMoney: "12 312 321",
        liabilities: 1311241,
        isComplete: false,
      },
      {
        id: "3",
        name: "jfkafa",
        interestRate: 20,
        startDate: new Date("Wed Jun 30 2021 00:00:00 GMT+0700 (Indochina Time)"),
        endDate: new Date("Sat Jul 17 2021 00:00:00 GMT+0700 (Indochina Time)"),
        oweMoney: "12 312 321",
        liabilities: 1311241,
        isComplete: false,
      },
    ],
  },
};

const GlobalContext = createContext<IContext>({
  state: initialState,
  addDebt: (values: Debt) => {},
  updateDebt: (values: Debt) => {},
  deleteDebt: (idRemove: string) => {},
  completeDebt: (idComplete: string) => {},
});

const reducer = (state: IDebtState, action: IAppActionCreator) => {
  switch (action.type) {
    case "data/load":
      return state;
    case "debt/add":
      return {
        ...state,
        data: {
          ...state.data,
          dataDebts: [...state.data.dataDebts, action.payload],
        },
      };
    case "debt/update":
      return {
        ...state,
        data: {
          ...state.data,
          dataDebts: action.payload,
        },
      };
    case "debt/delete":
      return {
        ...state,
        data: {
          ...state.data,
          dataDebts: action.payload,
        },
      };

    case "debt/complete":
      return {
        ...state,
        data: {
          ...state.data,
          dataDebts: action.payload,
        },
      };
    default:
      return state;
  }
};

const GlobalProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const _handleAddDebt = (values: Debt) => {
    const { oweMoney, interestRate, startDate, endDate } = values;
    const totalLiabilities = getLiabilities(oweMoney, interestRate, startDate, endDate);
    const newValues = {
      ...values,
      liabilities: totalLiabilities,
    };
    dispatch({
      type: "debt/add",
      payload: newValues,
    });
  };

  const _handleUpdateDebt = (valuesDebtUpdate: Debt) => {
    const debtDataClone = [...state.data.dataDebts];
    const debtIndex = debtDataClone.findIndex((debt) => debt.id === valuesDebtUpdate.id);
    if (debtIndex >= 0) {
      debtDataClone[debtIndex] = valuesDebtUpdate;
    }
    dispatch({
      type: "debt/update",
      payload: debtDataClone,
    });
  };

  const _handleDeleteDebt = (idRemove: string) => {
    const dataDebtsDeleted = state.data.dataDebts.filter((debt) => debt.id !== idRemove);
    dispatch({
      type: "debt/update",
      payload: dataDebtsDeleted,
    });
  };

  const _handleCompleteDebt = (idComplete: string) => {
    const dataDebtsClone = [...state.data.dataDebts];
    const debtIndex = dataDebtsClone.findIndex((debt) => debt.id === idComplete);
    // const debtRemove = dataDebtsClone.splice(debtIndex, 1);
    dataDebtsClone[debtIndex].isComplete = true;
    // dataDebtsClone.push(debtRemove[0]);
    dispatch({
      type: "debt/update",
      payload: dataDebtsClone,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
        addDebt: _handleAddDebt,
        updateDebt: _handleUpdateDebt,
        deleteDebt: _handleDeleteDebt,
        completeDebt: _handleCompleteDebt,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
}

export { GlobalContext, GlobalProvider, useGlobalContext };
