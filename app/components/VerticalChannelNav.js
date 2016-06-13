import {Navbar, Nav} from 'react-bootstrap'
import VerticalChannelNavItem from './VerticalChannelNavItem'

const VerticalChannelNav = ({channels}) => (
  <div style={{
    height: '100%'
  }}>
    <Navbar fluid className='chat-room-nav'>
      <Navbar.Header>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse className='chat-room-nav-collapse'>
        <Nav className='chat-room-nav-ul'>
           {channels.map((channel, i) => <VerticalChannelNavItem key={i} channel={channel} index={i} />)}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <div className='chat-room-nav-footer'>
      Built in a weekend by <a href='https://twitter.com/bookercodes'>Alex Booker</a>. Powered by <a href='https://pusher.com/'>Pusher</a>.
    </div>
  </div>
)

export default VerticalChannelNav
