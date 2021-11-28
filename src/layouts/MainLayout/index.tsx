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
  } = useGlobalContext();

  const navigate = useNavigate();

  const handleDebtEditClick = (debt: Debt) => {
    const editDebtUrl = `${debt.id}`;
    navigate(editDebtUrl);
  };

  return (
    <>
      <Header onSubmit={() => {}} />
      <Navbar />
      <TableList dataDebts={dataDebts} onDebtEditClick={handleDebtEditClick} />
    </>
  );
}

export default Home;
