import React from 'react'
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap'
import {NavItem} from 'react-bootstrap'

const VerticalChannelNavItem = React.createClass({
  renderNavItem () {
    return (
      <NavItem style={{
        float: 'none',
        display: 'block'
      }}>
      {this.props.channel}
      </NavItem>
    )
  },

  render () {
    if (this.props.index === 0) {
      return (
        <IndexLinkContainer
          to={`/channels/${this.props.channel}`}
          activeClassName='active'>
          {this.renderNavItem()}
        </IndexLinkContainer>
      )
    }
    return (
      <LinkContainer
        to={`/channels/${this.props.channel}`}
        activeClassName='active'>
        {this.renderNavItem()}
      </LinkContainer>
    )
  }
})

export default VerticalChannelNavItem
