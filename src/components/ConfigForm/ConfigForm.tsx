import React, { useState } from 'react';
import  './styles.css';
import { updateConfig } from '../../services/api';
import { ISettings } from '../../types';

const ConfigForm = ({ settings, setSettings }: {
  settings: ISettings,
  setSettings: React.Dispatch<React.SetStateAction<ISettings>>
}) => {
  const [min, setMin] = useState<number>(settings.min);
  const [max, setMax] = useState<number>(settings.max);
  const [buzzerMode, setBuzzerMode] = useState<boolean>(settings.buzzerMode);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await updateConfig('min', min);
    await updateConfig('max', max);
    await updateConfig('buzzerMode', buzzerMode);

    setSettings({ min, max, buzzerMode });
  };

  return (
    <form  onSubmit={handleSubmit}>
      <label>Min Temperature:</label>
      <input
        type="number"
        value={min}
        onChange={(e) => setMin(parseInt(e.target.value))}
        // onChange={(e) => setSettings(s =>
        //   ({ ...s, min: parseInt(e.target.value)})
        // )}
      />
      <label>Max Temperature:</label>
      <input
        type="number"
        value={max}
        onChange={(e) => setMax(parseInt(e.target.value))}
        // onChange={(e) => setSettings(s =>
        //   ({ ...s, max: parseInt(e.target.value)})
        // )}
      />
      <label>Buzzer Mode:</label>
      <input
        type="checkbox"
        checked={buzzerMode}
        onChange={(e) => setBuzzerMode(e.target.checked)}
        // onChange={(e) => setSettings(s =>
        //   ({ ...s, buzzerMode: e.target.checked})
        // )}
      />
      <button type="submit">Update Settings</button>
    </form>
  );
};

export default ConfigForm;
