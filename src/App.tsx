import './App.css';
import ConfigForm from './components/ConfigForm/ConfigForm';
import Temprature from './components/Temprature/Temprature';
import Settings from './components/Settings/Settings';


function App() {
  return (
    <div className="App">
      <div className='comp'>
        <ConfigForm />
        <Temprature />
        <Settings />
      </div>
    </div>
  );
}

export default App;
