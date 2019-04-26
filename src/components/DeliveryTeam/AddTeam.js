import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import PersonLogo from '../img/Person.png'

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
class AddTeam extends React.Component{
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
          <img src={PersonLogo} />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add Team
        </Typography>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input id="name" name="name" autoComplete="name" autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="contact">Contact</InputLabel>
            <Input name="contact" type="number" id="contact" autoComplete="contact" />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="address">Contact</InputLabel>
            <Input name="address" id="address" />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="salary">Salary</InputLabel>
            <Input name="Salary" type="number" id="Salary" />
          </FormControl>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
        Save
          </Button>
        </form>
      </Paper>
    </main>
  );
    }
}
AddTeam.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddTeam);