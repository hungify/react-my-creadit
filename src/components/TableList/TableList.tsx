import styled from "styled-components";
import { toCurrencyVND } from "../../helpers/currencyConvert";
import { formatDate } from "../../helpers/dateFormat";
import { Debt } from "../../models/IAppState";
import Popup from "../Popup";

type TableListProps = {
  dataDebts: Array<Debt>;
  onDebtEditClick: (debt: Debt) => void;
  onDebtDeleteClick: (debt: Debt) => void;
  onDebtCompleteClick: (debt: Debt) => void;
};

function TableList({
  dataDebts,
  onDebtEditClick,
  onDebtDeleteClick,
  onDebtCompleteClick,
}: TableListProps) {
  return (
    <>
      {dataDebts.length > 0 ? (
        <TableContainer>
          <thead>
            <TR>
              <TH>
                <h1>#</h1>
              </TH>
              <TH>
                <Button>Tên người nợ</Button>
              </TH>
              <TH>
                <Button>Số tiền nợ</Button>
              </TH>
              <TH>
                <Button>Lãi suất</Button>
              </TH>
              <TH>
                <Button>Ngày nợ</Button>
              </TH>
              <TH>
                <Button>Ngày trả</Button>
              </TH>
              <TH>
                <Button>Nợ phải trả</Button>
              </TH>
              <TH></TH>
            </TR>
          </thead>
          <tbody>
            {dataDebts.map(
              (debt, index) => (
                (index += 1),
                (
                  <TR key={debt.id} isComplete={debt.isComplete}>
                    <TD>{index}</TD>
                    <TD>{debt.name}</TD>
                    <TD>{toCurrencyVND(debt.oweMoney)}</TD>
                    <TD>{debt.interestRate}%</TD>
                    <TD>{formatDate(debt.startDate)}</TD>
                    <TD>{formatDate(debt.endDate)}</TD>
                    <TD>{toCurrencyVND(debt?.liabilities ?? "")}</TD>
                    <TD>
                      <Popup
                        debt={debt}
                        onEditClick={onDebtEditClick}
                        onDeleteClick={onDebtDeleteClick}
                        onCompleteClick={onDebtCompleteClick}
                      />
                    </TD>
                  </TR>
                )
              )
            )}
          </tbody>
        </TableContainer>
      ) : (
        <div className="table__empty">
          Không có ai trong danh sách! Vui lòng chuyển sang trang khác
        </div>
      )}
    </>
  );
}

export default TableList;

const TableContainer = styled.table`
  overflow: hidden;
  width: 80%;
  margin: 0 auto;
  display: table;
  padding: 0 0 8em 0;
`;
const TD = styled.td`
  font-weight: 400;
  font-size: 16px;
  color: #a7a1ae;
  border-bottom: none;
  text-align: left;
  vertical-align: middle;
  padding: 0.5rem;

  &:hover:not(:last-child) {
    background-color: #fff842;
    color: #403e10;

    transition-delay: 0s;
    transition-duration: 0.4s;
    transition-property: all;
  }

  &:not(:nth-child(n-2)) {
    padding-bottom: 1%;
    padding-top: 1%;
    padding-left: 1%;
  }
`;

const TH = styled.th`
  background-color: #1f2739;
  padding: 0.5rem;
  &:not(:last-child) {
    padding-bottom: 1%;
    padding-top: 1%;
    padding-left: 1%;
  }

  & h1 {
    height: 30px;
    font-weight: bold;
    font-size: 1.4rem;
    text-align: left;
    color: #185875;
  }
`;

const TR = styled.tr`
  ${({ isComplete }) => isComplete && `background-color: #f2f2f2;`}
  &:nth-child(odd) {
    background-color: #323c50;
  }
  &:nth-child(even) {
    background-color: #2c3446;
  }
`;

const Button = styled.button`
  padding: 0;
  border: 0;
  background-color: transparent;
  margin-bottom: 1px;
  font-weight: bold;
  color: #fb667a;
  height: 50px;
  text-align: left;
  width: 100%;

  &:hover {
    color: #fff842;
  }
`;
