import { useState, useEffect } from 'react';
import axios from 'axios';
import { RAPID_API_KEY1, RAPID_API_KEY2 } from '@env';

const fetchData = async (setIsLoading, options, setData, setError) => {
  setIsLoading(true);

  try {
    const response = await axios.request(options);
    setData(response.data.data);
    setIsLoading(false);
  } catch (error) {
    setError(error);
    alert('There is an error');
  } finally {
    setIsLoading(false);
  }
};

const useFetch = (endpoint, type, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const api_key = type === 'nearby' ? RAPID_API_KEY1 : RAPID_API_KEY2;

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
      'X-RapidAPI-Key': api_key,
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
  };

  useEffect(() => {
    fetchData(setIsLoading, options, setData, setError);
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
