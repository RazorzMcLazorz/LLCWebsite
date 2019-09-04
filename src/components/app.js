import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/actions'

class App extends Component {

  render() {
    return (
      <div>
        {this.props.start}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return state
}
App = connect(mapStateToProps, actions)(App);
export default App;