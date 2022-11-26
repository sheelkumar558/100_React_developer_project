import { COUNTRYFAIL, COUNTRYFETCH, COUNTRYLOAD } from "./actionType"
import axios from "axios"

const loadingCountry=()=>{
    return{
        type: COUNTRYLOAD
    }
}


export const countrySucess=(payload)=>{
   
    return{
        type: COUNTRYFETCH,
        payload
    }
}

const countryFail=()=>{
    return{
        type: COUNTRYFAIL
    }
}


export const getCountry=()=>(dispatch)=>{
dispatch(loadingCountry())
  return axios(`https://restcountries.com/v3.1/all`)
  .then((res)=>dispatch(countrySucess(res.data)))
  .then((err)=>dispatch(countryFail(err)))
}


export const countryDetails=(payload)=>(dispatch)=>{
    // console.log(payload);
      return axios(`https://restcountries.com/v3.1/${payload}`)
      .then((res)=>dispatch(countrySucess(res.data)))
    }
    



