import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import { InputGroup, Button } from 'react-bootstrap';
import { IoIosCloseCircleOutline } from 'react-icons/io';

import OnlyInputNumber from './OnlyInputNumber';

const InputWithPrependAndApend = ({
  name,
  index,
  remove
}) => {
  return (
    <InputGroup size="sm" className="mb-2">
      <Field 
        component={OnlyInputNumber}
        name={`${name}.month`}
        id={`${name}.month`}
        placeholder="Mes"
      />
      <Field 
        component={OnlyInputNumber}
        name={`${name}.amount`}
        id={`${name}.amount`}
        placeholder="Monto"
      />
      <InputGroup.Append>
        <Button 
          variant="outline-danger"
          size="sm"
          onClick={() => remove(index)}
        >
          <IoIosCloseCircleOutline size={20} />
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
}

InputWithPrependAndApend.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  remove: PropTypes.func.isRequired,
}

export default InputWithPrependAndApend;
