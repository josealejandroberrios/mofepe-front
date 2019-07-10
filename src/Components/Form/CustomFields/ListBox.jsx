import React from 'react';
import PropTypes from 'prop-types';
import { Field, getIn } from 'formik';
import { FormLabel, Col } from 'react-bootstrap';

import BoxItem from './BoxItem';

const ListBox = ({
  form: { values },
  name
}) => {
  const percentageAppreciationOrDepreciation = getIn(values, name);
  
  return (
    <Col md={4}>
      <FormLabel>Porcentaje de Apreciación / Depreciación</FormLabel>
      {
        percentageAppreciationOrDepreciation.map((box, index) => (
          <Field
            key={`${name}-${index}`}
            component={BoxItem}
            name={`${name}[${index}].percentage`}
            id={`${name}-${index + 1}-input`}
          />
        ))
      }
    </Col>
  );
}

ListBox.propTypes = {
  form: PropTypes.shape({
    values: PropTypes.object.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
}

export default ListBox;
