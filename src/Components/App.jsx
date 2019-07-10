import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Card } from 'react-bootstrap';
import axios from 'axios';

import { urlApi } from './Form/options';

import FormContainer from './Form/FormContainer';
import BarChartStacked from './BarChart/BarChartStacked';

const App = () => {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const fetchData = async (resource, options) => {
    setLoading(true);
    const response = await axios({ url: `${urlApi}${resource}`, ...options });
    setData(response.data);
    setShowForm(false);
    setTimeout(() => {
      setLoading(false);
    }, 3500)
  }
  
  return (
    <Container>
      <Card
        body
        style={{ marginTop: '20px' }}
      >
        {  
          data.length === 0 &&
          <FormContainer fetchData={fetchData} />
        }
        {
          data.length > 0 &&
            <BarChartStacked data={data} loading={loading} />
        }  
      </Card>
    </Container>
  );
}

export default App;
