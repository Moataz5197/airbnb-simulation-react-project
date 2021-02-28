import { useEffect} from 'react';

import {axiosInstance} from '../../axiosInstance'
import React from 'react'

let counter=0;
const RecommendedCities = () => {
  const [cities, setCities]=React.useState([]);
  const toBECity='city'

  const [location, setLocation]=React.useState({lat:'',long:''});
  function success(position) {
    setLocation({lat:position.coords.latitude,long:position.coords.longitude})
    if(counter<=2){
    setTimeout(()=>{
        getCitiesAroundMe();
    },1000)
    counter++ 
    }
  }

  function error() {
    alert( 'Unable to retrieve your location');
  }
  
  if(!navigator.geolocation) {
    alert( 'Geolocation is not supported by your browser');
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
  
  const getCitiesAroundMe=()=>{
    axiosInstance.get(`/${location.lat?location.lat:32}+${location.long?location.long:30}/nearbyCities`,{
      headers: {
        'x-rapidapi-key': '001c15ebe7msh77c9c616748c030p1718f6jsncb3d57f70b0b',
        'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
    },
    params: {
      radius: '1000',
      offset: '0',
      minPopulation: '100000',
      limit: '8',
      distanceUnit: 'KM',
      countryIds: 'EG',
      types: 'CITY'
    },
    })
    .then(function(response){
      setCities(response.data)
    })
    .catch(function(err){
      console.log(err);
    })
  }
  useEffect(()=>{
  
  },[])  
 

  return (
    <>
      <div className="container h-100">
        <div className="row pb-4 pt-5">
          <div className="col-12 col-md-6 col-lg-3 pb-4 d-flex ">
            <img
              src="./assets/imgs/city-hurghada.jpg"
              alt="hur"
              width="60em"
              className="rounded"
            />
            <div className="d-inline-block align-self-center ml-2">
         
              <div className="font-weight-bold">{
              cities.length!==0?cities.data[0].city:
              toBECity
              }</div>

              <div>{cities.length!==0?
              Math.round(((cities.data[0].distance/120) * 100)) / 100
              :'0'} hours drive</div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 pb-4 d-flex ">
            <img
              src="./assets/imgs/city-giza.jpg"
              alt="giza"
              width="60em"
              className="rounded"
            />
            <div className="d-inline-block align-self-center ml-2">
              <div className="font-weight-bold">{
              cities.length!==0?cities.data[1].city:
              toBECity
              }</div>
              <div>{cities.length!==0?
              Math.round(((cities.data[1].distance/120) * 100)) / 100
              :'0'} hour drive</div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 pb-4 d-flex ">
            <img
              src="./assets/imgs/city-dahab.jpg"
              alt="dahab"
              width="60em"
              className="rounded"
            />
            <div className="d-inline-block align-self-center ml-2">
              <div className="font-weight-bold">{
              cities.length!==0?cities.data[2].city:
              toBECity
              }</div>
              <div>{cities.length!==0?
              Math.round(((cities.data[2].distance/120) * 100)) / 100
              :'0'} hour drive</div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 pb-4 d-flex ">
            <img
              src="./assets/imgs/city-newcairo.jpg"
              alt="newcai"
              width="60em"
              className="rounded"
            />
            <div className="d-inline-block align-self-center ml-2">
              <div className="font-weight-bold">{
              cities.length!==0?cities.data[3].city:
              toBECity
              }</div>
              <div>{cities.length!==0?
              Math.round(((cities.data[3].distance/120) * 100)) / 100
              :'0'} hour drive</div>
            </div>
          </div>
        </div>
        <div className="row pb-4">
          <div className="col-12 col-md-6 col-lg-3 pb-4 d-flex ">
            <img
              src="./assets/imgs/city-sharm.jpg"
              alt="hur"
              width="60em"
              className="rounded"
            />
            <div className="d-inline-block align-self-center ml-2">
              <div className="font-weight-bold">{
              cities.length!==0?cities.data[4].city:
              toBECity
              }</div>
              <div>{cities.length!==0?
              Math.round(((cities.data[4].distance/120) * 100)) / 100
              :'0'} hour drive</div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 pb-4 d-flex ">
            <img
              src="./assets/imgs/city-6oct.jpg"
              alt="hur"
              width="60em"
              className="rounded"
            />
            <div className="d-inline-block align-self-center ml-2">
              <div className="font-weight-bold">{
              cities.length!==0?cities.data[5].city:
              toBECity
              }</div>
              <div>{cities.length!==0?
              Math.round(((cities.data[5].distance/120) * 100)) / 100
              :'0'} hour drive</div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 pb-4 d-flex ">
            <img
              src="./assets/imgs/city-madinty.jpg"
              alt="hur"
              width="60em"
              className="rounded"
            />
            <div className="d-inline-block align-self-center ml-2">
              <div className="font-weight-bold">{
              cities.length!==0?cities.data[6].city:
              toBECity
              }</div>
              <div>{cities.length!==0?
              Math.round(((cities.data[6].distance/120) * 100)) / 100
              :'0'} hour drive</div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 pb-4 d-flex ">
            <img
              src="./assets/imgs/city-marina.jpg"
              alt="hur"
              width="60em"
              className="rounded"
            />
            <div className="d-inline-block align-self-center ml-2">
              <div className="font-weight-bold">{
              cities.length!==0?cities.data[7].city:
              toBECity
              }</div>
              <div>{cities.length!==0?
              Math.round(((cities.data[7].distance/120) * 100)) / 100
              :'0'} hour drive</div>
            </div>
          </div>
        </div>

        <div className="row h-25"></div>
      </div>
    </>
  );
};
export default RecommendedCities;
