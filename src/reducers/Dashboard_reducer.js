import {data_Actions} from '../constants/Dashboard'
import {data_Status} from '../constants/Dashboard'
 const data_initialState = {
    data_Status: data_Status.data_Create.NEW,
    personList:[]
  };

  export default function (state = data_initialState, action) {
   console.log(action.type);
    switch(action.type) {
      case data_Actions.data_Create.ADDFOOD:// start fetching posts and set loading = true
        console.log("I am from Reduce ADDFOOD..");
        return { ...state, data_Status: data_Status.data_Create.ADDFOOD};
      case data_Actions.data_Create.ADDCHEFF:// start fetching posts and set loading = true
        console.log("I am from Reduce ADDFOOD..");
        return { ...state, data_Status: data_Status.data_Create.ADDCHEFF};    
  
default:
        console.log("default is firing")
        return {...state,data_Status: data_Status.data_Create.NEW};

    }
  };
