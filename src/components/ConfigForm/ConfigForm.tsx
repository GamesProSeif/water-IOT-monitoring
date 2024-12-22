import React, { useState } from 'react';
import  './styles.css';
import { updateConfig } from '../../services/api';

const ConfigForm = () => {
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(0);
  const [buzzerMode, setBuzzerMode] = useState<boolean>(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateConfig('min', min);
    await updateConfig('max', max);
    await updateConfig('buzzerMode', buzzerMode);
  };

  return (
    <form  onSubmit={handleSubmit}>
      <label>Min Temperature:</label>
      <input
        type="number"
        value={min}
        onChange={(e) => setMin(parseInt(e.target.value))}
      />
      <label>Max Temperature:</label>
      <input
        type="number"
        value={max}
        onChange={(e) => setMax(parseInt(e.target.value))}
      />
      <label>Buzzer Mode:</label>
      <input
        type="checkbox"
        checked={buzzerMode}
        onChange={(e) => setBuzzerMode(e.target.checked)}
      />
      <button type="submit">Update Settings</button>
    </form>
  );
};

export default ConfigForm;
