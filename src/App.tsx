import './App.css';
import ConfigForm from './components/ConfigForm/ConfigForm';
import Temprature from './components/Temprature/Temprature';
import Settings from './components/Settings/Settings';
import { useEffect, useState } from 'react';
import { ISettings } from './types';
import { fetchSettings } from './services/api';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [settings, setSettings] = useState<ISettings>({
    min: 0,
    max: 0,
    buzzerMode: false
  });

  useEffect(() => {
    const getSettings = async () => {
      const data = await fetchSettings();
      setSettings(data);
      setIsLoading(false);
    };
    getSettings();
  }, []);


  return (
    <div className="App">
      <div className='comp'>
        { !isLoading &&
          <>
            <ConfigForm settings={settings} setSettings={setSettings} />
            <Temprature />
            <Settings settings={settings} />
          </>
        }
      </div>
    </div>
  );
}

export default App;
