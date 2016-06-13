import React from 'react'
import {Media} from 'react-bootstrap'

const Message = React.createClass({
  render () {
    return (
      <Media className='message'>
        <Media.Left>
          <img width={32} height={32} src={this.props.message.user.avatarUrl} alt={this.props.message.user.username} />
        </Media.Left>
        <Media.Body>
          <p>{this.props.message.text}</p>
          <small className='text-muted'>@{this.props.message.user.username} | {this.props.message.createdAt}</small>
        </Media.Body>
      </Media>
    )
  }
})

export default Message
