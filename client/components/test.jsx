import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { browserHistory } from "react-router";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Dropdown, {
  DropdownTrigger,
  DropdownContent
} from "react-simple-dropdown";
import "../dist/styles.css";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import ChatIcon from "@material-ui/icons/Chat";
import FaceIcon from "@material-ui/icons/Face";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Home from "./Home.jsx";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mentor: false
    };

    this.handleLinkClick = this.handleLinkClick.bind(this);

    this.renderMentor = this.renderMentor.bind(this);
  }

  changeMentorView() {
    this.setState({
      mentor: true || false
    });
  }

  renderMentor() {
    if (this.state.mentor) {
      return <Redirect to="/mentor" />;
    }
  }

  handleLinkClick() {
    this.refs.dropdown.hide();
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className="navContainer text-center">
        <div>{this.renderMentor()}</div>
        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          showLabels
          className={classes.app}
        >
          <BottomNavigationAction
            label="Home"
            value="home"
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            label="Chat"
            value="chat"
            icon={<ChatIcon />}
          />
          <Dropdown className="account-dropdown" ref="dropdown">
            <DropdownTrigger>
              <BottomNavigationAction
                label="User"
                value="user"
                icon={<FaceIcon />}
              />
            </DropdownTrigger>
            <DropdownContent>
              <ul>
                <Link to="/home" onClick={this.handleLinkClick}>
                  Home
                </Link>
              </ul>
              <ul>
                <FormControl component="fieldset">
                  <FormGroup row>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={this.state.mentor}
                          onChange={this.changeMentorView.bind(this)}
                        />
                      }
                      label="Mentor"
                    />
                  </FormGroup>
                </FormControl>
              </ul>
              <ul>
                <Link to="/logout" onClick={this.handleLinkClick}>
                  Log Out
                </Link>
              </ul>
            </DropdownContent>
          </Dropdown>
          {/* <button className="google-oauth">{this.googleOAuth()}</button> */}
        </BottomNavigation>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);