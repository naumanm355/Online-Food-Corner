
import React, { Component } from "react";
import { connect } from "react-redux";

import {signin_Status,signin_Actions} from '../../constants/Login';
import SignInForm from './SigninForm'

const mapStateToProps = (state) => {
  console.log("****************************state:", state);
  return {
    signin_status: state.Signin_Reducer.signin_Status //Dashboard_reducer.data_Status,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin : () =>{dispatch({ type: signin_Actions.signin_Create.SHOWPAGE})},
    
  };
};

class SignIn_View extends Component {
  constructor(props) {
      super(props);
     this.state = {};
  
  }

  getScreen(status) {
    //console.log("I am from register Component getScreen: " + status);
    //alert(status);
    switch (status) {
      
      case signin_Status.signin_Create.SHOWPAGE:
        return (
          <SignInForm />
        );
      break;
      
      default:
        break;
    }
  }
  render() {
    return (
      <div>
          {this.getScreen(this.props.signin_status)}
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn_View);