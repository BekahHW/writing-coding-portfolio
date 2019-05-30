import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';



const styles = {
  root: {
    flexGrow: 1,

  },
  grow: {
    flexGrow: 1,
    textAlign: "left",
    color: "white"
  },
  menuButton: {
    color: "white",
  },

};

const NavBar = (props) => {
  const { classes } = props;

  return <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>


        <Typography
          variant="h6" className={classes.grow}>
          <NavLink style={{ color: 'white', textDecoration: 'none' }}
            to="/">
            Logo
            </NavLink>
        </Typography>
        <SocialIcon url="http://twitter.com/bekahhw" />
        <SocialIcon url="https://www.instagram.com/bekahhw/" />

        <SocialIcon url="https://www.linkedin.com/in/bekah-hawrot-weigel/" />
        <NavLink
          to="/writing"><Button className={classes.menuButton} color="inherit">Writing</Button></NavLink>
        <NavLink
          to="/Coding"><Button className={classes.menuButton} color="inherit">Coding</Button></NavLink>

      </Toolbar>
    </AppBar>
  </div>
}



NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(NavBar);
