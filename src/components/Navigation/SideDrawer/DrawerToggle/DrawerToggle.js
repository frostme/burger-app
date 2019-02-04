import React from 'react'
import './DrawerToggle.css'

const classes = {
  DrawerToggle: 'DrawerToggle'
}

const drawerToggle = (props) => (
  <div className={classes.DrawerToggle} onClick={props.clicked}>
    <div />
    <div />
    <div />
  </div>
)

export default drawerToggle
