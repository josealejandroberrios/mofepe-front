import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import NumberFormat from 'react-number-format';

const GridReport = (data) => {

  console.log(data);
  const {
    initialInvestment,
    totalBySale,
    averageAppreciation,
    rentByMonth,
    numberOfYearsToAnalyze,
    afterTax,
    rent,
    appreciation,
    rentAfterTax
  } = data.data[0];

  const displayNumberFormat = (value, prefix, classes = "") => (
    <NumberFormat 
      value={value}
      displayType="text"
      thousandSeparator={"."}
      decimalSeparator={","}
      prefix={prefix}
      renderText={value => <span className={classes}>{value}</span>}
    />
  );

  const displayYears = (value) => (
    value === 1 ? `${Number(value)} año` : `${Number(value)} años`
  )

  return (
    <Row style={{ width: "810px", margin: "auto" }} className="mt-4">
      <Col>
        {/* 1era */}
        <Row>
          <Col md={8} className="border-grid-col-1">
            <Row>
              <Col>
                <span>Inversión Inicial</span>
              </Col>
              <Col className="text-right">
                { displayNumberFormat(initialInvestment, "$") }
              </Col>
            </Row>
          </Col>
          <Col md={4} className="border-grid-col-2">
            <Row>
              <Col>
                <span>Venta</span>
              </Col>
              <Col className="text-right">
                { displayNumberFormat(totalBySale, "$") }
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Segunda */}
        <Row className="mb-3">
          <Col md={8} className="border-grid-col-3">
            <Row>
              <Col>
                <span>Apreciación Anual Promedio</span>
              </Col>
              <Col className="text-right">
                { displayNumberFormat(averageAppreciation, "%") }
              </Col>
            </Row>
          </Col>
          <Col md={4} className="border-grid-col-4" style={{ backgroundColor: "#0800ff" }}>
            <Row>
              <Col className="text-white">
                <span>Alquiler Mes</span>
              </Col>
              <Col className="text-right">
                { displayNumberFormat(rentByMonth, "$", "text-white")}
              </Col>
            </Row>
          </Col>
        </Row>

        {/* 3 era */}
        <Row className="justify-content-end">
          <Col md={4} className="border-grid-col-5 text-center">
            <span>{ displayYears(numberOfYearsToAnalyze) }</span>
          </Col>
          <Col md={2} className="border-grid-col-6 text-center">
            <span>Anual</span>
          </Col>
        </Row>

        {/* 4 ta */}
        <Row>
          <Col md={6} className="border-grid-col-1">
            <span>Resultado Después de Impuestos</span>
          </Col>
          <Col md={2} className="border-grid-col-2 text-right">
            { displayNumberFormat(afterTax.amount, "$") }
          </Col>
          <Col md={2} className="border-grid-col-2 text-center">
            { displayNumberFormat(afterTax.percentage, "%") }
          </Col>
          <Col md={2} className="border-grid-col-2 text-center">
            { displayNumberFormat(afterTax.percentageByYear, "%") }
          </Col>
        </Row>

        {/* 5 ta */}
        <Row>
          <Col md={6} className="border-grid-col-3" style={{ backgroundColor: "#0800ff" }}>
            <span className="text-white">Resultado de Renta Después de Impuestos</span>
          </Col>
          <Col md={2} className="border-grid-col-4 text-right" style={{ backgroundColor: "#0800ff" }}>
            { displayNumberFormat(rent.amount, "$", "text-white") }
          </Col>
          <Col md={2} className="border-grid-col-4 text-center" style={{ backgroundColor: "#0800ff" }}>
            { displayNumberFormat(rent.percentage, "%", "text-white") }
          </Col>
          <Col md={2} className="border-grid-col-4 text-center" style={{ backgroundColor: "#0800ff" }}>
            { displayNumberFormat(rent.percentageByYear, "%", "text-white") }
          </Col>
        </Row>

        {/* 6 ta */}
        <Row className="mb-3">
          <Col md={6} className="border-grid-col-3" style={{ backgroundColor: "#ffae00" }}>
            <span className="text-white">Resultado de Compra Venta Después de Impuestos</span>
          </Col>
          <Col md={2} className="border-grid-col-4 text-right" style={{ backgroundColor: "#ffae00" }}>
            { displayNumberFormat(appreciation.amount, "$", "text-white") }
          </Col>
          <Col md={2} className="border-grid-col-4 text-center" style={{ backgroundColor: "#ffae00" }}>
            { displayNumberFormat(appreciation.percentage, "%", "text-white") }
          </Col>
          <Col md={2} className="border-grid-col-4 text-center" style={{ backgroundColor: "#ffae00" }}>
            { displayNumberFormat(appreciation.percentageByYear, "%", "text-white") }
          </Col>
        </Row>

        {/* 7 ma */}
        <Row className="mb-3">
          <Col md={6} className="border-grid-col-1" style={{ backgroundColor: "#0800ff" }}>
            <span className="text-white">Renta Promedio Después de Impuestos</span>
          </Col>
          <Col md={2} className="border-grid-col-2 text-right" style={{ backgroundColor: "#0800ff" }}>
            { displayNumberFormat(rentAfterTax.amount, "$", "text-white") }
          </Col>
          <Col md={2} className="border-grid-col-2 text-center" style={{ backgroundColor: "#0800ff" }}>
            { displayNumberFormat(rentAfterTax["percentage "], "%", "text-white") }
          </Col>
        </Row>

      </Col>
    </Row>
  );
}

GridReport.propTypes = {
  data: PropTypes.array,
}

export default GridReport
