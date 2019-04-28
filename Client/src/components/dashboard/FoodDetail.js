import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import food5 from '../img/food5.jpg'
import bannerbg from '../img/bannerbg.jpg'
import Typography from '@material-ui/core/Typography';
import AppBar from './AppBar'
import { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  root: {
    flexGrow: 1,
  
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class FoodDetail extends Component {
  constructor(props){
    super(props);
    this.state={
      age:''
    }
  }
  handleChange = event => {
    this.setState({ age: event.target.value });
  };
  render(){
    const { classes } = this.props;
    
  return (
    <div className={classes.root}>
      <AppBar />
      <Typography variant="title" style={{padding:20}}>Food Details</Typography>
      <Grid container direction="rows" style={{padding:20}}>

        <Grid item lg={4}>
          <img src={food5} style={{width:'100%',height:'100%'}}/>
        </Grid>
        <Grid item lg={8} container direction="column" style={{padding:20}}>
          <Grid item>
            <Typography variant="h6" gutterBottom style={{fontSize:30,fontWeight:'bold'}}>Karachi Biryani</Typography>
          </Grid>
          <Grid item container direction='row' spacing={16}>
            <Grid item>
              <Typography variant="subheading" gutterBottom >Quantity</Typography>
            </Grid>
            <Grid item>
              <FormControl >
              <Select
                value={this.state.age}
                onChange={this.handleChange}
                
                //input={<BootstrapInput name="age" id="age-customized-select" />}
                >
                
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
              </Select>
              </FormControl>
            </Grid>
            <Grid item>
      <Button variant="contained" color="secondary" className={classes.button}>Add to Cart</Button>
            </Grid>
          </Grid>
          
        </Grid>
      </Grid>


{/*       
        <Grid container >
          <Grid container direction="columns" xs={12} >
                <img src={food5} style={{width:'100%',height:350}}/>
                <Grid item>
                <Typography variant="title" gutterBottom style={{margin:30,fontSize:30,fontWeight:'bold'}}>Karachi Biryani</Typography>
                </Grid>
                
                <Grid item >
                Quantity
                <FormControl //className={classes.margin}
                >
            <Select
            value={this.state.age}
            onChange={this.handleChange}
            
            //input={<BootstrapInput name="age" id="age-customized-select" />}
            >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
          </Select></FormControl>
                </Grid>
            
                <Grid container align>
                  <Grid item>
                    <Typography >Quantity</Typography>
                  </Grid>
                  <Grid item><Typography >Quantity</Typography></Grid>
                  
                </Grid>
          </Grid> 
          <Grid item xs={3} style={{width:'100%',backgroundColor:'pink'}}>
              <h4>asdsaasfdfdds</h4>
              
          </Grid>
        </Grid> 
     */}
    </div>
  );
  }
}

FoodDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FoodDetail);
