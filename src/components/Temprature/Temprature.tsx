import { useEffect, useState } from 'react';
import { fetchTemperature } from '../../services/api';
import  './styles.css';

const Temperature = () => {
  const [temp, setTemp] = useState<number | null>(null);

  useEffect(() => {
    const getTemp = async () => {
      const temperature = await fetchTemperature();
      setTemp(temperature);
    };
    getTemp();

    const intervalId = setInterval(getTemp, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="tempContainer">
      <h2>Current Temperature</h2>
      {temp !== null ? <h3>{temp} °C</h3> : <h3>0 °C </h3>}
    </div>
  );
};

export default Temperature;
