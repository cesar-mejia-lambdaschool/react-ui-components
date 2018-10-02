import React, { Fragment } from 'react'

import HeaderContainer from './components/HeaderComponents/HeaderContainer'

import './App.css'

const App = () => {
  return (
    <Fragment>
      <HeaderContainer />
      <i className='far fa-comment' />
      <i class='fas fa-sync-alt' />
      <i class='far fa-heart' />
      <i class='far fa-envelope' />
    </Fragment>
  )
}

export default App
