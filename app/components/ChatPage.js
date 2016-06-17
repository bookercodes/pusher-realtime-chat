import React from 'react'
import TwitterIcon from './TwitterIcon'
import {MessageList, MessageInputForm} from '../components'
import {Button} from 'react-bootstrap'

const Footer = ({
  user,
  handleSubmit
}) => {
  if (user.isAuthenticated) {
    return <MessageInputForm handleSubmit={handleSubmit} />
  }
  return (
    <div>
      <Button
        href='/login/twitter'
        bsStyle='primary'>
        <span className='icon-group'>
          <TwitterIcon />
          Login with Twitter
        </span>
      </Button> if you want to join the conversation
    </div>
  )
}

const ChatPage = React.createClass({
  render () {
    return (
      <div className='messages-panel'>
        <div className='panel-body'>
          <MessageList
            messages={this.props.messages} />
        </div>
        <div className='panel-footer'>
          <Footer user={this.props.user} handleSubmit={this.props.handleSubmit} />
        </div>
      </div>
    )
  }
})

export default ChatPage
