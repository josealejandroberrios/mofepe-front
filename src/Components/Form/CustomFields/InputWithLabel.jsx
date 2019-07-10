import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, getIn } from 'formik';
import { FormGroup, FormLabel, FormControl, Col } from 'react-bootstrap';

// import { addClassName } from '../utils'

const InputWithLabel = ({ 
  field: { name, value, onChange, onBlur },
  form: { errors, touched },
  id,
  label,
  type,
  placeholder
}) => (
  <FormGroup 
    as={Col}
    controlId={id}
  >
    <FormLabel>{ label }</FormLabel>
    <FormControl
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      isInvalid={getIn(errors, name) && getIn(touched, name)}
    />
    <ErrorMessage 
      name={name}
      component="div"
      className="invalid-feedback"
    />  
  </FormGroup>
);

InputWithLabel.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    onBlur: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
  }).isRequired,
  form: PropTypes.shape({
    errors: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default InputWithLabel;
