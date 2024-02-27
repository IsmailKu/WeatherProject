import { useState } from 'react';
import './App.css';
import Weather from './weather';
import searchimg from './searchimg.png'

function App() {

  const [cityList, setCityList] = useState([]);
  const [city, setCity] = useState("");
  const [err, setErr] = useState("");



  async function search () {
    try {
      let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=959fbc882edd4522b59134540213007&q=${city}`);
      let data = await response.json();
      
      if(data.location === undefined){
        throw new Error(data.error.messsage)
      }
      setErr("")
      setCityList([data, ...cityList])
      setCity("")
    }
    catch(e){
      setErr('error')
    }
  }
  const onKeyEnter = (e) => {
    if (e.key === "Enter") {
      search()
    }
  }

  return (
    <div className="App">
      <h1 className='weather'>Weather</h1>
      <div className='main'>
        <div className='input-block'>
        <input className='input' onKeyDown={onKeyEnter} type="search" value={city} onChange={(e) => setCity(e.target.value)} />
        <img className='search-img' onClick={search} src={searchimg} />
        </div>
        {err && <span className='err'>{err}</span>}
      </div>
      {cityList.map(item => <Weather weatherData={item}/>)}
    </div>
  );
}

export default App;
