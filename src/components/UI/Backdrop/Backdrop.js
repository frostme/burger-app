import React from 'react'
import './Backdrop.css'

const classes = {
  Backdrop: 'Backdrop'
}

const backdrop = (props) => (
  props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
)

export default backdrop
