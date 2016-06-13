/* global btoa */
import React from 'react'
import Pusher from 'pusher-js'
import {Grid, Col, Row} from 'react-bootstrap'
import {MessagePanel, VerticalChannelNav} from '../components'
import * as messageSource from '../sources/messageSource'
import Notifications from 'notificationsjs'

const Chat = React.createClass({
  getInitialState () {
    return {
      channelMessages: []
    }
  },

  fetchChannelMessages () {
    messageSource
      .fetchMessagesForChannel(this.props.params.channelName)
      .then(channelMessages => this.setState({ channelMessages }))
  },

  subToNewChannelMessages () {
    this.pusher = new Pusher('d55447385c490cb7e41a')
    this.channel = this.pusher.subscribe(btoa(this.props.params.channelName))
    const eventName = 'new_message'
    this.channel.bind(eventName, channelMessage => {
      this.setState({
        channelMessages: this.state.channelMessages.concat(channelMessage)
      })
    })
    this.notifications = new Notifications({
      closeAfter: 2000,
      pusher: {
        instance: this.pusher,
        channelName: this.channel.name,
        eventName: eventName,
        transform: event => {
          return `${event.user.username} said ${event.text}`
        }
      }
    })
  },

  componentDidMount () {
    this.fetchChannelMessages()
    this.subToNewChannelMessages()
  },

  componentDidUpdate (prevProps) {
    const paramsUpdated = this.props.params !== prevProps.params
    if (paramsUpdated) {
      this.setState(this.getInitialState(), function callback () {
        this.channel.unsubscribe(prevProps.channelName)
        this.componentDidMount()
      })
    }
  },

  onMessageSubmitted (message) {
    messageSource.createMessageForChannel(message, this.props.params.channelName)
  },

  render () {
    return (
      <Grid fluid>
        <Row className='show-grid'>
          <Col className='channels' xs={12} md={2} style={{padding: 0}}>
            <VerticalChannelNav channels={this.props.route.channels} />
          </Col>
          <Col className='messages' xs={12} md={8} style={{padding: 0}}>
            <MessagePanel
              {...this.props}
              messages={this.state.channelMessages}
              handleSubmit={this.onMessageSubmitted} />
          </Col>
        </Row>
      </Grid>
    )
  }
})

export default Chat
