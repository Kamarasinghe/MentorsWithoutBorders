import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing.unit * 2,
  }
});


class SelectedMentors extends Component {
  render() {
    let mentor = this.props.mentor;
    const { classes } = this.props;

    return (
      <div className='eachMentor'>
        <ListItem>
          <Grid container className={classes.root} spacing={0}>
            <Grid item xs={4}>
              <Avatar src={mentor.photo} className='theAvatar' />
              <div className='theName'>
                <h2>{this.props.name}</h2> 
              </div>
              <div className='state'>
                <h3>{this.props.city}</h3> 
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className='aQuote'>
                <h2>{mentor.aQuote}</h2>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className='startChat chatBubble'>
              <Button component={Link} to='/chat'>
              <i class="material-icons md-48 chat">
                voice_chat
              </i>
              </Button>
              </div>
              <div className='addMentorFA'>
                <i className='fas fa-user-plus fa-2x addMentor'></i>
              </div>
              <div className='profileFA'>
                <i className='far fa-id-card fa-2x viewProfile'></i>
              </div>
            </Grid>
          </Grid>
        </ListItem>
        {/* {console.log(this.props.mentor)} */}
      </div>
    );
  }
};

SelectedMentors.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectedMentors);
