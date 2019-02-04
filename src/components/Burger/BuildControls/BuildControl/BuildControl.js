import React from 'react'
import './BuildControl.css'

const classes = {
  BuildControl: 'BuildControl',
  Label: 'Label',
  Less: 'Less',
  More: 'More'
}

const BuildControl  = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button className={classes.Less} onClick={props.remove}>Less</button>
    <button className={classes.More} onClick={props.add}>More</button>
  </div>
)

export default BuildControl
