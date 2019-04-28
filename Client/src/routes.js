
import React from 'react';
import { HashRouter, BrowserRouter, Router, Route, Switch, Link } from 'react-router-dom';
import Dashboard_View from './components/dashboard/Dashboard_View'
import Team_View from './components/DeliveryTeam/Team_View'
import Cheff_View from './components/Cheff/Cheff_View';
import SignIn from './components/Login/SigninForm'
import SignUp from './components/Signup/Signup'
import SignIn_View from './components/Login/Login_View'
import Signup_View from './components/Signup/Signup_View'
// import CenteredGrid from './components/dashboard/Cart'


const Root = () => (

  <BrowserRouter>
    <Switch>
    {/* <Route exact path='/Admin' component={SignIn} /> */}
      {/* <Route exact path='/Admin_Dashboard' component={Dashboard_View} /> */}
      <Route exact path='/' component={Dashboard_View} />
      <Route exact path='/Cheff_View' component={Cheff_View} />
      <Route exact path='/Team_View' component={Team_View} />
      <Route exact path='/SignIn_View' component={SignIn_View} />
      <Route exact path='/Signup_View' component={Signup_View} />
      {/* <Route exact path='/CenteredGrid' component={CenteredGrid} /> */}
      
      
      
    </Switch>
  </BrowserRouter >
);
export default Root;
