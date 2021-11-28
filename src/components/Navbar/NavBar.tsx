import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import styled from "styled-components";
import { ButtonMixin } from "../../styles/MixinStyled";

NavBar.propTypes = {};

function NavBar() {
  const lengthFilterDebtNotComplete = 5;

  return (
    <Container>
      <RowBS>
        <Col>
          <NavbarWrapper>
            {/* <button className="btn-effect btn__remove" onClick={handleRemoveByCheckBox}>
              Xoá tất cả
            </button> */}
            <ButtonAdd to="/debt/add">Thêm mới</ButtonAdd>
          </NavbarWrapper>
        </Col>

        <Col>
          <TextTotal>
            {lengthFilterDebtNotComplete ? (
              <span>Có {lengthFilterDebtNotComplete} người đang còn nợ</span>
            ) : null}
          </TextTotal>
        </Col>
      </RowBS>
    </Container>
  );
}

export default NavBar;

const RowBS = styled(Row)`
  padding: 20px;
  align-items: center;
  height: 100px;
`;

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const ButtonAdd = styled(Link)`
  ${ButtonMixin.EffectTwo}

  &::before,
  &:after {
    background-color: #3c8dad;
    opacity: 0.4;
  }
  &:hover {
    color: #3c8dad;
    border: 3px solid #3c8dad;
  }
`;

const TextTotal = styled.div`
  color: #78dec7;
  & span {
    font-size: 16px;
    font-weight: 600;
  }
`;
