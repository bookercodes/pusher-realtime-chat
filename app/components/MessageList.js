import React from 'react'
import {Media} from 'react-bootstrap'
import Message from './Message'

const MessageList = React.createClass({
  render () {
    if (this.props.messages.length < 1) {
      return <p>No messages in this channel... yet</p>
    }
    return (
      <Media.List>
        {this.props.messages.map((message, i) => <Message message={message} key={i} />)}
      </Media.List>
    )
  }
})

export default MessageList
