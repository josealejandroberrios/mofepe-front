import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, getIn } from 'formik';
import { FormGroup, FormLabel, Col, FormCheck } from 'react-bootstrap';

const CheckBoxGroup = ({
  field: { name, value, },
  form: { values, errors, setFieldValue, setFieldTouched },
  label,
  options
}) => {
  const handleChange = (event) => {
    const { currentTarget } = event;
    let valueArray = [...value] || [];
    
    if (currentTarget.checked) {
      valueArray.push(currentTarget.value);
    } else {
      valueArray.splice(valueArray.indexOf(currentTarget.value), 1);
    }

    setFieldValue(name, valueArray);
  }

  const handleBlur = () => {
    setFieldTouched(name, true);
  }
  
  return (
    <FormGroup as={Col}>
      <FormLabel>{ label }</FormLabel>
      <div className="form-control">
        {
          options.map(opt => (
            <FormCheck
              key={opt.value}
              custom
              inline
              isInvalid={getIn(values, name).length === 0}
              name={name}
              id={`${name}-${opt.value}-checkbox`}
              type="checkbox"
              value={opt.value}
              checked={getIn(values, name).includes(opt.value)}
              onChange={handleChange}
              onBlur={handleBlur}
              label={opt.label}
            />
          ))
        }
      </div>
      <ErrorMessage 
        name={name}
        component="div"
        className="invalid-feedback"
        style={{ display: getIn(errors, name) ? 'block' : 'none' }}
      />
    </FormGroup>
  ); 
}

CheckBoxGroup.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.array.isRequired,
  }).isRequired,
  form: PropTypes.shape({
    values: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    setFieldTouched: PropTypes.func.isRequired,

  }).isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ])
    }).isRequired,
  ).isRequired
}

export default CheckBoxGroup;
