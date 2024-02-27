import './weather.css';
import App from './App';


function Weather({ weatherData }) {
    return (
        <div className="weather-item">
          <h2 className='city'>{weatherData.location.name}</h2>
          <div className='main'>
            <div className='info-1'>
                <p>{weatherData.location.region}</p>
                <p className='under'>{weatherData.current.last_updated}</p>
            </div>
            <div className='info-2'>
                <p>{weatherData.current.temp_c}˚C</p>
                <p className='under'>{weatherData.current.temp_f}˚F</p>
            </div>
          </div>
        </div>
    )
}
export default Weather 