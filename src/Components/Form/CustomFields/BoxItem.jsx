import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormControl } from 'react-bootstrap';
import { ErrorMessage, getIn } from 'formik';

const BoxItem = ({
  field: { name, value, onChange, onBlur },
  form: { errors, touched},
  id
}) => {
  return (
    <FormGroup>
      <FormControl
        name={name}
        type="number"
        size="sm" 
        placeholder={`Ingrese el porcentage para el año ${id.split("-")[1]}`}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        isInvalid={getIn(errors, name) && getIn(touched, name)}
        className="mb-2"
      />
      <ErrorMessage 
        name={name}
        component="div"
        className="invalid-feedback"
      />
    </FormGroup>
  );
}

BoxItem.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
  }).isRequired,
  form: PropTypes.shape({
    errors: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
}

export default BoxItem;
