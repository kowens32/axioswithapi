import React, { useState, useEffect } from 'react';
import { fetchData } from '../services/api';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
    const interval = setInterval(getData, 5000); // Fetch data every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}: {item.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
