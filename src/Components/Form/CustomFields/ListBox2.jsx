import React from 'react';
import PropTypes from 'prop-types';
import { getIn } from 'formik';
import { Col, Row, Button } from 'react-bootstrap';
import { IoIosAddCircleOutline } from 'react-icons/io';

import InputWithPrependAndApend from './InputWithPrependAndApend';

const ListBox2 = ({
  form: { values },
  name,
  push,
  remove,
}) => {
  const problemItems = getIn(values, name);
  const eventualRentalProblems = getIn(values, "eventualRentalProblems");
  const itemAgregated = { month: "", amount: "" }
  
  return (
    <Col>
      { eventualRentalProblems === "true" &&
        <Row>
          <Col md={2}>
            <Button
              variant="outline-success"
              size="sm"
              onClick={() => push(itemAgregated)}
            >
              <IoIosAddCircleOutline size={20} />
            </Button>
          </Col>
          <Col>
            { problemItems.length > 0 && 
                problemItems.map((problem, index) => (
                  <InputWithPrependAndApend 
                    key={`${name}[${index}]`}
                    name={`${name}[${index}]`}
                    index={index}
                    remove={remove}
                  />
            ))}
          </Col>
        </Row>  
      }
    </Col>
  );
}

ListBox2.propTypes = {
  form: PropTypes.shape({
    values: PropTypes.object.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
}

export default ListBox2;
