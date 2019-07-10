import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import { Button, Row } from 'react-bootstrap';

import validateSchema from './validateSchema';
import { cities, realStateOperators, yearsOperation, typesInvesment } from './options';

import InputWithLabel from './CustomFields/InputWithLabel';
import SelectWitLabel from './CustomFields/SelectWithLabel';
import CheckBoxGroup from './CustomFields/CheckBoxGroup';
import RadioButtonGroup from './CustomFields/RadioButtonGroup';
import ListBox from './CustomFields/ListBox';
import DualListBox from './CustomFields/DualListBox';

const initialState = {
  address: "",
  city: "",
  realStateOperator: "",
  costOfOwnerShip: "",
  rentalCost: "",
  yearsOfTheOperation: "1",
  typeOfInvestment: ['appreciation', 'rent'],
  eventualRentalProblems: "true",
  percentageAppreciationOrDepreciation: [
    { year: 1, percentage: 0 }
  ],
  definitionOfProblems: {
    paymentDelays: [
      { month: 1, amount: 0 }
    ],
    delaysInEviction: [
      { month: 1, amount: 0 }
    ],
  },
  constitutionOfLLV: 600,
  transferCost: 1
};

const FormContainer = ({ fetchData }) => (
  <Formik 
    initialValues={initialState}
    validationSchema={validateSchema}
    onSubmit={(values, actions) => {
      //console.log(values);  
      setTimeout(() => {
        fetchData("calculateInvestment", { method: "post", data: { ...values }});
        actions.setSubmitting(false);
      }, 2000) 
    }}
    render={({
      dirty,
      isSubmitting,
      handleReset,
    }) => (
      <Form>
        <Row>
          {/* 1. Direccíon */}
          <Field
            component={InputWithLabel}
            name="address"
            id="addressInputText"
            label="Dirección"
            type="text"
            placeholder="Ingrese la dirección"
          />
          {/* 2. Ciudad */}
          <Field 
            component={SelectWitLabel}
            name="city"
            id="citySelect"
            label="Ciudad"
            placeholder="Seleccione la ciudad"
            options={cities}
            changeOtherField="percentageAppreciationOrDepreciation"
          />
        </Row>
        <Row>
          {/* 3. Operador Inmobiliario */}
          <Field 
            component={SelectWitLabel}
            name="realStateOperator"
            id="realStateOperatorSelect"
            label="Operador Inmobiliario"
            placeholder="Seleccione el operador inmobliario"
            options={realStateOperators}
          />
          {/* 4. Costo de la Propiedad */}
          <Field
            component={InputWithLabel}
            name="costOfOwnerShip"
            id="costOfOwnerShipInputNumber"
            label="Costo de la Propiedad"
            type="number"
            placeholder="Ingrese el monto del costo de la propiedad"
          />
        </Row>
        <Row>
          {/* 5. Costo del Alquiler */}
          <Field
            component={InputWithLabel}
            name="rentalCost"
            id="rentalCostInputNumber"
            label="Costo del alquiler"
            type="number"
            placeholder="Ingrese el monto del costo del alquiler"
          />
          {/* 6. Años de Análisis de la Operación  */}
          <Field 
            component={RadioButtonGroup}
            name="yearsOfTheOperation"
            label="Años de Análisis de la Operación"
            options={yearsOperation}
            changeOtherField="percentageAppreciationOrDepreciation"
          />
        </Row>
        <Row>
          {/* 7. Tipo de Inversión */}
          <Field 
            component={CheckBoxGroup}
            name="typeOfInvestment"
            label="Tipo de Inversión"
            options={typesInvesment}
          />
          {/* 8. Eventuales Problemas de Alquiler */}
          <Field
            component={RadioButtonGroup}
            name="eventualRentalProblems"
            label="Eventuales Problemas de Alquiler"
          />
        </Row>
        <Row>
          {/* 9.1 Porcentaje de Apreciación / Depreciación */}
          <FieldArray
            component={ListBox}
            name="percentageAppreciationOrDepreciation"
          />
          {/* 9.2 Definicíon de Problemas */}
          <Field
            component={DualListBox}
            name="definitionOfProblems"
          />
        </Row>
        <Row>
          {/* 10. Constitución de la LLV  */}
          <Field
            component={InputWithLabel}
            name="constitutionOfLLV"
            id="constitutionOfLLVInputNumber"
            label="Constitución de la LLV"
            type="number"
            placeholder="Ingrese el monto de constitución por LLV"
          />
          {/* 11. Gastos de Transferencia */}
          <Field
            component={InputWithLabel}
            name="transferCost"
            id="transferCostInputNumber"
            label="Gastos de Transferencia"
            type="number"
            placeholder="Ingrese el porcentaje por gastos de transferencia"
          />
        </Row>

        {/* Boton Limpiar */}
        <Button
          type="reset"
          variant="outline-dark"
          disabled={!dirty || isSubmitting}
          onClick={handleReset}
          style={{ marginRight: '20px'}}
        >
          Limpiar
        </Button>
      
        {/* Boton Enviar */}
        <Button 
          type="submit"
          variant="outline-primary"
          disabled={isSubmitting}
        >
          Enviar
        </Button>
      </Form>
    )}
  />
)

export default FormContainer;
