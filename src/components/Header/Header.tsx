import { Col, Container, InputGroup, Row } from "reactstrap";
import SearchForm from "../SearchBox/SearchBox";
import styled from "styled-components";

type HeaderProps = {
  onSubmit?: () => void;
};

function Header({ onSubmit }: HeaderProps) {
  return (
    <ContainerBS>
      <RowBS>
        <ColBS>
          <Title>Sổ nợ</Title>
          <div>
            <InputGroup>
              <SearchForm onSubmit={() => {}} />
            </InputGroup>
          </div>
        </ColBS>
      </RowBS>
    </ContainerBS>
  );
}

export default Header;

const ContainerBS = styled(Container)`
  padding: 30px;
`;

const RowBS = styled(Row)`
  align-items: center;
`;

const Title = styled.h2`
  color: #fff842;
`;

const ColBS = styled(Col)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
