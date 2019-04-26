import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';


const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class AddFood extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
  const { classes } = this.props;

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          {/* <LockOutlinedIcon /> */}
          
        </Avatar>
        <Typography component="h1" variant="h5">
        Add Food Items
        </Typography>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="name">Food Name</InputLabel>
            <Input id="name" name="name" autoComplete="name" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="price">Price</InputLabel>
            <Input name="price" type="number" id="price" />
          </FormControl>
          {/* <FormControl margin="normal" required fullWidth> */}
            <InputLabel>Add Food Picture</InputLabel>
            <input type="file" id="imgupload" style={{margin:10}}/>
            <a href="#" onclick="$('#imgupload').trigger('click'); return false;"></a>
           {/* </FormControl> */}
          <FormControl margin="normal" required fullWidth>
            {/* <InputLabel htmlFor="description">Description</InputLabel> */}
            <textarea name="description" placeholder="Description" type="text" maxlength="300"  id="description" />
          </FormControl>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign in
          </Button>
        </form>
      </Paper>
    </main>
  );
}
}
AddFood.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddFood);


// import React from 'react';
// import TextField from '@material-ui/core/TextField';
// import { Grid } from '@material-ui/core';
// import Typography from '@material-ui/core/Typography';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';

// class AddFood extends React.Component {

// constructor(props) {
//     super(props);
    
//     }
    

// render() {
//     const { classes } = this.props;
//     return (    
//         <Grid container direction="column" alignItems='center' style={{marginTop:100}}>
//                 <Typography component="h5" variant="h3">Add Food Items</Typography>
                
//         <Grid item style={{width:300}}>

//             <input type="text" placeholder="Food Name" fullWidth margin="normal"/>
//             <input type="number" placeholder="Price" fullWidth margin="normal"/>
//             <input type="text" multiple rowMax="4" placeholder="Description" fullWidth margin="normal"/>
// <br />
//             <InputLabel>Add Food Picture</InputLabel>
//             <input type="file" id="imgupload" style={{margin:10}}/>
//             <a href="#" onclick="$('#imgupload').trigger('click'); return false;">Upload file</a>
    
                
//             <button margin="normal" style={{width:300,height:30,fontWeight:'bold',fontSize:20}}
//                 type="submit" >Save</button>
//         </Grid>
//         </Grid>
        
//         );
//     }
// }
// export default AddFood
