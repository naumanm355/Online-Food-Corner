
import React, { Component } from "react";
import { connect } from "react-redux";
import Dashboard from './Dashboard';
import {data_Status,data_Actions} from '../../constants/Dashboard';
import AddFood from './AddFood'
import Cart from './Cart'
import FoodDetail from './FoodDetail'

const mapStateToProps = (state) => {
  console.log("****************************state:", state);
  return {
    data_status: state.Dashboard_reducer.data_Status,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleClickShowDashboard : () =>{dispatch({type: data_Actions.data_Create.NEW})},
    handleAddFoodClick : () =>{dispatch({ type: data_Actions.data_Create.ADDFOOD})},
    handleShowcart : () =>{dispatch({ type: data_Actions.data_Create.SHOWCART})},
    handleShowFood : () =>{dispatch({ type: data_Actions.data_Create.FOODDETAIL})},
    
  };
};

class Dashboard_View extends Component {
  constructor(props) {
      super(props);
     this.state = {};
  
  }

  getScreen(status) {
    //console.log("I am from register Component getScreen: " + status);
    //alert(status);
    switch (status) {
      
      case data_Status.data_Create.NEW:
        return (
          <Dashboard handleAddFoodClick={this.props.handleAddFoodClick} 
          handleShowcart={this.props.handleShowcart} 
          handleShowFood={this.props.handleShowFood}/>
        );
      break;
      case data_Status.data_Create.ADDFOOD:
        return (
          <AddFood handleClickShowDashboard={this.props.handleClickShowDashboard}/>
        );
        break;
      case data_Status.data_Create.SHOWCART:
          return (
            <Cart />
          );
          break;
      case data_Status.data_Create.FOODDETAIL:
          return (
            <FoodDetail handleClickShowDashboard={this.props.handleClickShowDashboard}/>
          );
          break;

      default:
        break;
    }
  }
  render() {
    return (
      <div>
          {this.getScreen(this.props.data_status)}
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard_View);