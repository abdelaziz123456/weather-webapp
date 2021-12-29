
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import './App.scss';
import LargeCard from './Components/LargeCard';
import SmallCard from './Components/SmallCard';

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
axios.get(`https://api.weatherapi.com/v1/forecast.json?key=24eea85d248843afbd970548212812 &q=${city}&days=3&aqi=no&alerts=no`).then(res=>{setWeather(res.data)})
 },[city])



// submit handler

const submitHandler=(e)=>{
  e.preventDefault();
  setCity(cityRef.current.value.toLowerCase())
}



  return (

weather &&


  
    <div className="App row  m-0">
      


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


        {/* temperature unit selector start */}


          <div className="d-flex justify-content-around">

                  <div className="form-check">
                <input className="form-check-input" type="radio"  id="c"  name='temperature' onClick={()=>setTempUnit(true)}/>
                <label className="form-check-label" htmlFor="c">
                  celisuis
                </label>
              </div>


              <div className="form-check">
                <input className="form-check-input" type="radio"  id="f"  name='temperature' 
                onClick={()=>setTempUnit(false)}/>
                <label className="form-check-label" htmlFor="f">
                 fahrenheit
                </label>
              </div>
          </div>


          {/* temperature unit selector start */}






          <div className=" d-flex justify-content-center">
            <img src={require('.'+weather.current.condition.icon.slice(20))} alt="weather icon"  width={150} />

          </div>
          


          
            {tempUnit ?  
            <h1> {weather.current.temp_c} <small><sup>o</sup>c</small> </h1> 
            : 
            <h1> {weather.current.temp_f} <small><sup>o</sup>f</small> </h1>
             }


            <h3>{weather.current.condition.text}</h3>




          <div>


          <h6>Today  {weather.current.last_updated.slice(0,-6)}</h6>


          <h6><i className="fa fa-map-marker" aria-hidden="true"></i> {city}
          </h6>

          </div>
           
          
        </div>        


        {/* today weather end*/}
      



      </div>


      {/* search part end */}














      {/* reseult part start */}

      <div className="result-part col-12 col-md-8 d-flex flex-column justify-content-between ">
        
   
     



         {/* forecast part start */}
        <div className="row">

          {
            weather.forecast.forecastday.map(day=>(
              <SmallCard date={day.date} img={day.day.condition.icon.slice(-12)}  maxtempc={day.day.maxtemp_c}  mintempc={day.day.mintemp_c} maxtempf={day.day.maxtemp_f} mintempf={day.day.mintemp_f}  tempUnit={tempUnit}/>
            ))
          }
         
        </div>


         {/* forecast part end */}







         {/* today details start */}

          <div className="today-details">

            <h4 className='text-start'>Today's Highlights</h4>

            <div className="row">

            {console.log(weather.current)}



            <LargeCard header={'Wind Status'}  >

            <h1>{weather.current.wind_kph} kph</h1>

            <h6>
            <i class="fa fa-arrows-alt" aria-hidden="true"></i> {weather.current.wind_dir}

            </h6>
            

            </LargeCard>

            <LargeCard header={'Humidity'}  >
            <h1>{weather.current.humidity} %</h1>
            <input type="range" class="form-range" min="0" max="100"  value={weather.current.humidity}id="customRange3"/>


            </LargeCard>



            <LargeCard header={'Visibility'}>

            <h1>{weather.current.vis_km} km</h1>
            <div></div>
            </LargeCard>

            <LargeCard header={'Air Pressure'}>
            <h1>{weather.current.pressure_in} in</h1>
            <div></div>
              </LargeCard>

            </div>
          </div>

         {/* today details end */}




         <p>Created by Abdelaziz -  
           <a href="https://abdelaziz123456.github.io/portfolio/"   target='_blank'>
             <i className="fa fa-hand-o-right" aria-hidden="true"></i> 

          <span className='mx-3'>my portfolio</span>
        

            <i className="fa fa-hand-o-left" aria-hidden="true"></i> 
          </a>
          
          </p>





        
      </div>


      {/* reseult part end */}
    


    </div>

    
  );
}

export default App;
