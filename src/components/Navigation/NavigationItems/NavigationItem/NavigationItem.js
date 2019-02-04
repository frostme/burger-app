import React from 'react'
import './NavigationItem.css'

const classes = {
  NavigationItem: 'NavigationItem',
  active: 'active'
}

const navigationItem = (props) => (
  <li className={classes.NavigationItem}>
    <a href={props.link} className={props.active ? classes.active : null}>{props.children}</a>
  </li>
)

export default navigationItem
