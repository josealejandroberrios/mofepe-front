import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, getIn } from 'formik';
import { FormGroup, FormLabel, FormControl, Col } from 'react-bootstrap';

// import { addClassName } from '../utils';
import { preloadedPercentageForCity } from '../preloadedData';

const SelectWithLabel = ({
  field: { name, value, onBlur },
  form: { values, errors, touched, setFieldValue },
  id,
  label,
  placeholder,
  options,
  changeOtherField
}) => {
  const handleChange = (event) => {
    const valueField = event.currentTarget.value;
    setFieldValue(name, valueField)

    if (changeOtherField) {
      const valueOtherField = getIn(values, changeOtherField);
      const output = [];

      for (let i = 0; i < valueOtherField.length; i++) {
        output.push({ year: (i + 1), percentage: preloadedPercentageForCity[valueField] });
      }

      setFieldValue(changeOtherField, output);
    }
  }
  
  return (
    <FormGroup
      as={Col}
      controlId={id}
    >
      <FormLabel>{ label }</FormLabel>
      <FormControl
        as="select"
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={onBlur}
        isInvalid={getIn(errors, name) && getIn(touched, name)}
      >
        <option value="" disabled>{ placeholder }</option>
        {
          options.map(opt => (
            <option key={opt.value} value={opt.value}>{ opt.label }</option>
          ))
        }
      </FormControl>
      <ErrorMessage 
        name={name}
        component="div" 
        className="invalid-feedback"
      />
    </FormGroup>
  );
}

SelectWithLabel.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    onBlur: PropTypes.func.isRequired,
  }).isRequired,
  form: PropTypes.shape({
    values: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    setFieldValue: PropTypes.func.isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
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

export default SelectWithLabel;
