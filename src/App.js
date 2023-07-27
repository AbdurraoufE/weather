import React, {useState} from 'react'
import axios from 'axios' //how we access the API
function App() {
  // this is the data to connect to the API
  const [data, setData] = useState ({})
  // This is for the location
  const [location, setLocation] = useState ('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=b1c3290c0706453abdf0a4e989bd6b11`


  // the searching of the cities
const search = (event) => {  
  if (event.key === "Enter"){
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
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
            <p>{data.name}</p>
          </div>
          <div className='temp'>
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
            {/* <h1>{data.main.temp}°C</h1> */}
          </div>
          <div className='desc'>
            {/* // gettng the data from the API folder location */}
            {data.weather ? <p>{data.weather[0].main}</p> : null}
            {/* <p>Clouds</p> */}
          </div>
        </div>

      {/* this makes it not show anything if no location is typed */}
      {data.name != undefined &&
        <div className='bottom'>
          <div className="feels">
            {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C </p> : null}
            {/* <p className='bold'>40°C</p> */}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className='bold'> {data.main.humidity}%</p> : null}
            {/* <p className='bold'>20%</p> */}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {data.wind ? <p className='bold'> {data.wind.speed.toFixed()} MPH</p> : null}
            {/* <p className='bold'>12 MPH</p> */}
            <p>Wind</p>
          </div>
        </div>
      }

      </div>
    </div>
  );
}

export default App;
