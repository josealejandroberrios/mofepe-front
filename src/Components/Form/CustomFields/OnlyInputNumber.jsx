import React from 'react';
import PropTypes from 'prop-types';
import { getIn } from 'formik';
import { FormControl } from 'react-bootstrap';

const OnlyInputNumber = ({
  field: { name, value, onChange, onBlur },
  form: { errors, touched },
  id,
  placeholder
}) => (
  <FormControl
    name={name}
    id={id}
    type="number"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    isInvalid={getIn(errors, name) && getIn(touched, name)}
  />
)

OnlyInputNumber.propTypes = {
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
  placeholder: PropTypes.string.isRequired,

}

export default OnlyInputNumber;