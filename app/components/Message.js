import React from 'react'
import Time from './Time'

const Message = React.createClass({
  render () {
    return (
      <div className='message'>
        <div className='message__top'>
          <img className='message__author-avatar' src={this.props.message.user.avatarUrl} alt={this.props.message.user.username} />
          <p className='message__text'>{this.props.message.text}</p>
        </div>
        <p className='message__time'>
          <Time value={this.props.message.createdAt} />
        </p>
      </div>
    )
  }
})

export default Message
