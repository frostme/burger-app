import React from 'react'
import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

const classes = {
  NavigationItems: 'NavigationItems'
}

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link='/' active>Burder Builder</NavigationItem>
    <NavigationItem link='/'>Checkout</NavigationItem>
  </ul>
)

export default navigationItems
