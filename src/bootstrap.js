import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import reducers from './reducers'

import App from './components/app'
import HomeMob from './components/homeMob'
import Wall from './components/wall'

const createStoreWithMiddleware = applyMiddleware()(createStore)

import 'bootstrap/dist/css/bootstrap.css'
import './style/main.scss'

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        { screen.width >= 600 ?
          <Switch>
            <Route exact path="/" component={App} />  
            <Route exact path="/" component={Wall}
          </Switch>:
          <Switch>
            <Route exact path="/" component={HomeMob} /> 
          </Switch>}
      </BrowserRouter>
    </Provider>
    , document.querySelector('.app-wrapper'))
}

document.addEventListener('DOMContentLoaded', main)
