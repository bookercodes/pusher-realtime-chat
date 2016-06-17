import React from 'react'
import TwitterIcon from './TwitterIcon'
import {LinkContainer} from 'react-router-bootstrap'
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Image
} from 'react-bootstrap'

const SiteNav = React.createClass({
  renderLoginNavItem () {
    return (
      <NavItem href='/login/twitter'>
        <span className='icon-group'>
          <TwitterIcon />
          Login with Twitter
        </span>
      </NavItem>
    )
  },

  renderAccountNavDropdown () {
    const title = (
      <span>
        <Image src={this.props.user.photo} className='avatar' />
        {this.props.user.displayName}
      </span>
    )
    return (
      <NavDropdown title={title} id='basic-nav-dropdown'>
        <MenuItem href='/logout'>Logout</MenuItem>
      </NavDropdown>
    )
  },

  render () {
    return (
      <Navbar className='site-nav' inverse fluid fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='#'>Realtime Chat</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to='/channels' activeClassName='active'>
              <NavItem>Chat</NavItem>
            </LinkContainer>
            <LinkContainer to='/about' activeClassName='active'>
              <NavItem>About</NavItem>
            </LinkContainer>
          </Nav>
          <Nav pullRight>
            {this.props.user.isAuthenticated
              ? this.renderAccountNavDropdown()
              : this.renderLoginNavItem()}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
})

export default SiteNav
