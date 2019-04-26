
import React, { Component } from "react";
import { connect } from "react-redux";

import {team_Status,team_Actions} from '../../constants/DeliveryTeam';
import ShowTeam from './ShowTeam'
import AddTeam from './AddTeam'

const mapStateToProps = (state) => {
  console.log("****************************state:", state);
  return {
    team_status: state.DeliveryTeam_reducer.team_Status //Dashboard_reducer.data_Status,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddTeamClick : () =>{dispatch({ type: team_Actions.team_Create.ADDDELIVERYTEAM})},
    
  };
};

class Team_View extends Component {
  constructor(props) {
      super(props);
     this.state = {};
  
  }

  getScreen(status) {
    //console.log("I am from register Component getScreen: " + status);
    alert(status);
    switch (status) {
      
      case team_Status.team_Create.SHOWTEAM:
        return (
          <ShowTeam handleAddTeamClick={this.props.handleAddTeamClick}/>
        );
      break;
      case team_Status.team_Create.ADDDELIVERYTEAM:
      return (
        <AddTeam />
      );
      break;
      
      default:
        break;
    }
  }
  render() {
    return (
      <div>
          {this.getScreen(this.props.team_status)}
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Team_View);