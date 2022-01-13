import { useNavigate } from "react-router";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import TableList from "../../components/TableList/TableList";
import { useGlobalContext } from "../../context/GlobalContext";
import { Debt } from "../../models/IAppState";

function Home() {
  const {
    state: {
      data: { dataDebts },
    },
    deleteDebt,
    completeDebt,
  } = useGlobalContext();

  const navigate = useNavigate();

  const handleDebtEditClick = (debt: Debt) => {
    const editDebtUrl = `${debt.id}`;
    navigate(editDebtUrl);
  };

  const handleDebtDeleteClick = (debt: Debt) => {
    deleteDebt(debt.id);
  };

  const handleDebtCompleteClick = (debt: Debt) => {
    completeDebt(debt.id);
  };

  return (
    <>
      <Header onSubmit={() => {}} />
      <Navbar />
      <TableList
        dataDebts={dataDebts}
        onDebtEditClick={handleDebtEditClick}
        onDebtCompleteClick={handleDebtCompleteClick}
        onDebtDeleteClick={handleDebtDeleteClick}
      />
    </>
  );
}

export default Home;
