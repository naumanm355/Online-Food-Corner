import {signup_Actions} from '../constants/Signup'
import {signup_Status} from '../constants/Signup'
 const data_initialState = {
  signup_Status: signup_Status.signup_Create.SHOWPAGE,
    personList:[]
  };

  export default function (state = data_initialState, action) {
   console.log(action.type);
    switch(action.type) {
      case signup_Actions.signup_Create.SHOWPAGE:
        console.log("I am from Reduce SHOWPage..");
        return { ...state, signup_Status: signup_Status.signup_Create.SHOWPAGE};
      
default:
        console.log("default is firing")
        return {...state,signup_Status: signup_Status.signup_Create.SHOWPAGE};

    }
  };
