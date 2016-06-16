import TwitterIcon from './icons/TwitterIcon'
import {MessageList, MessageInputForm} from '../components'
import {Panel, Button} from 'react-bootstrap'

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

const MessagePanel = ({
  user,
  handleSubmit,
  messages,
  channelName
}) => (
  <Panel
    header={channelName}
    footer={<Footer user={user} handleSubmit={handleSubmit} />}
    bsStyle='info'
    className='messages-panel' >
    <MessageList
      messages={messages} />
  </Panel>
)

export default MessagePanel
