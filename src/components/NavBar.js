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
import mainLogo from '../images/lifecode_trans.png'



const styles = {
  navBar:{
    background: 'purple',
  },

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

  socialIcon: {
    margin: 10,
  },

  logo: {
    width: 120,
    height: 100,
    padding: 0,
    margin: 0
  },

};

const NavBar = (props) => {
  const { classes } = props;

  return <div className={classes.root}>
    <AppBar position="static" >
      <Toolbar className={classes.navBar}>


        <Typography
          variant="h6" className={classes.grow}>
          <NavLink style={{ color: 'white', textDecoration: 'none' }}
            to="/">
            <img src={mainLogo} className={classes.logo} alt="watercolorComputer" />
            </NavLink>
        </Typography>
        <SocialIcon className={classes.socialIcon} url="http://twitter.com/bekahhw" />
        
        <SocialIcon className={classes.socialIcon} url="https://www.instagram.com/bekahhw/" />

        <SocialIcon className={classes.socialIcon} url="https://www.linkedin.com/in/bekah-hawrot-weigel/" />
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
