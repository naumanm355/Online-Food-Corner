
import { combineReducers } from 'redux';
import Dashboard_reducer from './Dashboard_reducer'
import DeliveryTeam_reducer from './DeliveryTeam_reducer'
import Signin_Reducer from './Signin_reducer'
import Cheff_reducer from './Cheff_reducer'
import Signup_reducer from './Signup_reducer'

const rootReducer = combineReducers({
  Dashboard_reducer,
  DeliveryTeam_reducer,
  Signin_Reducer,
  Signup_reducer,
  Cheff_reducer,
});

export default rootReducer;
