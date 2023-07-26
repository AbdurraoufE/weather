import React, {useState} from 'react'
import axios from 'axios' //how we access the API
function App() {

  // const url = 'https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=b1c3290c0706453abdf0a4e989bd6b11'
  return (
    <div className="app">
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
        <div className='bottomer'>
          <div className="feels">
            <p>40°C</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind">
            12MPH
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
