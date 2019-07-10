import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (url) => {
  const [dataApi, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUrl = async () => {
      const response = await axios({ url: url, method: "post" })

      setData(response.data);
      setLoading(false);
    }

    fetchUrl();
  }, [url]);

  return [data, loading];
}
