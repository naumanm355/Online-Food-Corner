
import React, { Component } from "react";
import { connect } from "react-redux";

import {cheff_Status,cheff_Actions} from '../../constants/Cheff';
import ShowCheff from './ShowCheff'
import AddCheff from './AddCheff'
import { studentServer } from '../../server/CheffServer';
const mapStateToProps = (state) => {
  console.log("****************************state:", state);
  return {
    cheff_status: state.Cheff_reducer.cheff_Status //Dashboard_reducer.data_Status,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStudents: () => { dispatch(studentServer.fetchStudents()) },
    handleAddCheff : () =>{dispatch({ type: cheff_Actions.cheff_Create.ADDCHEFF})},
    
  };
};

class Cheff_View extends Component {
  constructor(props) {
      super(props);
     this.state = {};
  
  }
  componentDidMount(){
    alert("cheff view called");
    this.props.fetchStudents();
  }

  getScreen(status) {
    //console.log("I am from register Component getScreen: " + status);
    //alert(status);
    switch (status) {
      
      case cheff_Status.cheff_Create.SHOWCHEFF:
        return (
          <ShowCheff handleAddCheff={this.props.handleAddCheff}/>
        );
      break;
      case cheff_Status.cheff_Create.ADDCHEFF:
        return (
          <AddCheff />
        );
      break;
     
      
      default:
        break;
    }
  }
  render() {
    return (
      <div>
          {this.getScreen(this.props.cheff_status)}
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cheff_View);