
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import './App.scss';

function App() {


  //city hook 

  const [city,setCity]=useState('cairo')

  //weather data hook

    const [weather,setWeather]=useState(false)

 //city ref hook

 const cityRef=useRef();


// temperature unit setter true for c and false for f

const [tempUnit,setTempUnit]=useState(true)



 //api handler

 useEffect(()=>{
axios.get(`http://api.weatherapi.com/v1/forecast.json?key=24eea85d248843afbd970548212812 &q=${city}&days=3&aqi=no&alerts=no`).then(res=>{setWeather(res.data)})
 },[city])



// submit handler

const submitHandler=(e)=>{
  e.preventDefault();
  setCity(cityRef.current.value.toLowerCase())
}



  return (

weather &&


  
    <div className="App row  m-0">
      {console.log(weather.current.last_updated.slice(0,-6))}


    {/* search part start */}

      <div className="search-part col-12 col-md-4">


          {/* form section start */}


        <form onSubmit={submitHandler} className='d-flex justify-content-center align-items-center flex-wrap'>

          <input type="form-control" className="text" placeholder='search by name' ref={cityRef} required/>

          <button className="btn btn-primary ms-3" type='submit'>Search</button>
        </form>

        {/* form section end*/}




        {/* today weather start*/}




        <div className="today-weather my-5 d-flex flex-column justify-content-between">

          <div className="img">
            <img src={require('.'+weather.current.condition.icon.slice(20))} alt="weather icon" className='img-fluid'  />

          </div>
          


          
            {tempUnit ?  <h1> {weather.current.temp_c} <small>c</small> </h1> : <h1> {weather.current.temp_f} <small>f</small> </h1> }


            <h3>{weather.current.condition.text}</h3>




          <div>


          <h5>Today  {weather.current.last_updated.slice(0,-6)}</h5>


          <h6><i className="fa fa-map-marker" aria-hidden="true"></i> {city}
          </h6>

          </div>
           
          
        </div>        


        {/* today weather end*/}
      



      </div>













      {/* search part end */}








      {/* reseult part start */}

      <div className="result-part col-12 col-md-8">
        this is result part

        
      </div>


      {/* reseult part end */}
    


    </div>

    
  );
}

export default App;
