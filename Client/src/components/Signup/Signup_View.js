
import React, { Component } from "react";
import { connect } from "react-redux";

import {signup_Status,signup_Actions} from '../../constants/Signup';
import Signup from './Signup'

const mapStateToProps = (state) => {
  console.log("****************************state:", state);
  return {
    signup_status: state.Signup_reducer.signup_Status //Dashboard_reducer.data_Status,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin : () =>{dispatch({ type: signup_Actions.signup_Create.SHOWPAGE})},
    
  };
};

class Signup_View extends Component {
  constructor(props) {
      super(props);
     this.state = {};
  
  }

  getScreen(status) {
    //console.log("I am from register Component getScreen: " + status);
    //alert(status);
    switch (status) {
      
      case signup_Status.signup_Create.SHOWPAGE:
        return (
          <Signup />
        );
      break;
      
      default:
        break;
    }
  }
  render() {
    return (
      <div>
          {this.getScreen(this.props.signup_status)}
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup_View);