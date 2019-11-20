import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import Navbar from './parts/navbar'

class Contact extends Component {

  state = {
    start : 'im the state'
  }

  render() {
    return (
      <div id='contact'>
        <Navbar/>
        <div className = "ContactInfo">
            <div>You can find me at these links</div>
            <div className="MYLinks">
              <a href="https://github.com/RazorzMcLazorz" target="_blank"><i class="fab fa-github-square"></i></a>
              <a href="https://www.facebook.com/RazorzMcLazorz" target="_blank"><i class="fab fa-facebook"></i></a>
              <a href="https://www.linkedin.com/in/nate-p-young/" target="_blank"><i class="fab fa-linkedin"></i></a>
            </div>
            <div>Or</div>
            <div className="MYLinksTop">Manually message me at: </div>

            <div className="MYLinksTop3" type="text" id ="email" value="nateyoungdev@gmail.com">nateyoungdev@gmail.com</div>

            <div className="MYLinksTop">To make it faster here's some links to the Emails</div>
            <div className="EmailLinks">
                <a href="https://mail.google.com/" target="_blank" className="projects"><img src = "\assets\gmail.png"></img></a>
                <a href="https://outlook.live.com/owa/" target="_blank" className="projects"><img src = "\assets\Outlook.png"></img></a>
                <a href="https://overview.mail.yahoo.com/" target="_blank" className="projects"><img src = "\assets\yahoo.png"></img></a>
                <a href="http://www.inbox.com/tech/" target="_blank" className="projects"><img src = "\assets\inbox.png"></img></a>
                <a href="https://www.icloud.com/" target="_blank" className="projects"><img src = "\assets\icloud.png"></img></a>
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return state
}
Contact = connect(mapStateToProps, actions)(Contact);
export default Contact;