/* global btoa */
import React from 'react'
import Pusher from 'pusher-js'
import {ChatPage, VerticalChannelNav} from '../components'
import * as messageSource from '../sources/messageSource'

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
    this.pusher = new Pusher('07a51219d95bf978b342')
    this.channel = this.pusher.subscribe(btoa(this.props.params.channelName))
    const eventName = 'new_message'
    this.channel.bind(eventName, channelMessage => {
      this.setState({
        channelMessages: this.state.channelMessages.concat(channelMessage)
      })
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
      <div className='chat'>
        <VerticalChannelNav channels={this.props.route.channels} />
        <ChatPage
          {...this.props}
          messages={this.state.channelMessages}
          handleSubmit={this.onMessageSubmitted} />
      </div>
    )
  }
})

export default Chat
