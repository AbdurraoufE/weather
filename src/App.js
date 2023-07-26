import React, {useState} from 'react'
import axios from 'axios' //how we access the API
function App() {
  // this is the data to connect to the API
  const [data, setData] = useState ({})
  // This is for the location
  const [location, setLocation] = useState ('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b1c3290c0706453abdf0a4e989bd6b11`


  // the searching of the cities
const search = (event) => {  
  if (event.key === "Enter"){
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
  }
}

  return (
    <div className="app">
      <div className="search">
        <input 
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={search}
        placeholder='Enter Location'
        type="text" />
      </div>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>Dallas</p>
          </div>
          <div className='temp'>
            <h1>40°C</h1>
          </div>
          <div className='desc'>
            <p>Clouds</p>
          </div>
        </div>
        <div className='bottom'>
          <div className="feels">
            <p className='bold'>40°C</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p className='bold'>20%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className='bold'>12 MPH</p>
            <p>Wind</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
