import React from 'react';
import {
  Text,
  BarChart, 
  Bar, 
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
}  from 'recharts';
import { Row } from 'react-bootstrap';
import Loader from 'react-loader-spinner';

import CustomXAxisTick from './CustomXAxisTick';
import GridReport from '../Grid/index';

import { parseData, formatedNameLegend, formattedNamePeriod } from './utils'

const BarChartStacked = ({ data, loading }) => {
  const graphicData = data[0].analisys;

  const barItems = Object.keys(graphicData).map(item => (
    <Bar
      key={item}
      dataKey={item === "totalRent" ? "rent" : "appreciation"}
      fill={item === "totalRent" ? "#0800ff" : "#ffae00"}
      stackId='stack'
    />
  ));

  return (
    <>
      {
        loading &&
          <Row className="justify-content-center">
            <Loader
              type="Oval"
              color="#00BFFF"
              height="100"	
              width="100"
            />
          </Row>
      }
      {
        !loading &&
        <>
          <BarChart
            width={1050}
            height={300}
            data={parseData(graphicData)}
            stackOffset="sign"
            barSize={20}
          >
            <Text />
            <CartesianGrid 
              strokeDasharray='3 3' 
              vertical={false}
            />
            <XAxis 
              dataKey='period'
              height={60}
              tick={<CustomXAxisTick />}
            />
            <YAxis 
              //type="number"
              //ticks={[100, 120, 140, 160, 180]}
              //domain={[80, 200]}
              //unit="$"
            />
            <Tooltip 
              formatter={(value, name) => [value, formatedNameLegend(name)]}
              labelFormatter={(value) => formattedNamePeriod(value)}
            />
            <Legend 
              formatter={(value) => formatedNameLegend(value)}
            />
            <ReferenceLine 
              y={0}
              stroke='#000'
            />
            { barItems }
          </BarChart>
          <GridReport data={data} />
        </>
      }
    </>
  );
}

export default BarChartStacked;





