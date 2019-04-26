
import React from 'react';
import { HashRouter, BrowserRouter, Router, Route, Switch, Link } from 'react-router-dom';
import Dashboard_View from './components/dashboard/Dashboard_View'
import Team_View from './components/DeliveryTeam/Team_View'
import Cheff_View from './components/Cheff/Cheff_View';
//import SignIn_View from './components/Login/Login_View'


const Root = () => (

  <BrowserRouter>
    <Switch>
      
      <Route exact path='/' component={Dashboard_View} />
      <Route exact path='/Team_View' component={Team_View} />
      {/* <Route exact path='/SignIn_View' component={SignIn_View} /> */}
      <Route exact path='/Cheff_View' component={Cheff_View} />
      
      
      
    </Switch>
  </BrowserRouter >
);
export default Root;
