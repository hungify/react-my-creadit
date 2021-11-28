import { FormikHelpers } from "formik";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import FormDebt from "../../components/FormDebt";
import { useGlobalContext } from "../../context/GlobalContext";
import { toNumber } from "../../helpers/toNumber";
import { Debt } from "../../models/IAppState";

function AddEditPage() {
  const {
    state: { data },
    addDebt,
  } = useGlobalContext();

  const { debtId } = useParams();

  const navigate = useNavigate();

  const isAddMode = !debtId;

  const editDebt = data.dataDebts.find((debt) => debt.id === debtId);

  const initial: Debt = {
    id: "",
    name: "",
    startDate: new Date(),
    endDate: new Date(),
    oweMoney: "",
    interestRate: 0,
    isComplete: false,
  };

  const initialValues = isAddMode ? initial : editDebt!;

  function handleSubmit(values: Debt, { setSubmitting, resetForm }: FormikHelpers<Debt>) {
    if (isAddMode) {
      const newValues = {
        ...values,
        id: uuid(),
        isComplete: false,
        oweMoney: toNumber(values?.oweMoney),
      };

      setTimeout(() => {
        // dispatch && dispatch({ type: "debt/add", payload: newValues });
        addDebt(newValues);
        navigate("/debt");
        setSubmitting(false);
        resetForm();
      }, 500);
    } else {
      const newOweMoney = toNumber(values.oweMoney!);
      values = { ...values, oweMoney: newOweMoney };
      navigate("/debt");
      // updateDebt(values);
    }
  }

  return (
    <FormMixedContainer>
      <FormDebt
        onSubmit={handleSubmit}
        initialValues={initialValues}
        isAddMode={isAddMode}
      />
    </FormMixedContainer>
  );
}

export default AddEditPage;

const FormMixedContainer = styled.div`
  margin: 2rem auto 1rem auto;
  max-width: 25rem;
`;
