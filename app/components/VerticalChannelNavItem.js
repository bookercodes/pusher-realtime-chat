import React from 'react'
import {Link, IndexLink} from 'react-router'

const VerticalChannelNavItem = React.createClass({
  renderLink () {
    if (this.props.index === 0) {
      return (
        <IndexLink
          to={`/channels/${this.props.channel}`}
          className='channel-nav__link'
          activeClassName='active'>
          {this.props.channel}
        </IndexLink>
      )
    }
    return (
      <Link
        to={`/channels/${this.props.channel}`}
        className='channel-nav__link'
        activeClassName='active'>
        {this.props.channel}
      </Link>
    )
  },

  render () {
    return (
      <li>{this.renderLink()}</li>
    )
  }
})

export default VerticalChannelNavItem
