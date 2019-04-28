import React from 'react';
import bannerbg from '../img/bannerbg.jpg'
import food1 from '../img/food1.jpg'
import food2 from '../img/food2.jpg'
import food3 from '../img/food3.jpg'
import food4 from '../img/food4.jpg'
import food5 from '../img/food5.jpg'
import { withRouter } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import SignIn from '../Login/SigninForm'
import SignUp from '../Signup/Signup'

const styles = theme => ({
  margin: {
    //margin: theme.spacing.unit*2,\
    marginLeft:80
  },
  marginEdit:{
    marginLeft:10
  }
});
let id = 0;
function createData(name, calories, fat, carbs) {
  id += 1;
  return { id, name, calories, fat, carbs};
}

const rows = [
  createData(food1, 'Mix Food', 'I am a very require little markup to use effectively.', 24),
  createData(food2,'Chicken Burger', 'I am a very require little markup to use effectively.', 37),
  createData(food3,'Shawarma', 'I am a very require little markup to use effectively.', 24,),
  createData(food4, 'Chicken Leg Piece', 'I am a very require little markup to use effectively.', 67,),
  createData(food5, 'Chicken Leg Piece', 'I am a very require little markup to use effectively.', 67,),
  
  
];
class CardExample extends React.Component {

constructor(props) {
    super(props);
    this.state={open:false}
  }
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
    
render() {
    const { classes } = this.props;
    return (    
        
    <div class="row" style={{margin:10}} >

{rows.map(row=>(
    <div class="col s12 m4 l3">
      <div class="card" onClick={()=>this.props.handleShowFood()}
      style={{cursor:'pointer'}}>
        <div class="card-image" style={{width:'100%',height:200}}>
          <img alt="Food" style={{width:'100%',height:'100%'}} src={row.name}/>
          <span class="card-title">{row.calories}</span>
        </div>
        <div class="card-content" style={{width:'100%',height:100}}>
          <p>{row.fat}</p>
        </div>
        <div class="card-action" >
          <label>Price: Rs. {row.carbs}</label>
          {/* <IconButton aria-label="Delete" //className={classes.margin}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="Edit" >
            <EditIcon />
          </IconButton> */}
          &emsp;&emsp;&emsp;
          {/* <a class="waves-effect waves-light btn-small">Order Now!</a> */}
        </div>
      </div>
    </div>
))}

      {/* <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
          >
            <SignIn />
      </Modal> */}
    {/* <div class="col s12 m3" >
      <div class="card" style={{cursor:'pointer'}}>
        <div class="card-image">
          <img src={bannerbg}/>
          <span class="card-title">Card Title</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <label>Price: Rs. 100</label>
          <IconButton aria-label="Delete" //className={classes.margin}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="Edit" >
            <EditIcon />
          </IconButton>
        </div>
      </div>
    </div>

    <div class="col s12 m3" >
      <div class="card" style={{cursor:'pointer'}}>
        <div class="card-image">
          <img src={bannerbg}/>
          <span class="card-title">Card Title</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <label>Price: Rs. 100</label>
          <IconButton aria-label="Delete" //className={classes.margin}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="Edit" >
            <EditIcon />
          </IconButton>
        </div>
      </div>
    </div>

    <div class="col s12 m3" >
      <div class="card" style={{cursor:'pointer'}}>
        <div class="card-image">
          <img src={bannerbg}/>
          <span class="card-title">Card Title</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <label>Price: Rs. 100</label>
          <IconButton aria-label="Delete" //className={classes.margin}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="Edit" >
            <EditIcon />
          </IconButton>
        </div>
      </div>
    </div>

    <div class="col s12 m3" >
      <div class="card" style={{cursor:'pointer'}}>
        <div class="card-image">
          <img src={bannerbg}/>
          <span class="card-title">Card Title</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <label>Price: Rs. 100</label>
          <IconButton aria-label="Delete" //className={classes.margin}
          >
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="Edit" >
            <EditIcon />
          </IconButton>
        </div>
      </div>
    </div> */}

    
  </div>  



        );
    }
}
export default withRouter(withStyles(styles)(CardExample));
