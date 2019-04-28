import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import logo from '../img/logo.png'
import { withRouter } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import SignIn from '../Login/SigninForm'
import Signup from '../Signup/Signup';
import addshopingcart from '../img/addshopingcart.png'
import removeshopingcard from '../img/removeshopingcard.png'
import Home from '../img/Home.png'

const styles = theme =>( {
  root: {
    flexGrow: 1,
    padding:20,
    
  },
  grow1: {
    flexGrow: 1,
  },
  grow2: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },


  showImg: {

    [theme.breakpoints.up('md')]: {
      
     
  },
     [theme.breakpoints.down('md')]: {
      
      
    },
  }
});

class ButtonAppBar extends Component {
  constructor(props){
    super(props);
    this.state={open:false}
  }
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render(){
    const { classes } = this.props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color='secondary' style={{backgroundColor:'#ffffff',borderRadius:'3px'}}>
        <Toolbar>
        <Grid container spacing={24}>
        <Grid item xs align='left'>
          <a style={{cursor:'pointer'}}><img src={logo} /></a>
        </Grid>
          
        <Grid item xs align='right' style={{padding:26}}>
        
          <a onClick={()=>this.props.history.push('/')} style={{color:'black',fontWeight:'bold',cursor:'pointer'}}>
            MENU
          </a>
          {/* &emsp;
          <a onClick={()=>this.props.handleAddFoodClick()} style={{color:'black',fontWeight:'bold',color:'black',cursor:'pointer'}}>
            ADD FOOD
          </a>
          &emsp;
          <a onClick={()=>this.props.history.push('/Cheff_View')} style={{color:'black',fontWeight:'bold',cursor:'pointer'}}>
           CHEFF
          </a>
          &emsp;
          <a onClick={()=>this.props.history.push('/Team_View')} style={{color:'black',fontWeight:'bold',cursor:'pointer'}}>
            DELIVERY TEAM
          </a> */}
          &emsp;  
          <a style={{cursor:'pointer',color:'black'}} onClick={this.props.handleShowcart}>
            <img src={addshopingcart}/>1
          </a>
          &emsp;
          <a onClick={()=>this.props.history.push('/SignIn_View')
          }  
           style={{fontWeight:'bold',cursor:'pointer',color:'black'}} >
          SIGNIN
      
          </a>
          </Grid>

      
      </Grid>
        {/* <Typography align='left' variant="h6" color="inherit" className={classes.grow1}>
            Dashboard
          </Typography>
          <Typography align='center' variant="h6" color="inherit" className={classes.grow2}>
            Dashboard
          </Typography>
          <Button color="inherit">
            Login
          </Button> */}
        </Toolbar>
      </AppBar>
      <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          
            <Signup />
       
        </Modal>
    </div>
  );
}
}
ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(ButtonAppBar));
