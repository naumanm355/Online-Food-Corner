import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import food1 from '../img/food1.jpg'
import food2 from '../img/food2.jpg'
import food3 from '../img/food3.jpg'
import food4 from '../img/food4.jpg'
import food5 from '../img/food5.jpg'
import AppBar from './AppBar'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { typography } from 'material-ui/styles';
const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow:'hidden'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 'auto',
    
    maxWidth: 600,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  margin: {
    margin: theme.spacing.unit,
  },
});

let id = 0;
function createData(name, calories, fat, carbs) {
  id += 1;
  return { id, name, calories, fat, carbs};
}

const rows = [
  createData(food1, 'Mix Food', 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.', 24),
  createData(food2,'Chicken Burger', 'I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively.', 37),
  createData(food3,'Shawarma', 'I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively.', 24,),
  createData(food4, 'Chicken Leg Piece', 'I am a very simple card. I am good at containing small bits of information.I am convenient because I require little markup to use effectively.', 67,),
  
];



function Cart(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
    <AppBar />
    <Typography variant="h4" align='center' gutterBottom>Your Food Order</Typography>
    <Typography variant="subheading" align='center' gutterBottom>Total Amount: 152</Typography>

    <Grid container spacing={16} direction="columns">
    {rows.map(row=>(

<Grid item lg={12} md={12} xs={12} >
   
      <Paper className={classes.paper}>
        <Grid container spacing={16}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={row.name} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <Typography gutterBottom variant="h5">
                  {row.calories}
                </Typography>
                <Typography gutterBottom>{row.fat}</Typography>
                {/* <Typography color="textSecondary">ID: 1030114</Typography> */}
                <Typography variant="subtitle1">Price: Rs. {row.carbs}</Typography>
              </Grid>
              {/* <Grid item>
                <Typography style={{ cursor: 'pointer' }}>Remove</Typography>
                
              </Grid> */}
            </Grid>
            <Grid item>
              <IconButton aria-label="Delete" className={classes.margin}>
                    <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      </Grid>
    ))}
    </Grid>
    </div>
  );
}

Cart.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cart);





// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import food5 from '../img/food5.jpg'
// import bannerbg from '../img/bannerbg.jpg'
// import Typography from '@material-ui/core/Typography';
// import AppBar from './AppBar'
// import { Component } from 'react';
// import { typography } from 'material-ui/styles';


// const styles = theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     //padding: theme.spacing.unit *2,
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
// });

// class Cart extends Component {
//   constructor(props){
//     super(props);
//   }
//   render(){
//     const { classes } = this.props;
    
//   return (

//     <Grid container direction="row">
//       <Grid item lg={3} xs={6} md={6} style={{backgroundColor:'yellow'}}>
//         <img src={food5} style={{width:'100%',height:'100%'}}/>
//       </Grid>
//       <Grid item lg={9} xs={6} md={6} style={{backgroundColor:'pink'}}>
//       <p>I am a very simple card. I am good at containing small bits of information.</p>
//       </Grid>
//     </Grid>

//     // <div className={classes.root}>
//     //   <AppBar />
//     //   <h2 class="header">Food Order</h2>


//     //   {/* <div class="col s12 m7">
//     //     <div class="card horizontal">
//     //       <div class="card-image">
//     //         <img src={bannerbg} style={{height:'100%',width:'40%'}}/>
//     //       </div>
//     //       <div class="card-stacked">
//     //         <div class="card-content">
//     //           <p>I am a very simple card. I am good at containing small bits of information.</p>
//     //         </div>
//     //         <div class="card-action">
//     //           <a href="#">This is a link</a>
//     //         </div>
//     //       </div>
//     //     </div> 
//     //   </div>*/}
            
//     //       {/* <Grid item xs={9} >
//     //             <img src={bannerbg} style={{width:'100%',height:350}}/>
//     //             <Typography variant="title" gutterBottom style={{margin:30,fontSize:30,fontWeight:'bold'}}>Karachi Biryani</Typography>
//     //       </Grid> 
//     //       <Grid item xs={3} style={{width:'100%',height:600,backgroundColor:'pink'}}>
//     //           <h4>asdsads</h4>
//     //       </Grid> */}

    
//     // </div>
//   );
//   }
// }

// Cart.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(Cart);
