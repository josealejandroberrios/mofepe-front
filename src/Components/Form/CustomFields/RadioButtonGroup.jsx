import React from 'react';
import PropTypes from 'prop-types';
import { getIn } from 'formik';
import { FormGroup, FormLabel, Col, FormCheck } from 'react-bootstrap';

import { preloadedPercentageForCity } from '../preloadedData';

const RadioButtonGroup = ({
  field: { name, value, onBlur },
  form: { setFieldValue, values },
  label,
  options,
  changeOtherField
}) => {
  const handleChange = (event) => {
    const valueField = event.currentTarget.value;
    const valueCity = getIn(values, "city");
    setFieldValue(name, valueField);

    if (changeOtherField) {
      
      const output = [];

      for (let i = 0; i < valueField; i++) {
        if (valueCity !== "") {
          output.push({ year: (i + 1), percentage: preloadedPercentageForCity[valueCity] });
        } else {
          output.push({ year: (i + 1), percentage: 0 });
        }
      }

      setFieldValue(changeOtherField, output);
    }
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
              name={name}
              id={`${name}-${opt.value}-radio`}
              type="radio"
              value={opt.value}
              checked={opt.value === value}
              onChange={handleChange}
              onBlur={onBlur}
              label={opt.label}
            />
          ))
        } 
      </div>
    </FormGroup> 
  )
}

RadioButtonGroup.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onBlur: PropTypes.func.isRequired
  }).isRequired,
  form: PropTypes.shape({
    values: PropTypes.object.isRequired,
    setFieldValue: PropTypes.func.isRequired,
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
  ).isRequired,
  changeOtherField: PropTypes.string,
}

RadioButtonGroup.defaultProps = {
  options: [
    { label: 'Si', value: "true" },
    { label: 'No', value: "false" }
  ]
}

export default RadioButtonGroup;
