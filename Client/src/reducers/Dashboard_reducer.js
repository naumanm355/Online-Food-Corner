import {data_Actions} from '../constants/Dashboard'
import {data_Status} from '../constants/Dashboard'
 const data_initialState = {
    data_Status: data_Status.data_Create.NEW,
    personList:[]
  };

  export default function (state = data_initialState, action) {
   console.log(action.type);
    switch(action.type) {
      case data_Actions.data_Create.ADDFOOD:
        console.log("I am from Reduce ADDFOOD..");
        return { ...state, data_Status: data_Status.data_Create.ADDFOOD};
      case data_Actions.data_Create.ADDCHEFF:
        console.log("I am from Reduce ADDFOOD..");
        return { ...state, data_Status: data_Status.data_Create.ADDCHEFF};    
      case data_Actions.data_Create.SHOWCART:
        console.log("I am from Reduce SHOWCART..");
        return { ...state, data_Status: data_Status.data_Create.SHOWCART};
      case data_Actions.data_Create.FOODDETAIL:
        console.log("I am from Reduce FOODDETAIL..");
        return { ...state, data_Status: data_Status.data_Create.FOODDETAIL};
default:
        console.log("default is firing")
        return {...state,data_Status: data_Status.data_Create.NEW};

    }
  };
