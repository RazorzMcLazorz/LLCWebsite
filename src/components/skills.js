import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import Footer from './parts/footer'

class Skills extends Component {

  state = {
    start : 'im the state'
  }

  render() {
    return (
      <div id='skills' className='presetBackground'>
          <div className='skillsLeft'/>
          <div className='skillsMiddle'>
            <div className='skillsBox'>
              <div className='skillsBoxHeader'>Javascript</div>
              <div className='skillsBoxContent'>
                With JavaScript, I've spent about 6+ Weeks learning, building stuff on repl.it, CodePen, Visual Studio Code making the Basic Html CSS Websites, and React / Redux.
              </div>
            </div>
            <div className='skillsBox'>
              <div className='skillsBoxHeader'>HTML & CSS</div>
              <div className='skillsBoxContent'>
                These Website languages is what I used to style and order this entire website, I use the SCSS style more than SASS but mostly just becasue its the newest version. HTML and CSS are pretty much straight forward its just align than style with CSS / SCSS, although I am still learning alot with CSS especially animations.
              </div>
            </div>
            <div className='skillsBox'>
              <div className='skillsBoxHeader'>Python 2.7 - 3.0</div>
              <div className='skillsBoxContent'>
                Learned Python which I can build small games with, and websites with just it's not recommended so it's very useful in teaching myself how to build certain complex javascript I write it out in python if it works together I convert it to JavaScript speeding my production because JavaScript can be confusing and not fun when building complex so having the blueprint helps build it.
              </div>
            </div>
            <div className='skillsBox'>
              <div className='skillsBoxHeader'>How long ive been coding...</div>
              <div className='skillsBoxContent'>
                I can take a Website Assignment and using React build a completely functional websites fit with connections between a DataBase and the Website being able to respond to user logins / Admin logins using CSS and HTML make the Website look Decent built to your liking, and how you want it to look I can change to fit today's designs.
              </div>
            </div>
          </div>
          <div className='skillsRight'/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return state
}
Skills = connect(mapStateToProps, actions)(Skills);
export default Skills;