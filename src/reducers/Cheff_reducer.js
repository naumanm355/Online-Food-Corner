import {cheff_Actions} from '../constants/Cheff'
import {cheff_Status} from '../constants/Cheff'
 const data_initialState = {
  cheff_Status: cheff_Status.cheff_Create.SHOWCHEFF,
    personList:[]
  };

  export default function (state = data_initialState, action) {
   console.log(action.type);
    switch(action.type) {
      case cheff_Actions.cheff_Create.ADDCHEFF:
        console.log("I am from Reduce AddCheff..");
        return { ...state, cheff_Status: cheff_Status.cheff_Create.ADDCHEFF};
      
  
default:
        console.log("default is firing")
        return {...state,cheff_Status: cheff_Status.cheff_Create.SHOWCHEFF};

    }
  };
