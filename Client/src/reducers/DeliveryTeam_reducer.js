import {team_Actions} from '../constants/DeliveryTeam'
import {team_Status} from '../constants/DeliveryTeam'
 const data_initialState = {
    team_Status: team_Status.team_Create.SHOWTEAM,
    personList:[]
  };

  export default function (state = data_initialState, action) {
   console.log(action.type);
    switch(action.type) {
      case team_Actions.team_Create.ADDDELIVERYTEAM:// start fetching posts and set loading = true
        console.log("I am from Reduce SHOWFOOD..");
        return { ...state, team_Status: team_Status.team_Create.ADDDELIVERYTEAM};
      
  
default:
        console.log("default is firing")
        return {...state,team_Status: team_Status.team_Create.SHOWTEAM};

    }
  };
