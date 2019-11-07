import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import reducers from './reducers'

import App from './components/app'
import Wall from './components/wall'
import Skills from './components/skills'
import Login from './components/login'
import Contact from './components/contact'

const createStoreWithMiddleware = applyMiddleware()(createStore)

import 'bootstrap/dist/css/bootstrap.css'
import './style/main.scss'

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />  
          <Route exact path="/wall" component={Wall} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </Provider>
    , document.querySelector('.app-wrapper'))
}

document.addEventListener('DOMContentLoaded', main)
