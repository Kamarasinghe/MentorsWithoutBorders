import React, { Component } from 'react';
import axios from 'axios';
import Modal from '@material-ui/core/Modal';

class MentorSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMentor: this.props.isMentor,
      userId: this.props.userId,
    }
    this.isMentorNow = this.isMentorNow.bind(this);
  }

  isMentorNow() {
    console.log('clicked', this.state.userId);
    this.setState({ isMentor: true });

    axios.post('/mentorUpdate', {userId: this.state.userId})
      .then((res) => {
        console.log(res);
      });
  }

  render() {
    return ( 
      <div>
      <h2>So you want to be in our mentoring community?</h2>
      <div className="mentor-descrip">
        Anyone can be a mentor in our community. It feels so rewarding when helping a fellow mentee grow, gain knowledge, and be thankful for your efforts! Not only are you giving, you are also learning to be patient, understanding, and more about yourself along the way. <br />
        <br />

        Simply click on the button below!
        <button className="login-btn" onClick={this.isMentorNow}>Sign me up!</button>
      </div>
      </div>
    )
  }
}

export default MentorSignUp;