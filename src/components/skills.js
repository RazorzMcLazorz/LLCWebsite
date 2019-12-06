import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'
import Footer from './parts/footer'
import NavBar from './parts/navbar'

class Skills extends Component {

  state = {
    start : 'im the state'
  }

  render() {
    return (
      <div id='skills'>
        <NavBar/>
        <div id='skillsDetails'>
          <div className='skillsMiddle'>
            <div className='skillsBox'>
              <div className='skillsBoxHeader'>Javascript</div>
              <div className='skillsBoxContent'>
                With JavaScript, I've spent about 6+ Weeks learning, building stuff on repl.it, CodePen, Visual Studio Code making the Basic Html CSS Websites, and React / Redux. React is what allows websites to be needed loaded once so its smooth transition between pages. With React I know how to manage the State and the this statement while within the class components. Redux is an addition to React to allow everything to be put into the store and distriputed to all files allowing seemless data transfer instead of importing.
              </div>
            </div>
            <div className='skillsBox'>
              <div className='skillsBoxHeader'>Python 2.7 - 3.0</div>
              <div className='skillsBoxContent'>
                <p>Python was the 3rd coding language I learned after C# and C++ and it came very natural to me and allowed me to understand more complicated methods such as loops, most of my Python coding was on repl.it  which I used as a baseline to create the Black Jack Game <a target='_blank' href='https://repl.it/@Razorz/BlackJack'>https://repl.it/@Razorz/BlackJack</a>, I than converted that to Javascript. the other thing I built with python used selenium python to create an automated system to do a diagnostic check on some of the websites always changing modules.</p>
              </div>
            </div>
            <div className='skillsBox'>
              <div className='skillsBoxHeader'>HTML & CSS</div>
              <div className='skillsBoxContent'>
                These Website languages is what I used to style and order this entire website, I use the SCSS style more than SASS but mostly just becasue its the newest version. HTML and CSS are pretty much straight forward its just align than style with CSS / SCSS, although I am still learning alot with CSS especially animations.
              </div>
            </div>
            <div className='skillsBox'>
              <div className='skillsBoxHeader'>How long ive been coding...</div>
              <div className='skillsBoxContent'>
                <p>My Coding Career started when I joined a Coding BootCamp called Bottega.tech in July of 2018 to October of 2018, where I graduated from the class and started working with a Company Called RoviTracker, I started working here November of 2018 till now.  My Experience level, in my opinion, is at a junior to mid-level as I'm at the point where I can create a fully functional website and iterate on it and make it follow specific guidelines, this website your reading this on doesn't use too much material-UI in it as I'm trying to show my React, Redux, SCSS skills.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return state
}
Skills = connect(mapStateToProps, actions)(Skills);
export default Skills;