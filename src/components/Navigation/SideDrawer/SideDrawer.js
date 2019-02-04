import React from 'react'
import './SideDrawer.css'

import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'

const classes = {
  SideDrawer: 'SideDrawer',
  Open: 'Open',
  Closed: 'Closed'
}

const sideDrawer = (props) => {
  const attachedClasses = [classes.SideDrawer];
  if(props.open) attachedClasses.push(classes.Open)
  else attachedClasses.push(classes.Closed)

  return (
    <>
      <Backdrop show={props.open} clicked={props.closed}/>
      <div className={attachedClasses.join(' ')}>
        <div style={{ height: '11%', marginBottom: '32px'}}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  )
}

export default sideDrawer
