import './styles.css';
import { ISettings } from "../../types";

const Settings = ({ settings }: { settings: ISettings }) => {
  return (
    <div className="settingsContainer">
      <h2>Current Settings</h2>
          <table className="settingsTable">
            <thead>
              <tr>
                <th>Setting</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Min Temperature</td>
                <td>{settings ? settings.min: 0}°C</td>
              </tr>
              <tr>
                <td>Max Temperature</td>
                <td>{settings ? settings.max: 0}°C</td>
              </tr>
              <tr>
                <td>Buzzer Mode</td>
                <td>{settings && settings.buzzerMode? 'Enabled' : 'Disabled' }</td>
              </tr>
            </tbody>
          </table>
    </div>

  );
}

export default Settings;
