import React from 'react';
import PropTypes from 'prop-types';
import { FieldArray, getIn } from 'formik';
import { FormGroup, FormLabel, Col, Row } from 'react-bootstrap';

import ListBox2 from './ListBox2';

const DualListBox = ({
  field: { name },
  form: { values }
}) => {
  const problemsName = Object.keys(getIn(values, name));
  
  return (
    <FormGroup as={Col}>
      <FormLabel>Definicíon de Problemas</FormLabel>
      <Row>
        {
          problemsName.map((problem, index) => (
            <FieldArray
              key={`${name}.${problem}`}
              name={`${name}.${problem}`}
              component={ListBox2}
            />
          ))
        }
      </Row>
    </FormGroup>
  );
}
  
DualListBox.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  form: PropTypes.shape({
    values: PropTypes.object.isRequired,
  }).isRequired,
}

export default DualListBox;
