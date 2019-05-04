import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AppBar from './AppBar'
import Grid from '@material-ui/core/Grid';
import bannerbg from '../img/bannerbg.jpg'

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import CardExample from './Cards'
const styles = theme => ({
  img: {

    [theme.breakpoints.up('md')]: {
      width:'100%',height:'100%',backgroundImage:`url(${bannerbg})`,backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat',paddingBottom:'10%',height:500
  },
     [theme.breakpoints.down('md')]: {
      width:'100%',height:'100%',backgroundImage:`url(${bannerbg})`,backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat',paddingBottom:'10%'
      
    },
  }

  ,imgText: {

    [theme.breakpoints.up('md')]: {
      color:'white',
      fontWeight:'bold',
      fontFamily:'serif',
      fontSize:60,
     
  },
     [theme.breakpoints.down('md')]: {
      color:'white',
      fontWeight:'bold',
      fontFamily:'serif',
      fontSize:50,
      paddingBottom:'2%'
      
    },
    // [theme.breakpoints.up('md')]: {
    //   backgroundColor: theme.palette.primary.main,
    // },
    // [theme.breakpoints.up('lg')]: {
      
    // },
  },
  imgTextF: {

    [theme.breakpoints.up('md')]: {
      color:'white',fontSize:15, marginTop:50
     
  },
     [theme.breakpoints.down('md')]: {
      color:'white',fontSize:15
      
    }
  }
});
class Dashboard extends Component {    
  constructor(props){
    super(props);
  }

    render() {
      const{classes}=this.props;
        return (
        
          <Grid container direction='row'>
            <Grid item  container  className={classes.img} > 
                <AppBar handleAddFoodClick={this.props.handleAddFoodClick} handleAddCheffClick={this.props.handleAddCheffClick} 
                handleShowcart={this.props.handleShowcart}/>
              
                <Grid item lg={12} xs={12} style={{ paddingTop:70}}> 
                <Typography  align='center' className={classes.imgTextF}>
                  THE MOST INTERESTING FOOD IN THE WORLD
                </Typography> 
                <Typography   align='center' variant='h1' className={classes.imgText}>
                <i> Discover the <i style={{color:'orange'}}>flavors</i><br />of <i style={{color:'orange'}}>foodfun</i></i>
                </Typography> 
                </Grid> 
            </Grid>
            <Grid item>
              <h2>Welcome to foodfun</h2>
              <CardExample handleShowFood={this.props.handleShowFood}/>
            </Grid>
            
          </Grid>
        );
    }
}

export default withRouter(withStyles(styles)(Dashboard));
