import SiteNav from '../components/SiteNav'
import React from 'react'

const Layout = ({children}) => (
  <div className='channel-view'>
    <SiteNav user={window.INITIAL_STATE.user} />
    {React.cloneElement(children, { user: window.INITIAL_STATE.user })}
  </div>
)

export default Layout
