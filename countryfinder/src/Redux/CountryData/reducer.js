import { COUNTRYFAIL, COUNTRYFETCH, COUNTRYLOAD } from "./actionType";


const init={
    loading:false,
    countryData:[],
    err:false
}

export const countryReducer=(store=init,{type,payload})=>{

    switch (type) {
        case COUNTRYLOAD :
            return{
                ...store,
                loading:true,
                err:false
            }
        case COUNTRYFETCH:
            return{
              ...store,
              loading:false,
              err:false,
              countryData:[...payload]
            }
        case COUNTRYFAIL:
            return{
            ...store,
            err:true,
            loading:false
            }    
        default:
            return store;
    }
}