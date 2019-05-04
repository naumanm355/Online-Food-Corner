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
import { withRouter } from 'react-router-dom';
import {storage} from '../../firebase' //'../firebase';

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
    marginTop: 10,// theme.spacing.unit * 8,
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
        this.state={
          image:null, url:'', progress: 0
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }
    
    handleChange = e => {
      if (e.target.files[0]) {
        const image = e.target.files[0];
        this.setState(() => ({image}));
      }
    }
    handleUpload = () => {
        const {image} = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed', 
        (snapshot) => {
          // progrss function ....
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          this.setState({progress});
        }, 
        (error) => {
             // error function ....
          console.log(error);
        }, 
      () => {
          // complete function ....
          storage.ref('images').child(image.name).getDownloadURL().then(url => {
              console.log("Image url",url);
              this.setState({url});
          })
      });
    }
render(){
  const { classes } = this.props;

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
      <progress value={this.state.progress} max="100"/>
        <Avatar className={classes.avatar}>
          {/* <LockOutlinedIcon /> */}
        </Avatar>
        <Typography component="h1" variant="h5">
        Add Food Items
        </Typography>
        <form className={classes.form}>
        {/* <input type="text" data-length="10" required placeholder="Food Name" autoFocus>
        </input>
        <input type="text" data-length="10" required placeholder="Price" >
        </input> */}
          {/* <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="name">Food Name</InputLabel>
            <Input id="name" name="name" autoComplete="name" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="price">Price</InputLabel>
            <Input name="price" type="number" id="price" />
          </FormControl> */}
          {/* <FormControl margin="normal" required fullWidth> */}
            <InputLabel>Add Food Picture</InputLabel>
          <input type="file" id="imgupload" style={{margin:10,cursor:'pointer'}} onChange={this.handleChange}/>
          <button style={{cursor:'pointer',}} type="button" onClick={this.handleUpload}>Upload</button>
            {/* <a href="#" onclick="$('#imgupload').trigger('click'); return false;"></a> */}
          <img src={this.state.url || 'https://via.placeholder.com/300x300'} style={{width:300,height:300}}/>
            {/* <textarea id="textarea2" placeholder="Description" class="materialize-textarea" data-length="120"></textarea> */}
            
           {/* </FormControl> */}
          {/* <FormControl margin="normal" required fullWidth> */}
            {/* <InputLabel htmlFor="description">Description</InputLabel> */}
            {/* <textarea name="description" placeholder="Description" type="text" maxlength="300"  id="description" />
          </FormControl> */}

          {/* <Button type="submit" fullWidth variant="contained"vcolor="primary"
            className={classes.submit}>Save</Button> */}
          <Typography style={{paddingTop:20,fontWeight:'bold',textAlign:'center'}}>OR</Typography>
          {/* <Button fullWidth variant="contained" color="primary" className={classes.submit}
           // type="submit"
            onclick={this.props.handleClickShowDashboard}>Show Food!</Button> */}
        </form>
      </Paper>
    </main>
  );
}
}
AddFood.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(AddFood));


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
