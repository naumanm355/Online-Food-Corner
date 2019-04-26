import {signin_Actions} from '../constants/Login'
import {signin_Status} from '../constants/Login'
 const data_initialState = {
  signin_Status: signin_Status.signin_Create.SHOWPAGE,
    personList:[]
  };

  export default function (state = data_initialState, action) {
   console.log(action.type);
    switch(action.type) {
      case signin_Actions.signin_Create.SHOWPAGE:
        console.log("I am from Reduce SHOWPage..");
        return { ...state, signin_Status: signin_Status.signin_Create.SHOWPAGE};
      
default:
        console.log("default is firing")
        return {...state,signin_Status: signin_Status.signin_Create.SHOWPAGE};

    }
  };
