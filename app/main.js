import React from 'react'
import ReactDOM from 'react-dom'
import Chat from './containers/Chat'
import Layout from './components//Layout'
import About from './components/About'
import {
  Router,
  Route,
  hashHistory,
  IndexRoute,
  Redirect
} from 'react-router'

const channels = window.INITIAL_STATE.channels

ReactDOM.render(
  <Router history={hashHistory}>
    <Redirect from='/' to={`/channels/${channels[0]}/`} />
    <Redirect from='/channels' to={`/channels/${channels[0]}/`} />
    <Route path='/' component={Layout}>
      <Route path='/channels'>
        <Route
          path=':channelName'
          channels={channels}
          component={Chat} />
      </Route>
      <IndexRoute component={Chat} />
      <Route path='about' component={About} />
    </Route>
  </Router>,
  document.getElementById('app')
)
