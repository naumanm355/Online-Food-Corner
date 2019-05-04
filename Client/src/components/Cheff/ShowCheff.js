import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
const styles = theme => ({
  root: {
    margin: theme.spacing.unit * 9,
  },
  fab: {
    margin: theme.spacing.unit,
    position:'fixed',
  },
});

let id = 0;
function createData(name, calories, fat) {
  id += 1;
  return { id, name, calories, fat};
}

const rows = [
  createData('Kaleem', '0304-2387456', 'Multan'),
  createData('Shahid', '0302-2387645', 'Lahore'),
  createData('Shahbaz','0302-8734917', 'Karachi'),
  createData('Fareed', '0333-2387465', 'Multan'),
  createData('Nasir',  '0332-3233456', 'Chungi'),
];

class ShowTeam extends React.Component{
    constructor(props){
    super(props);
}
// componentDidMount(){
//   this.props.studentlist
// }
// componentWillReceiveProps(ItemsProps){
//   this.setState({studentlist:ItemsProps.studentList})
// }
render(){
    const { classes } = this.props;
  return (
    <Grid container>
    <Fab onClick={()=>this.props.handleAddCheff()} 
    color="primary" title="Add Teacher" aria-label="Add" className={classes.fab}>
        <AddIcon />
    </Fab>
    <Grid item style={{width:'100%'}}>
    <Paper className={classes.root}>
      <Table>
        <TableHead style={{backgroundColor:"indigo"}}>
          <TableRow>
            <TableCell style={{color:'white',fontSize:15}}>Cheff Name</TableCell>
            <TableCell style={{color:'white',fontSize:15}} align="right">Contact</TableCell>
            <TableCell style={{color:'white',fontSize:15}} align="right">Address</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    </Grid>
    </Grid>
  );
}
}
ShowTeam.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ShowTeam);