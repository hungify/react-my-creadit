import React from 'react';
import PropTypes from 'prop-types';
import { Col, InputGroup, Row } from 'reactstrap';
import SearchForm from 'DebtList/components/SearchDebtForm/index.jsx';

Header.propTypes = {
  onSubmit: PropTypes.func,
};

Header.defaultProps = {
  onSubmit: null,
};

function Header(props) {
  const { onSubmit } = props;

  return (
    <Row className="debt__header">
      <Col sm={{ size: '6', offset: 1 }} className="debt__title">
        <h2>Sổ nợ</h2>
      </Col>
      <Col sm="5">
        <InputGroup>
          <SearchForm onSubmit={onSubmit} />
        </InputGroup>
      </Col>
    </Row>
  );
}

export default Header;
