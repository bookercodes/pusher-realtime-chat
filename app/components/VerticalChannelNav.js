import VerticalChannelNavItem from './VerticalChannelNavItem'

const VerticalChannelNav = ({channels}) => (
  <nav className='channel-nav'>
    <ul className='channel-nav__list'>
       {channels.map((channel, i) => <VerticalChannelNavItem key={i} channel={channel} index={i} />)}
    </ul>
  </nav>
)

export default VerticalChannelNav
